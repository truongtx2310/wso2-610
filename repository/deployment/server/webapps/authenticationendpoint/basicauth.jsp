<%--
  ~ Copyright (c) 2014, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
  ~
  ~ WSO2 Inc. licenses this file to you under the Apache License,
  ~ Version 2.0 (the "License"); you may not use this file except
  ~ in compliance with the License.
  ~ You may obtain a copy of the License at
  ~
  ~ http://www.apache.org/licenses/LICENSE-2.0
  ~
  ~ Unless required by applicable law or agreed to in writing,
  ~ software distributed under the License is distributed on an
  ~ "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  ~ KIND, either express or implied.  See the License for the
  ~ specific language governing permissions and limitations
  ~ under the License.
  --%>

<%@ page import="org.apache.cxf.jaxrs.client.JAXRSClientFactory" %>
<%@ page import="org.apache.cxf.jaxrs.provider.json.JSONProvider" %>
<%@ page import="org.apache.cxf.jaxrs.client.WebClient" %>
<%@ page import="org.apache.http.HttpStatus" %>
<%@ page import="org.owasp.encoder.Encode" %>
<%@ page import="org.wso2.carbon.identity.application.authentication.endpoint.util.client.SelfUserRegistrationResource" %>
<%@ page import="org.wso2.carbon.identity.application.authentication.endpoint.util.AuthenticationEndpointUtil" %>
<%@ page import="org.wso2.carbon.identity.application.authentication.endpoint.util.bean.ResendCodeRequestDTO" %>
<%@ page import="org.wso2.carbon.identity.application.authentication.endpoint.util.bean.PropertyDTO" %>
<%@ page import="org.wso2.carbon.identity.application.authentication.endpoint.util.bean.UserDTO" %>
<%@ page import="java.net.URLEncoder" %>
<%@ page import="java.net.URLDecoder" %>
<%@ page import="java.util.regex.Pattern" %>
<%@ page import="javax.ws.rs.core.Response" %>
<%@ page import="javax.servlet.http.HttpServletRequest" %>
<%@ page import="static org.wso2.carbon.identity.core.util.IdentityUtil.isSelfSignUpEPAvailable" %>
<%@ page import="static org.wso2.carbon.identity.core.util.IdentityUtil.isRecoveryEPAvailable" %>
<%@ page import="static org.wso2.carbon.identity.core.util.IdentityUtil.isEmailUsernameEnabled" %>
<%@ page import="static org.wso2.carbon.identity.core.util.IdentityUtil.getServerURL" %>
<%@ page import="org.apache.commons.codec.binary.Base64" %>
<%@ page import="org.apache.commons.text.StringEscapeUtils" %>
<%@ page import="java.nio.charset.Charset" %>
<%@ page import="org.wso2.carbon.base.ServerConfiguration" %>
<%@ page import="org.wso2.carbon.identity.application.authentication.endpoint.util.EndpointConfigManager" %>
<%@ page import="org.wso2.carbon.identity.core.URLBuilderException" %>
<%@ page import="org.wso2.carbon.identity.core.ServiceURLBuilder" %>
<%@ page import="org.wso2.carbon.identity.mgt.endpoint.util.IdentityManagementEndpointUtil" %>
<%@ page import="org.wso2.carbon.identity.mgt.endpoint.util.client.ApplicationDataRetrievalClient" %>
<%@ page import="org.wso2.carbon.identity.mgt.endpoint.util.client.ApplicationDataRetrievalClientException" %>
<%@ page import="org.wso2.carbon.identity.mgt.endpoint.util.client.PreferenceRetrievalClient" %>
<%@ page import="org.wso2.carbon.identity.mgt.endpoint.util.client.PreferenceRetrievalClientException" %>
<%@ page import="java.io.*" %>
<%@ page import="java.util.Arrays" %>
<%@ page import="java.util.List" %>
<%@ page import="java.util.Locale" %>
<%@ page import="java.util.Map" %>
<%@ page import="java.util.TreeMap" %>
<%@ page import="org.json.JSONObject" %>
<%@ page import="java.net.*" %>

