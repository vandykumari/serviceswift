import React from 'react';

const Modal = ({ title, children, modalOpen, setModalOpen }) => {
  return (
    <div>
      {modalOpen && (
        <div className='modal'>
          <div className='relative modal-box'>
            <label
              onClick={() => setModalOpen(false)}
              className='absolute btn btn-sm btn-circle right-2 top-2'>
              ✕
            </label>
            <h3 className='text-lg font-bold'>{title}</h3>
            <p className='py-4'>{children}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
