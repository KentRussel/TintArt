import React from 'react'

const ModalLayout = ({ children }) => {
  return (
    <div className=' bg-black/50 w-full h-screen top-0 left-0 z-[100] fixed items-center flex justify-center'>
      {children}
    </div>
  )
}

export default ModalLayout;