export default {
    oidc: {
      issuer: 'https://dev-18400082.okta.com/oauth2/default',
      clientId: '0oacszhuupfK11QXm5d7',
      scopes: ['openid', 'profile', 'email'],
      redirectUri: `${window.location.origin}/login/callback`,
      useInteractionCodeFlow: false

    },
    widget: {
      issuer: 'https://dev-18400082.okta.com/oauth2/default',
      clientId: '0oacszhuupfK11QXm5d7',
      redirectUri: `${window.location.origin}/login/callback`,
      scopes: ['openid', 'profile', 'email'],
      useInteractionCodeFlow: false

    }
  };
  
