import React from 'react'
import ModalLayout from '../layout-components/modal-layout'
import { Button } from 'flowbite-react'
import { FaX } from 'react-icons/fa6'

const ViewGalleryModal = ({ modal, setModal }) => {
  return (
    <ModalLayout>
      <div className='rounded-md relative max-w-[37rem] overscroll-none'>
        <img src={modal} className='w-full ' />
        <Button color='dark' size="xs"pill className='aspect-square absolute top-5 right-5' onClick={() => setModal(null)}>
          <FaX />
        </Button>
      </div>
    </ModalLayout>
  )
}

export default ViewGalleryModal
