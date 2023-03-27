import React from 'react'

interface ModalProps {
    title: string
    children: React.ReactNode
    onClose: () => void
}

const Modal = ({title, children, onClose}:ModalProps) => {
  return (
    <div>
        <div className='fixed bg-black/50 top-0 left-0 right-0 bottom-0' onClick={onClose} />
        <div className='modal w-full max-w-[500px] p-5 rounded bg-white absolute top-1/3 left-1/2 -translate-x-1/2'>
            <h1 className='title mb-4'>
                {title}
            </h1>

            {children}
        </div>
    </div>
  )
}

export default Modal