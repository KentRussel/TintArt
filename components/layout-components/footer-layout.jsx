import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import CustomerWrapper from './customer-wrapper';
import { getAllShop } from '../../services/shop.services';
import DATA from '../../utils/DATA';

const FooterLayout = () => {
  const [shopData, setShopData] = useState(null);
  const [isPrivacyPolicyModalVisible, setPrivacyPolicyModalVisible] = useState(false);
  const [isTermsModalVisible, setTermsModalVisible] = useState(false);
  const [privacyPolicyText, setPrivacyPolicyText] = useState(''); // Placeholder text, replace with your actual privacy policy
  const [termsText, setTermsText] = useState(''); // Placeholder text, replace with your actual terms and conditions

  const loadHandler = async () => {
    // fetch shop
    const shop_result = await getAllShop();
    if (shop_result.success && shop_result?.data?.length > 0) {
      setShopData(shop_result?.data[0]);
    }
  };

  useEffect(() => {
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: 'v18.0',
      });
      
      // Load the Messenger Chat Plugin when shop data is available
      if (shopData) {
        FB.CustomerChat.showDialog();
      }
    };
  
    // Load Facebook SDK script
    const script = document.createElement('script');
    script.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  
    script.onload = () => {
      // Initialize Facebook SDK
      window.fbAsyncInit();
    };
  }, [shopData]);

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

  const PrivacyPolicyModal = ({ isVisible, onClose, contentText }) => {
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
          {/* Content */}
          <div style={{ maxHeight: '50vh', overflowY: 'auto' }}>{contentText}</div>
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
                href='#'
                className='text-blue-500 underline'
                onClick={(e) => {
                  e.preventDefault();
                  setPrivacyPolicyText(DATA.PRIVACY_POLICY); // Set privacy policy text
                  setPrivacyPolicyModalVisible(true);
                }}
              >
                Privacy Policy
              </a>
            </p>
            {/* Open modal when "Terms and Conditions" link is clicked */}
            <p>
              <a
                href='#'
                className='text-blue-500 underline'
                onClick={(e) => {
                  e.preventDefault();
                  setTermsText(`
                  Last updated October 18 2023
                  
                  AGREEMENT TO OUR LEGAL TERMS
                  We are Tofu Ink, doing business as TintArt, a company located in the Philippines at .
                  We operate the website https://tintart.vercel.app/, as well as any other related products and services that refer or link to these terms and conditions (the “Legal Terms”) (collectively, the “Services”).
                  We provide a platform where you can customize your own goods, and have it sent to our Facebook page directly through the Messenger plugin of our site. You may also buy ready-made products that we are selling and is posted on our website.
                  You can contact us by phone at [insert phone num here], or email at [insert email address here].
                  1.	Acceptance of Terms
                  These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”), and Tofu Ink, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                  
                  2.	Description of Services
                  We provide a variety of products and services such as Print Customization through our eCommerce platform. Descriptions, pricing, and availability is subject to change without notice. We reserve the right to modify or discontinue any product or service at any time.
                  
                  2.1	Customization of Merchandise
                  TintArt allows you to customize designs on merchandise such as t-shirts, photo cards, and sintra boards. By using the customization feature, you grant us permission to use and display your designs on our social media pages  and marketing materials unless otherwise specified.
                  2.2	Purchasing of Products
                  Our website allows you to browse, select and purchase products, wherein we gather information to track your orders and addresses (See Privacy Policy for more information about your data).
                  
                  3.	Ordering and Payment
                  Payment terms and fees for Tofu Ink services are determined on a per-order basis and will be specified in a separate agreement or invoice provided to you. Payment is expected upon receipt of the invoice unless otherwise agreed upon.
                  
                  3.1	Orders
                  When you place an order with us, it constitutes an offer to purchase the product(s). We reserve the right to accept or reject any order at our discretion.
                  
                  3.2	Payment
                  The payment options will be available for selection upon checking out the products, but the payment processing is handled by Tofu Ink, the merchant. TintArt is not responsible for the payment processing itself.
                  
                  4.	Shipping and Delivery
                  We will make reasonable efforts to deliver the merchandise promptly, but we are not liable for delays due to unforeseen circumstances. The delivery times may also vary based on your location.
                  
                  5.	Returns and Refunds
                  The number of revisions and refund policies will be outlined in the project agreement. Tofu Ink maintains a strict "no refunds" policy. Generally, minor revisions are included in the project fee, while significant changes may incur additional charges. Refunds will not be granted under any circumstances.
                  
                  6.	Privacy and Data Collection
                  We collect and use your personal information in accordance with our Privacy Policy, which is an integral part of these Terms and Conditions.
                  
                  7.	Limitation of Liability
                  Tofu Ink is not liable for any consequential, incidental, special, or indirect damages resulting from the use of our services or any errors or omissions in our work.
                  
                  8.	Contact Information
                  For any inquiries or concerns regarding these Terms and Conditions, please contact us at [Contact Information].
                  
                  By using our services, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
                  `);
                  setTermsModalVisible(true);
                }}
              >
                Terms and Conditions
              </a>
            </p>
          </div>
          <div className='flex gap-10 lg:flex-row flex-col w-full'>
            <FooterLinks data={DATA.FOOTER.LINKS} headings='Links' />
          </div>
        </div>
        <p className='w-full text-center p-10'>Copyright © 2023 TintArt. All Rights Reserved.</p>
      </div>

      {/* Render the Privacy Policy modal component */}
      <PrivacyPolicyModal
        isVisible={isPrivacyPolicyModalVisible}
        onClose={() => setPrivacyPolicyModalVisible(false)}
        contentText={privacyPolicyText}
      />

      {/* Render the Terms and Conditions modal component */}
      <PrivacyPolicyModal
        isVisible={isTermsModalVisible}
        onClose={() => setTermsModalVisible(false)}
        contentText={termsText}
      />
    </CustomerWrapper>
  );
};

export default FooterLayout;
