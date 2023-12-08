"use client";
import React, { Component, useEffect, useRef } from 'react';
import { useAppContext } from '../../context/AppContext';
import { useRouter } from 'next/router';

const FacebookMsg = () => {
  const router = useRouter();
//logic handling for messenger API
const path = (router.pathname).split("/");
for(let i = 0; i <= path.length; i++){
  if(path[i] == "admin"){
    return;
  }
}
const messengerRef = useRef(null);
useEffect(()=>{
  if(messengerRef.current == null) return;
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
},[messengerRef.current])
  return (
  <>
    <div id="fb-root"></div>
      <div ref={(e)=>messengerRef.current = e} id="fb-customer-chat" class="fb-customerchat">
    </div>  
  </>
  )
  }

export default FacebookMsg;