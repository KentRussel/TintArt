"use client";
import React, { Component, useEffect, useRef, useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { useRouter } from 'next/router';

const FacebookMsg = () => {
  const router = useRouter();
//logic handling for messenger API
const path = (router.pathname).split("/");
const [activePath, setActivePath] = useState(undefined);
const [firstLoad, setIsFirstLoad] = useState(true);
useEffect(()=>{
  for(let i = 0; i <= path.length; i++){
    if(path[i] == "admin"){
      setActivePath(path[i]);
      break;
    }else{
      setActivePath("");
    }
  }
},[router.pathname])
const messengerRef = useRef(null);
const messengerDiv = useRef(null);
useEffect(()=>{
  if(messengerRef.current == null) return;
    messengerRef.current.setAttribute("page_id", "113081511298424");
    messengerRef.current.setAttribute("attribution", "biz_inbox");
},[messengerRef.current])
useEffect(()=>{
  if(firstLoad){
    setIsFirstLoad(false);
    return;
  }
  const loadFunc = () =>{
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
  }
  if(activePath != "admin"){
    messengerDiv.current.classList.remove("hidden");
    // messengerRef.current.classList.remove("hidden");
    loadFunc();
  }else{
    messengerDiv.current.classList.add("hidden");
    // messengerRef.current.classList.add("hidden");
    return;
  }
},[activePath])
  return (
  <>
    <div ref={(e)=>messengerDiv.current = e} id="fb-root"></div>
      <div ref={(e)=>messengerRef.current = e} id="fb-customer-chat" className="fb-customerchat">
    </div>  
  </>
  )
  }

export default FacebookMsg;