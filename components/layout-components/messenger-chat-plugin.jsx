import React, { useEffect } from 'react';

const MessengerChatPlugin = () => {
  useEffect(() => {
    // Load Messenger Chat Plugin script
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    // Initialize Messenger Chat Plugin
    window.fbAsyncInit = function() {
      FB.init({
        xfbml: true,
        version: 'v18.0'
      });
    };

    // Set attributes for the chatbox
    var chatbox = document.getElementById('fb-customer-chat');
    if (chatbox) {
      chatbox.setAttribute("page_id", "113081511298424");
      chatbox.setAttribute("attribution", "biz_inbox");
    }
  }, []); // Empty dependency array ensures that this effect runs once after the component mounts

  return (
    <>
      {/* Messenger Chat Plugin Code */}
      <div id="fb-root"></div>

      {/* Your Chat Plugin code */}
      <div id="fb-customer-chat" className="fb-customerchat"></div>

      {/* Your SDK code */}
      <script>
        {`
          var chatbox = document.getElementById('fb-customer-chat');
          chatbox.setAttribute("page_id", "113081511298424");
          chatbox.setAttribute("attribution", "biz_inbox");
        `}
      </script>

      <script>
        {`
          window.fbAsyncInit = function() {
            FB.init({
              xfbml: true,
              version: 'v18.0'
            });
          };

          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
        `}
      </script>
    </>
  );
};

export default MessengerChatPlugin;