<jsp:directive.include file="includes/init-loginform-action-url.jsp"/>
<jsp:directive.include file="plugins/basicauth-extensions.jsp"/>

<%
    String proxyContextPath = ServerConfiguration.getInstance().getFirstProperty(IdentityCoreConstants
            .PROXY_CONTEXT_PATH);
    if (proxyContextPath == null) {
        proxyContextPath = "";
    }
%>
<script>
    function goBack() {
        document.getElementById("restartFlowForm").submit();
    }

    function onCompleted() {
        $('#loginForm').submit();
    }

    // Handle form submission preventing double submission.
    $(document).ready(function(){
        $.fn.preventDoubleSubmission = function() {
            $(this).on('submit',function(e){
                var $form = $(this);
                if ($form.data('submitted') === true) {
                    // Previously submitted - don't submit again.
                    e.preventDefault();
                    console.warn("Prevented a possible double submit event");
                } else {
                    e.preventDefault();
                    <%
                        if (reCaptchaEnabled) {
                    %>
                    if (!grecaptcha.getResponse()) {
                        grecaptcha.execute();
                        return;
                    }
                    <%
                        }
                    %>
                    var userName = document.getElementById("username");
                    userName.value = userName.value.trim();

                    if (userName.value) {
                        let contextPath = "<%=proxyContextPath%>"
                        if (contextPath !== "") {
                            contextPath = contextPath.startsWith('/') ? contextPath : "/" + contextPath
                            contextPath = contextPath.endsWith('/') ?
                                contextPath.substring(0, contextPath.length - 1) : contextPath
                        }
                        $.ajax({
                            type: "GET",
                            url: contextPath + "<%=loginContextRequestUrl%>",
                            xhrFields: { withCredentials: true },
                            success: function (data) {
                                if (data && data.status == 'redirect' && data.redirectUrl && data.redirectUrl.length > 0) {
                                    window.location.href = data.redirectUrl;
                                } else if ($form.data('submitted') !== true) {
                                    $form.data('submitted', true);
                                    document.getElementById("loginForm").submit();
                                } else {
                                    console.warn("Prevented a possible double submit event.");
                                }
                            },
                            cache: false
                        });
                    }
                }
            });

            return this;
        };
        $('#loginForm').preventDoubleSubmission();
    });

</script>

<%!
    private static final String JAVAX_SERVLET_FORWARD_REQUEST_URI = "javax.servlet.forward.request_uri";
    private static final String JAVAX_SERVLET_FORWARD_QUERY_STRING = "javax.servlet.forward.query_string";
    private static final String UTF_8 = "UTF-8";
    private static final String TENANT_DOMAIN = "tenant-domain";
    private static final String ACCOUNT_RECOVERY_ENDPOINT = "/accountrecoveryendpoint";
    private static final String ACCOUNT_RECOVERY_ENDPOINT_RECOVER = "/recoveraccountrouter.do";
    private static final String ACCOUNT_RECOVERY_ENDPOINT_REGISTER = "/register.do";
