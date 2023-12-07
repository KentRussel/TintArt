import React, { useEffect, useRef } from 'react';
import { useAppContext } from '../../context/AppContext';

const FacebookMsg = () => {
  const { state } = useAppContext();

  useEffect(() => {
    if (state.isAuth && (state?.user?.role === 3 || state?.user?.role === 2)) {
      return; // Do nothing if the user role is 3 or 2
    }

    // Logic handling for messenger API
    const messengerRef = useRef(null);

    const initializeFacebookSDK = () => {
      window.fbAsyncInit = function () {
        window.FB.init({
          xfbml: true,
          version: 'v18.0'
        });
      };

      (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    };

    const setupMessengerAttributes = () => {
      if (messengerRef.current) {
        messengerRef.current.setAttribute("page_id", "113081511298424");
        messengerRef.current.setAttribute("attribution", "biz_inbox");
      }
    };

    initializeFacebookSDK();
    setupMessengerAttributes();
  }, [state.isAuth, state?.user?.role]);

  return (
    <>
      {state?.user?.role === 0 && state?.user?.role !== 2 && (
        <>
          <div id="fb-root"></div>
          <div ref={messengerRef} id="fb-customer-chat" className="fb-customerchat">
          </div>
        </>
      )}
    </>
  );
};

export default FacebookMsg;
