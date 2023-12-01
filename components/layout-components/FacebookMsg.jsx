"use client";

import { FacebookProvider, CustomChat } from 'react-facebook';

const FacebookMsg = () => {
    return (
      <FacebookProvider appId="1059396631863694" chatSupport>
        <CustomChat pageId="113081511298424" minimized={true}/>
      </FacebookProvider>    
    );
  }

export default FacebookMsg;