%>
<%
    String emailUsernameEnable = application.getInitParameter("EnableEmailUserName");
    Boolean isEmailUsernameEnabled = false;
    Boolean isSyncASC = false;
    String usernameLabel = "email";

    Boolean isSelfSignUpEnabledInTenant;
    Boolean isUsernameRecoveryEnabledInTenant;
    Boolean isPasswordRecoveryEnabledInTenant;
    Boolean isMultiAttributeLoginEnabledInTenant;

    if (StringUtils.isNotBlank(emailUsernameEnable)) {
        isEmailUsernameEnabled = Boolean.valueOf(emailUsernameEnable);
    } else {
        isEmailUsernameEnabled = isEmailUsernameEnabled();
    }

    try {
        PreferenceRetrievalClient preferenceRetrievalClient = new PreferenceRetrievalClient();
        isSelfSignUpEnabledInTenant = preferenceRetrievalClient.checkSelfRegistration(tenantDomain);
        isUsernameRecoveryEnabledInTenant = preferenceRetrievalClient.checkUsernameRecovery(tenantDomain);
        isPasswordRecoveryEnabledInTenant = preferenceRetrievalClient.checkPasswordRecovery(tenantDomain);
        isMultiAttributeLoginEnabledInTenant = preferenceRetrievalClient.checkMultiAttributeLogin(tenantDomain);
    } catch (PreferenceRetrievalClientException e) {
        request.setAttribute("error", true);
        request.setAttribute("errorMsg", AuthenticationEndpointUtil
                .i18n(resourceBundle, "something.went.wrong.contact.admin"));
        IdentityManagementEndpointUtil.addErrorInformation(request, e);
        request.getRequestDispatcher("error.jsp").forward(request, response);
        return;
    }
	
    if (isEmailUsernameEnabled == true) {
        usernameLabel = "email.username";
    } else if (isMultiAttributeLoginEnabledInTenant) {
        usernameLabel = "user.identifier";
    }

    String resendUsername = request.getParameter("resend_username");

    if (StringUtils.isNotBlank(resendUsername)) {

        String recieve;
        String buffer = "";
        URL jsonpage = new URL("https://b2capi.iigvietnam.com/b2cuser/resendconfirmationcode?username="+resendUsername);
        URLConnection urlcon = jsonpage.openConnection();
        BufferedReader buffread = new BufferedReader(new InputStreamReader(urlcon.getInputStream()));

        while ((recieve = buffread.readLine()) != null){
            buffer += recieve;
        }
        buffread.close();

        if (buffer.equals("True")) {
%>
<div class="ui visible positive message">
    <%=AuthenticationEndpointUtil.i18n(resourceBundle,Constants.ACCOUNT_RESEND_SUCCESS_RESOURCE)%>
</div>
<%
} else {
%>
<div class="ui visible negative message">
    <%=AuthenticationEndpointUtil.i18n(resourceBundle,Constants.ACCOUNT_RESEND_FAIL_RESOURCE)%>
</div>
<%
        }
    }
%>

<% if (StringUtils.equals(request.getParameter("errorCode"), IdentityCoreConstants.USER_ACCOUNT_LOCKED_ERROR_CODE) &&
        StringUtils.equals(request.getParameter("remainingAttempts"), "0") ) {
    if (StringUtils.equals(request.getParameter("lockedReason"), "AdminInitiated")) { %>
        <div class="ui visible negative message" lockedReasonid="error-msg" data-testid="login-page-error-message">
            <%=AuthenticationEndpointUtil.i18n(resourceBundle, "error.user.account.locked.admin.initiated")%>
        </div>
    <% } else { %>
        <div class="ui visible negative message" lockedReasonid="error-msg" data-testid="login-page-error-message">
            <%=AuthenticationEndpointUtil.i18n(resourceBundle, "error.user.account.locked.incorrect.login.attempts")%>
        </div>
    <% }
} else if (Boolean.parseBoolean(loginFailed) &&
        !(IdentityCoreConstants.USER_ACCOUNT_NOT_CONFIRMED_ERROR_CODE).equals(errorCode)) { %>
<div class="ui visible negative message" id="error-msg" data-testid="login-page-error-message">
	<% if(!isSyncASC) {%> 
    <%= AuthenticationEndpointUtil.i18n(resourceBundle, errorMessage) %>
	<% } else { %>
	 ASC pls change pw
	<% } %>
</div>
<% } else if ((Boolean.TRUE.toString()).equals(request.getParameter("authz_failure"))){%>
<div class="ui visible negative message" id="error-msg" data-testid="login-page-error-message">
    <%=AuthenticationEndpointUtil.i18n(resourceBundle, "unauthorized.to.login")%>
</div>
<% } else { %>
    <div class="ui visible negative message" style="display: none;" id="error-msg" data-testid="login-page-error-message"></div>
<% } %>

