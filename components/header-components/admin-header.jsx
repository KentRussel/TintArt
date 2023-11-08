import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { TbLogout } from 'react-icons/tb'
import { useRouter } from 'next/router'
import { Button } from 'flowbite-react'
import Link from 'next/link'
import DATA from '../../utils/DATA'
import { useAppContext } from '../../context/AppContext'
import { authLogout, getUser } from '../../services/auth.services'
import toast from 'react-hot-toast'
const AdminHeader = props => {
  const [menuBar, setMenuBar] = useState(false)

  const router = useRouter()
  const { state, dispatch } = useAppContext()
  useEffect(() => {
    const load = async () => {
      if (!state.isAuth) {
        const res = await getUser()
        await dispatch({ type: 'SET_USER', value: res?.data })
      }
    }
    load()
  }, [state.isAuth])
  const logoutHandler = async () => {
    toast.dismiss()

    dispatch({ type: 'LOGIN_REQUEST' })
    setTimeout(async () => {
      const { success, message } = await authLogout()

      if (!success) {
        dispatch({ type: 'LOGIN_ERROR', value: { error: message } })
        toast.error(message, {
          duration: 1500,
        })
      } else {
        router.push('/')
        dispatch({ type: 'LOGOUT' })
      }
    }, 1000)
  }
  return (
    <>
      <div className='z-50 sticky top-0'>
        <div
          className={`px-4 lg:py-2 py-4 bg-white -z-10 border-b sticky lg:static flex-row flex items-center justify-between`}
        >
          <Button
            size='large'
            color='light'
            className='lg:hidden block p-2'
            onClick={() => setMenuBar(!menuBar)}
          >
            <GiHamburgerMenu color='black' />
          </Button>
          <div
            className={`flex-col left-0 lg:w-auto w-full bg-white absolute top-[72px] lg:static flex lg:flex-row items-center gap-2 ${
              menuBar ? 'flex' : 'hidden'
            } lg:flex`}
          >
            {DATA.ADMIN.HEADER_LINKS.map((item, key) => (
              <Link href={item?.link} key={key}>
                <p
                  className={` whitespace-nowrap h-full block w-full flex-grow-0 lg:text-center text-left gap-4 cursor-pointer transition-colors delay-75 border-transparent text-sm hover:border-white lg:hover:border-zinc-500 p-4 capitalize font-semibold ${
                    router.pathname.split('/')[2] == item?.link.split('/')[2] &&
                    'font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 text-blue-600'
                  }`}
                >
                  {item?.name}
                </p>
              </Link>
            ))}
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <img
              src={state?.user?.profile_image || '/images/no-profile.png'}
              className='w-[2.5rem] h-[2.5rem] object-cover rounded-full'
            />
            <div className='flex-col flex'>
              <p className='font-semibold'>
                {state?.user?.first_name} {state?.user?.last_name}
              </p>
              <p className='text-xs sm:w-[10rem] w-[5rem] truncate'>{state?.user?.email}</p>
            </div>
            <Button color='light' size='sm' onClick={logoutHandler}>
              <TbLogout />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminHeader
