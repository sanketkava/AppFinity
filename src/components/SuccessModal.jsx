import React from 'react';

function SuccessModal({ isOpen, closeModal }) {
  if (!isOpen) return null;

  return (
    <div id="successModal" className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm" onClick={closeModal}></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          ​
        </span>
        <div className="inline-block align-bottom bg-gray-800 rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="px-6 py-6 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-500/20 mb-4">
              <i className="fas fa-check text-green-400"></i>
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Message Sent Successfully!</h3>
            <p className="text-gray-300 mb-6">
              Thank you for contacting us. Our team will get back to you within 24 hours.
            </p>
            <button
              onClick={closeModal}
              className="btn-primary px-6 py-2 rounded-lg text-white"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessModal;