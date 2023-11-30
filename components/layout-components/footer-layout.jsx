import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import CustomerWrapper from './customer-wrapper';
import { getAllShop } from '../../services/shop.services';
import DATA from '../../utils/DATA';

const FooterLayout = () => {
  const [shopData, setShopData] = useState(null);
  const [isPrivacyPolicyModalVisible, setPrivacyPolicyModalVisible] = useState(false);

  const loadHandler = async () => {
    // fetch shop
    const shop_result = await getAllShop();
    if (shop_result.success && shop_result?.data?.length > 0) {
      setShopData(shop_result?.data[0]);
    }
  };

  useEffect(() => {
    // Load shop data
    loadHandler();

    // Initialize Messenger Chat Plugin
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: 'v18.0',
      });
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  const FooterLinks = ({ data, headings }) => {
    return (
      <div className='w-full flex flex-col gap-4'>
        <p className='underline text-red-700 font-semibold text-lg'>{headings}</p>
        {data.map((item, key) => (
          <div key={item?.name + key}>
            {item?.link && (
              <Link target='_blank' key={`${headings}-${key}`} href={item?.link || ''}>
                <p className='hover:text-red-700 capitalize transition-colors'>{item?.name}</p>
              </Link>
            )}
          </div>
        ))}
      </div>
    );
  };

  const PrivacyPolicyModal = ({ isVisible, onClose, privacyPolicyText }) => {
    if (!isVisible) return null;

    const closeModal = () => {
      onClose && onClose(); // Close the modal if onClose is provided
    };

    return (
      <div
        className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 overflow-y-auto'
        onClick={closeModal} // Close modal when clicking outside
      >
        <div className='bg-white p-8 max-w-md' onClick={(e) => e.stopPropagation()}>
          {/* Close button */}
          {onClose && (
            <button className='absolute top-2 right-2' onClick={onClose}>
              Close
            </button>
          )}
          {/* Privacy policy content */}
          <div style={{ maxHeight: '50vh', overflowY: 'auto' }}>{privacyPolicyText}</div>
        </div>
      </div>
    );
  };

  return (
    <CustomerWrapper containerClass='bg-zinc-900 p-4'>
      <div className='text-zinc-100 bg-zinc-900'>
        <div className='flex justify-between flex-col gap-10 lg:flex-row py-10'>
          <div className='flex flex-col gap-4 w-full'>
            <img alt='logo' src='/images/logo.png' className='w-[20rem] object-cover' />
            {shopData && <p>Email: {shopData.email}</p>}
            {/* Open modal when "Privacy Policy" link is clicked */}
            <p>
              <a
                href="#"
                className='text-blue-500 underline'
                onClick={(e) => {
                  e.preventDefault();
                  setPrivacyPolicyModalVisible(true);
                }}
              >
                Privacy Policy
              </a>
            </p>
          </div>
          <div className='flex gap-10 lg:flex-row flex-col w-full'>
            <FooterLinks data={DATA.FOOTER.LINKS} headings='Links' />
            <FooterLinks
              data={[
                { name: 'Facebook', link: shopData?.facebook_link },
                { name: 'Instagram', link: shopData?.instagram_link },
                { name: 'TikTok', link: shopData?.tiktok_link },
                { name: 'Shopee', link: shopData?.tiktok_link },
              ]}
              headings='Follow Us'
            />
          </div>
        </div>
        <p className='w-full text-center p-10'>Copyright © 2023 TintArt. All Rights Reserved.</p>
      </div>

      {/* Render the modal component */}
      <PrivacyPolicyModal
        isVisible={isPrivacyPolicyModalVisible}
        onClose={() => setPrivacyPolicyModalVisible(false)}
        privacyPolicyText={DATA.PRIVACY_POLICY}
      />

      {/* Messenger Chat Plugin container */}
      <div id="fb-root"></div>
      <div className="fb-customer-chat" />
    </CustomerWrapper>
  );
};

export default FooterLayout;