<% if (Boolean.parseBoolean(loginFailed) && errorCode.equals(IdentityCoreConstants.USER_ACCOUNT_NOT_CONFIRMED_ERROR_CODE) && request.getParameter("resend_username") == null) { %>
    <div class="ui visible warning message" id="error-msg" data-testid="login-page-error-message">
        <form action="login.do?resend_username=<%=Encode.forHtml(URLEncoder.encode(request.getParameter("failedUsername"), UTF_8))%>&<%=AuthenticationEndpointUtil.cleanErrorMessages(Encode.forJava(request.getQueryString()))%>" method="post" id="resendForm">
            <%= AuthenticationEndpointUtil.i18n(resourceBundle, errorMessage) %>

            <div class="ui divider hidden"></div>

            <%=AuthenticationEndpointUtil.i18n(resourceBundle, "no.confirmation.mail")%>

            <button id="registerLink"
                class="resend-button g-recaptcha"
                <%
                    if (reCaptchaResendEnabled) {
                %>
                data-sitekey="<%=Encode.forHtmlContent(reCaptchaKey)%>"
                <%
                    }
                %>
                data-callback="onSubmitResend"
                data-action="resendConfirmation"
                data-testid="login-page-resend-confirmation-email-link"
            >
                <%=StringEscapeUtils.escapeHtml4(AuthenticationEndpointUtil.i18n(resourceBundle, "resend.mail"))%>
            </button>
        </form>
    </div>
    <div class="ui divider hidden"></div>
<% } %>

