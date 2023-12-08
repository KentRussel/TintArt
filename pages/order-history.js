import React, { useEffect, useState } from 'react';
import { CustomerLayout, LoadingLayout } from '../components';
import ProfileLayout from '../components/layout-components/profile-layout';
import { useAppContext } from '../context/AppContext';
import { getUserOrderDetails, updateOrderDetails } from '../services/order_details.services';
import DATA from '../utils/DATA';
import { formatNumberWithCommas } from '../services/tools';
import moment from 'moment';
import { Button } from 'flowbite-react';
import toast from 'react-hot-toast';
import { toastOptions } from '../styles/modalOption';
import Link from 'next/link';

const OrderHistory = () => {
    const [orderData, setOrderData] = useState([]);
    const { state } = useAppContext();
    const [isLoading, setIsLoading] = useState({ fetch: true, update: false });

    const loadHandler = async () => {
        let id = state?.user?._id;

        const result_order = await getUserOrderDetails(id);
        if (result_order?.success) {
            setOrderData(result_order?.data);
        }
        setIsLoading({ ...isLoading, fetch: false });
    };

    const [selectedFilter, setSelectedFilter] = useState('All');
    useEffect(() => {
        if (state?.user?._id) {
            loadHandler();
            autoCancelOrders(); // Call the autoCancelOrders function when the component mounts
        }
    }, [state?.isAuth]);

    const filtered = orderData?.filter((o) => o.status === selectedFilter || selectedFilter === 'All');

    const cancelOrderHandler = async (id) => {
        setIsLoading({ ...isLoading, update: true });
        const result = await updateOrderDetails({ status: 'CANCELLED' }, id);
        if (result?.success) {
            await loadHandler();
            toast.success('Order has been cancelled successfully!', toastOptions);
        } else {
            toast.error('Something went wrong!', toastOptions);
        }
        setIsLoading({ ...isLoading, update: false });
    };

    const autoCancelOrders = async () => {
        const currentDate = moment();
        const updatedOrderData = orderData.map((item) => {
            const orderDate = moment(item.created_at);
            const daysDifference = currentDate.diff(orderDate, 'days');

            if (daysDifference >= 3 && item.status !== 'CANCELLED') {
                // Automatically cancel the order if it's older than 3 days and not already cancelled
                cancelOrderHandler(item._id);
            }

            return item;
        });

        setOrderData(updatedOrderData);
    };

    return (
        <CustomerLayout>
            <ProfileLayout>
                <div className='flex overflow-x-auto mb-4' style={{ scrollbarWidth: 'thin' }}>
                    <p onClick={() => setSelectedFilter('All')} className={`cursor-pointer ${'All' == selectedFilter ? 'border-red-600' : 'border-white'} w-full border-b-2 capitalize text-center p-4 `}>
                        All
                    </p>
                    {DATA.ORDER_STATUS.map((item) => (
                        <p key={item} onClick={() => setSelectedFilter(item)} className={`cursor-pointer ${item == selectedFilter ? 'border-red-600' : 'border-white'} whitespace-nowrap w-full border-b-2 capitalize  text-center p-4`}>
                            {item}
                        </p>
                    ))}
                </div>
                <LoadingLayout message="You have no order listed." loadingState={isLoading.fetch} hasContent={orderData?.length}>
                    <div className='flex items-center flex-col justify-between gap-4'>
                        {filtered?.map((item) => (
                            <div key={item?._id} className='w-full flex-col flex gap-2  p-4 border'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-slate-400'>Order ID:{item?._id}</p>
                                    <p className='font-semibold text-lg uppercase'>{item?.is_paid ? 'Paid' : 'Not Paid'} - {item?.mop == 'credit' ? 'Credit/Debit Card' : item?.mop == 'gcash' ? 'Gcash' : item?.mop == 'cod' && 'Cash on Delivery'}</p>
                                </div>
                                <div className='flex items-center justify-between py-2 border-b'>
                                    <p className='text-slate-400'>{moment(item?.created_at).format('MMMM DD, YYYY hh:mm A')}</p>
                                    <p className='font-semibold text-lg uppercase'>{item?.status}</p>
                                </div>
                                {item?.products.map((product) => (
                                    <div key={product?._id} className='flex items-center justify-between'>
                                        <Link href={`/shop/${product?.product_id}`}>
                                                <div className='flex gap-4 items-center'>
                                                    <img src={product?.image} className='aspect-square h-20 w-20' />
                                                    <div className='flex flex-col gap-2'>
                                                        <p className='font-semibold'>{product?.name}</p>
                                                        <p className='text-slate-400'>Variation: {[product?.size, product?.color].join(',')}</p>
                                                        <p className='text-slate-400'>X{product?.quantity}</p>
                                                    </div>
                                                </div>
                                        </Link>
                                        <div className='flex gap-4 flex-col'>
                                            <p className='font-semibold text-xl'>{`${DATA.PESO} ${formatNumberWithCommas(product?.price)}`}</p>
                                        </div>
                                    </div>
                                ))}
                                {item.status == 'PENDING PAYMENT' && <Button disabled={isLoading.update} className='my-2' color={'failure'} onClick={() => cancelOrderHandler(item?._id)}>Cancel Order</Button>}
                                <div className='flex gap-4 items-center justify-between border-t py-2'>
                                    <p className=''>No. of items: {item?.products?.length}</p>
                                    <p className='font-semibold'>Order Total Price: {item?.total_price}</p>
                                </div>
                            </div>
                        ))}
                        {filtered.length == 0 && <p className='text-center text-slate-400 py-4'>No Data</p>}
                    </div>
                </LoadingLayout>
            </ProfileLayout>
        </CustomerLayout>
    );
};


export default OrderHistory;
