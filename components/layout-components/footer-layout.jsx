import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import CustomerWrapper from './customer-wrapper';
import { getAllShop } from '../../services/shop.services';
import DATA from '../../utils/DATA';
import ModalLayout from './modal-layout';
import { Button } from 'flowbite-react';
import { useAppContext } from '../../context/AppContext';

const FooterLayout = () => {
  const [shopData, setShopData] = useState(null);
  const [isPrivacyPolicyModalVisible, setPrivacyPolicyModalVisible] = useState(false);
  const [isTermsModalVisible, setTermsModalVisible] = useState(false);
  const [privacyPolicyText, setPrivacyPolicyText] = useState(''); 
  const [termsText, setTermsText] = useState(''); 
  const [termsModal, setTermsModal] = useState(false)
  const [privacyModal, setPrivacyModal] = useState(false)
  const [shop, setShop] = useState([])

  const { state } = useAppContext()

  const loadHandler = async () => {
        const result_shop = await getAllShop()
        if (result_shop?.success) {
            if (result_shop?.data.length > 0)
                setShop(result_shop.data[0]);
        }
    }

    useEffect(() => {
      loadHandler()
  }, [state?.isAuth])

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

  const TermsModal = ({ modal, setModal, content }) => {
    return (
        <>
            {modal &&
                <ModalLayout>
                    <div className='flex flex-col z-[100] bg-white text-gray-700 rounded-lg shadow dark:bg-gray-700 h-[90%] max-w-[40rem] fixed'>
                      <div className='p-6 border-b rounded-t dark:border-gray-600 sticky'>
                          <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>Terms and Conditions</h3>
                      </div>
                      <div className='p-6 space-y-6 overflow-auto'>
                          <p
                              dangerouslySetInnerHTML={{ __html: content?.terms?.replace(/\n/g, '<br>') }}
                          ></p>
                      </div>
                      <div className="flex justify-end items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                          <Button color='gray' onClick={() => setModal(false)}>
                              Close
                          </Button>
                      </div>
                    </div>
                </ModalLayout>
            }
        </>
    )
  }

  const PrivacyModal = ({ modal, setModal, content }) => {
      return (
          <>
              {modal &&
                  <ModalLayout>
                    <div className='flex flex-col z-[100] bg-white text-gray-700 rounded-lg shadow dark:bg-gray-700 h-[90%] max-w-[40rem] fixed'>
                      <div className='p-6 border-b rounded-t dark:border-gray-600 sticky'>
                          <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>Privacy Policy</h3>
                      </div>
                      <div className='p-6 space-y-6 overflow-auto'>
                          <p
                              dangerouslySetInnerHTML={{ __html: content?.privacy?.replace(/\n/g, '<br>') }}
                          ></p>
                      </div>
                      <div className="flex justify-end items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                          <Button color='gray' onClick={() => setModal(false)}>
                              Close
                          </Button>
                      </div>
                    </div>
                  </ModalLayout>
              }
          </>
      )
  }

  return (
    <CustomerWrapper containerClass='bg-zinc-900 p-4'>
      <div className='text-zinc-100 bg-zinc-900'>
        <div className='flex justify-between flex-col gap-10 lg:flex-row py-10'>
          <div className='flex flex-col gap-4 w-full'>
            <img alt='logo' src='/images/logo.png' className='w-[20rem] object-cover' />
            <p>Email: {DATA.FOOTER.EMAIL}</p>
            {/* for privacy policy */}
            <PrivacyModal content={shop} modal={privacyModal} setModal={setPrivacyModal} />
            <span className='hover:text-red-500 cursor-pointer' onClick={() => setTermsModal(true)}>Terms and Conditions</span>
            
            {/* for terms and conditions */}
            <TermsModal content={shop} modal={termsModal} setModal={setTermsModal} />
            <span className='hover:text-red-500 cursor-pointer' onClick={() => setPrivacyModal(true)}>Privacy Policy</span>
          </div>
          <div className='flex gap-10 lg:flex-row flex-col w-full'>
            <FooterLinks data={DATA.FOOTER.LINKS} headings='Links' />
          </div>
        </div>
        <p className='w-full text-center p-10'>Copyright © 2023 TintArt. All Rights Reserved.</p>
      </div>
    </CustomerWrapper>
  );
};

export default FooterLayout;