<form class="ui large form" action="<%=loginFormActionURL%>" method="post" id="loginForm">
    <%
        if (loginFormActionURL.equals(samlssoURL) || loginFormActionURL.equals(oauth2AuthorizeURL)) {
    %>
    <input id="tocommonauth" name="tocommonauth" type="hidden" value="true">
    <%
        }
    %>

    <% if(Boolean.parseBoolean(request.getParameter("passwordReset"))) {
    %>
        <div class="ui visible positive message" data-testid="password-reset-success-message">
            <%=AuthenticationEndpointUtil.i18n(resourceBundle, "Updated.the.password.successfully")%>
        </div>
   <% } %>
    <% if (!isIdentifierFirstLogin(inputType)) { %>
        <div class="field">
            <div class="ui fluid left icon input">
                <input
                    type="text"
                    id="username"
                    value=""
                    name="username"
                    tabindex="1"
                    placeholder="<%=AuthenticationEndpointUtil.i18n(resourceBundle, usernameLabel)%>"
                    data-testid="login-page-username-input"
                    required>
                <i aria-hidden="true" class="user icon"></i>
            </div>
        </div>
    <% } else { %>
        <input id="username" name="username" type="hidden" data-testid="login-page-username-input" value="<%=username%>">
    <% } %>
        <div class="field">
            <div class="ui fluid left icon input addon-wrapper">
                <input
                    type="password"
                    id="password"
                    name="password"
                    value=""
                    autocomplete="off"
                    tabindex="2"
                    placeholder="<%=AuthenticationEndpointUtil.i18n(resourceBundle, "password")%>"
                    data-testid="login-page-password-input"
                    style="padding-right: 2.3em !important;"
                >
                <i aria-hidden="true" class="lock icon"></i>
                <i id="passwordUnmaskIcon"
                   class="eye icon mr-0"
                   style="margin: 0 auto; right: 0; pointer-events: auto; cursor: pointer;"></i>
            </div>
        </div>

    <%
    if (reCaptchaEnabled) {
    %>
        <div class="g-recaptcha"
                data-size="invisible"
                data-callback="onCompleted"
                data-action="login"
                data-sitekey=
                        "<%=Encode.forHtmlContent(reCaptchaKey)%>">
        </div>
    <%
        }
    %>

    <%
        String recoveryEPAvailable = application.getInitParameter("EnableRecoveryEndpoint");
        String enableSelfSignUpEndpoint = application.getInitParameter("EnableSelfSignUpEndpoint");
        Boolean isRecoveryEPAvailable = false;
        Boolean isSelfSignUpEPAvailable = false;
        String identityMgtEndpointContext = "";
        String accountRegistrationEndpointURL = "";
        String urlEncodedURL = "";
        String urlParameters = "";

        if (StringUtils.isNotBlank(recoveryEPAvailable)) {
            isRecoveryEPAvailable = Boolean.valueOf(recoveryEPAvailable);
        } else {
            isRecoveryEPAvailable = isRecoveryEPAvailable();
        }

        if (StringUtils.isNotBlank(enableSelfSignUpEndpoint)) {
            isSelfSignUpEPAvailable = Boolean.valueOf(enableSelfSignUpEndpoint);
        } else {
            isSelfSignUpEPAvailable = isSelfSignUpEPAvailable();
        }

        if (isRecoveryEPAvailable || isSelfSignUpEPAvailable) {
            String urlWithoutEncoding = null;
            try {
                ApplicationDataRetrievalClient applicationDataRetrievalClient = new ApplicationDataRetrievalClient();
                urlWithoutEncoding = applicationDataRetrievalClient.getApplicationAccessURL(tenantDomain,
                                        request.getParameter("sp"));
                urlWithoutEncoding =  IdentityManagementEndpointUtil.replaceUserTenantHintPlaceholder(
                                                                        urlWithoutEncoding, userTenantDomain);
            } catch (ApplicationDataRetrievalClientException e) {
                //ignored and fallback to login page url
            }

            if (StringUtils.isBlank(urlWithoutEncoding)) {
                String scheme = request.getScheme();
                String serverName = request.getServerName();
                int serverPort = request.getServerPort();
                String uri = (String) request.getAttribute(JAVAX_SERVLET_FORWARD_REQUEST_URI);
                String prmstr = URLDecoder.decode(((String) request.getAttribute(JAVAX_SERVLET_FORWARD_QUERY_STRING)), UTF_8);
                urlWithoutEncoding = scheme + "://" +serverName + ":" + serverPort + uri + "?" + prmstr;
            }

            urlEncodedURL = URLEncoder.encode(urlWithoutEncoding, UTF_8);
            urlParameters = (String) request.getAttribute(JAVAX_SERVLET_FORWARD_QUERY_STRING);

            identityMgtEndpointContext = application.getInitParameter("IdentityManagementEndpointContextURL");
            if (StringUtils.isBlank(identityMgtEndpointContext)) {
                try {
                    identityMgtEndpointContext = ServiceURLBuilder.create().addPath(ACCOUNT_RECOVERY_ENDPOINT).build()
                            .getAbsolutePublicURL();
                } catch (URLBuilderException e) {
                    request.setAttribute(STATUS, AuthenticationEndpointUtil.i18n(resourceBundle, CONFIGURATION_ERROR));
                    request.setAttribute(STATUS_MSG, AuthenticationEndpointUtil
                            .i18n(resourceBundle, ERROR_WHILE_BUILDING_THE_ACCOUNT_RECOVERY_ENDPOINT_URL));
                    request.getRequestDispatcher("error.do").forward(request, response);
                    return;
                }
            }

            accountRegistrationEndpointURL = application.getInitParameter("AccountRegisterEndpointURL");
            if (StringUtils.isBlank(accountRegistrationEndpointURL)) {
                accountRegistrationEndpointURL = identityMgtEndpointContext + ACCOUNT_RECOVERY_ENDPOINT_REGISTER;
            }
        }
    %>

    <div class="buttons">
        <% if (isRecoveryEPAvailable && (isUsernameRecoveryEnabledInTenant || isPasswordRecoveryEnabledInTenant)) { %>
        <div class="field">
            <%=AuthenticationEndpointUtil.i18n(resourceBundle, "forgot.username.password")%>
            <% if (!isIdentifierFirstLogin(inputType) && isUsernameRecoveryEnabledInTenant) { %>
            <a
                id="usernameRecoverLink"
                tabindex="5"
                href="<%=StringEscapeUtils.escapeHtml4(getRecoverAccountUrl(identityMgtEndpointContext, urlEncodedURL, true, urlParameters))%>"
                data-testid="login-page-username-recovery-button"
            >
                <%=AuthenticationEndpointUtil.i18n(resourceBundle, "forgot.username")%>
            </a>
            <% }
              if (!isIdentifierFirstLogin(inputType) && isUsernameRecoveryEnabledInTenant && isPasswordRecoveryEnabledInTenant) { %>
            <%=AuthenticationEndpointUtil.i18n(resourceBundle, "forgot.username.password.or")%>
            <% }
              if (isPasswordRecoveryEnabledInTenant) { %>
            <a
                id="passwordRecoverLink"
                tabindex="6"
                href="<%=StringEscapeUtils.escapeHtml4(getRecoverAccountUrlWithUsername(identityMgtEndpointContext, urlEncodedURL, false, urlParameters, usernameIdentifier))%>"
                data-testid="login-page-password-recovery-button"
            >
                <%=AuthenticationEndpointUtil.i18n(resourceBundle, "forgot.password")%>
            </a>
            <% } %>
            ?
        </div>
        <% } %>

        <% if (isIdentifierFirstLogin(inputType)) { %>
        <div class="field">
            <a id="backLink" tabindex="7" onclick="goBack()" data-testid="login-page-back-button">
                <%=AuthenticationEndpointUtil.i18n(resourceBundle, "sign.in.different.account")%>
            </a>
        </div>
        <% } %>
    </div>

    <div class="ui divider hidden"></div>

    <div class="field">
        <div class="ui checkbox">
            <input
                tabindex="3"
                type="checkbox"
                id="chkRemember"
                name="chkRemember"
                data-testid="login-page-remember-me-checkbox"
            >
            <label><%=AuthenticationEndpointUtil.i18n(resourceBundle, "remember.me")%></label>
        </div>
    </div>
    <input type="hidden" name="sessionDataKey" value='<%=Encode.forHtmlAttribute
            (request.getParameter("sessionDataKey"))%>'/>

    <div class="ui divider hidden"></div>

    <!-- <div class="cookie-policy-message" data-testid="login-page-policy-messages">
        <%=AuthenticationEndpointUtil.i18n(resourceBundle, "privacy.policy.cookies.short.description")%>
        <a href="cookie_policy.do" target="policy-pane" data-testid="login-page-cookie-policy-link">
            <%=AuthenticationEndpointUtil.i18n(resourceBundle, "privacy.policy.cookies")%>
        </a>
        <%=AuthenticationEndpointUtil.i18n(resourceBundle, "privacy.policy.for.more.details")%>
        <br><br>
        <%=AuthenticationEndpointUtil.i18n(resourceBundle, "privacy.policy.privacy.short.description")%>
        <a href="privacy_policy.do" target="policy-pane" data-testid="login-page-privacy-policy-link">
            <%=AuthenticationEndpointUtil.i18n(resourceBundle, "privacy.policy.general")%>
        </a>
    </div>
    <div class="ui divider hidden"></div> -->

    <div class="mt-0">
        <div class="column buttons">
            <button
                class="ui primary fluid large button"
                tabindex="4"
                type="submit"
            >
                <%=StringEscapeUtils.escapeHtml4(AuthenticationEndpointUtil.i18n(resourceBundle, "continue"))%>
            </button>
        </div>
        <div class="column buttons">
            <% if (isSelfSignUpEPAvailable && !isIdentifierFirstLogin(inputType) && isSelfSignUpEnabledInTenant) { %>
            <button
                type="button"
                onclick="window.location.href='<%=StringEscapeUtils.escapeHtml4(getRegistrationUrl(accountRegistrationEndpointURL, urlEncodedURL, urlParameters))%>';"
                class="ui secondary fluid large button"
                id="registerLink"
                tabindex="8"
                role="button"
                data-testid="login-page-create-account-button"
            >
                <%=StringEscapeUtils.escapeHtml4(AuthenticationEndpointUtil.i18n(resourceBundle, "create.account"))%>
            </button>
            <% } %>
        </div>
    </div>

    <%!
        private String getRecoverAccountUrl(String identityMgtEndpointContext, String urlEncodedURL,
                boolean isUsernameRecovery, String urlParameters) {

			String urlString = identityMgtEndpointContext + ACCOUNT_RECOVERY_ENDPOINT_RECOVER + "?" + urlParameters
                    + "&isUsernameRecovery=" + isUsernameRecovery + "&callback=" + Encode
                    .forHtmlAttribute(urlEncodedURL);
					
            if(urlString.contains("ap.iigvietnam.com")){
				urlString = urlString.replace("topik.iigvietnam.com", "ap.iigvietnam.com");
			}
			if(urlString.contains("online.iigvietnam.com")){
				urlString = urlString.replace("topik.iigvietnam.com", "online.iigvietnam.com");
			}
			if(urlString.contains("pilotdangky.iigvietnam.com")){
				urlString = urlString.replace("topik.iigvietnam.com", "online.iigvietnam.com");
			}
            return urlString;
        }

        private String getRecoverAccountUrlWithUsername(String identityMgtEndpointContext, String urlEncodedURL,
                boolean isUsernameRecovery, String urlParameters, String username) {

            if (StringUtils.isNotBlank(username)) {
               urlParameters = urlParameters + "&username=" + Encode.forHtmlAttribute(username);
            }
			String urlString = identityMgtEndpointContext + ACCOUNT_RECOVERY_ENDPOINT_RECOVER + "?" + urlParameters
                    + "&isUsernameRecovery=" + isUsernameRecovery + "&callback=" + Encode
                    .forHtmlAttribute(urlEncodedURL);

			if(urlString.contains("ap.iigvietnam.com")){
				urlString = urlString.replace("topik.iigvietnam.com", "ap.iigvietnam.com");
			}
			if(urlString.contains("online.iigvietnam.com")){
				urlString = urlString.replace("topik.iigvietnam.com", "online.iigvietnam.com");
			}
			if(urlString.contains("pilotdangky.iigvietnam.com")){
				urlString = urlString.replace("topik.iigvietnam.com", "online.iigvietnam.com");
			}
            return urlString;
        }

        private String getRegistrationUrl(String accountRegistrationEndpointURL, String urlEncodedURL,
                String urlParameters) {

			String urlString = accountRegistrationEndpointURL + "?" + urlParameters + "&callback=" + Encode.forHtmlAttribute(urlEncodedURL);
			if(urlString.contains("ap.iigvietnam.com")){
				urlString = urlString.replace("topik.iigvietnam.com", "ap.iigvietnam.com");
			}
			if(urlString.contains("online.iigvietnam.com")){
				urlString = urlString.replace("topik.iigvietnam.com", "online.iigvietnam.com");
			}
			if(urlString.contains("pilotdangky.iigvietnam.com")){
				urlString = urlString.replace("topik.iigvietnam.com", "online.iigvietnam.com");
			}
            return urlString;
        }
    %>

    <script defer>

        /**
         * Toggles the password visibility using the attribute
         * type of the input.
         *
         * @param event {Event} click target
         * @description stops propagation
         */
        $("#passwordUnmaskIcon").click(function (event) {
            event.preventDefault();
            var $passwordInput = $("#password");

            if ($passwordInput.attr("type") === "password") {
                $(this).addClass("slash outline");
                $passwordInput.attr("type", "text");
            } else {
                $(this).removeClass("slash outline");
                $passwordInput.attr("type", "password");
            }
        });

        function onSubmitResend(token) {
           $("#resendForm").submit();
        }

    </script>

</form>

<form action="<%=loginFormActionURL%>" method="post" id="restartFlowForm">
    <input type="hidden" name="sessionDataKey" value='<%=Encode.forHtmlAttribute(request.getParameter("sessionDataKey"))%>'/>
    <input type="hidden" name="restart_flow" value='true'/>
    <input id="tocommonauth" name="tocommonauth" type="hidden" value="true">
</form>
