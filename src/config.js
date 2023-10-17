export default {
    oidc: {
      issuer: 'https://dev-58683679.okta.com/oauth2/default',
      clientId: '0oacsesyogSKHU8W95d7',
      scopes: ['openid', 'profile', 'email'],
      redirectUri: `${window.location.origin}/login/callback`,
      useInteractionCodeFlow: false

    },
    widget: {
      issuer: 'https://dev-58683679.okta.com/oauth2/default',
      clientId: '0oacsesyogSKHU8W95d7',
      redirectUri: `${window.location.origin}/login/callback`,
      scopes: ['openid', 'profile', 'email'],
      useInteractionCodeFlow: false

    }
  };
  