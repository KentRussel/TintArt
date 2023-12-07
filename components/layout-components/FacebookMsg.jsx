"use client";
import React, { Component, useEffect, useRef } from 'react';

const FacebookMsg = () => {
//logic handling for messenger API
const messengerRef = useRef(null);
useEffect(()=>{
  messengerRef.current.setAttribute("page_id", "113081511298424");
  messengerRef.current.setAttribute("attribution", "biz_inbox");
  window.fbAsyncInit = function() {
            FB.init({
              xfbml  : true,
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
},[])
  return (
  <>
      <div id="fb-root"></div>
      <div ref={(e)=>messengerRef.current = e} id="fb-customer-chat" class="fb-customerchat">
      </div>  
  </>
  )
  }

export default FacebookMsg;