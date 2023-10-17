import React, { useEffect, useRef } from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import './../node_modules/@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import config from './config';

const OktaSignInWidget = ({ onSuccess, onError }) => {
  const widgetRef = useRef();
  useEffect(() => {
    if (!widgetRef.current) {
      return false;
    }

    const { issuer, clientId, redirectUri, scopes, useInteractionCode } = config.oidc;
    var searchParams = new URL(window.location.href).searchParams;
    var otp = searchParams.get('otp');
    var state = searchParams.get('state');

    const widget = new OktaSignIn({baseUrl: issuer.split('/oauth2')[0],
    clientId,
    redirectUri,
    //logo,
    i18n: {
      en: {
        'primaryauth.title': 'Sign in to React & Company',
      },
    },
    authParams: {
      // To avoid redirect do not set "pkce" or "display" here. OKTA-335945
      issuer,
      scopes,
    },
    useInteractionCodeFlow: useInteractionCode, // Set to true, if your org is OIE enabled
    state,
    otp
  });

   // Search for URL Parameters to see if a user is being routed to the application to recover password

   widget.useInteractionCodeFlow = false;
   widget.showSignInToGetTokens({
      el: widgetRef.current,
    }).then(onSuccess).catch(onError);

    return () => widget.remove();
  }, [onSuccess, onError]);

  return (<div ref={widgetRef} />);
};

export default OktaSignInWidget;

