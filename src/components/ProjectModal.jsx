import React from 'react';

function ProjectModal({ isOpen, closeModal, title, description, tech }) {
  if (!isOpen) return null;

  return (
    <div id="projectModal" className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm" onClick={closeModal}></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          ​
        </span>
        <div className="inline-block align-bottom bg-gray-800 rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
          <div className="px-6 py-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 id="projectModalTitle" className="text-2xl font-bold text-white">
                  {title}
                </h3>
                <p id="projectModalSubtitle" className="text-blue-400 mt-1"></p>
              </div>
              <button onClick={closeModal} className="text-gray-400 hover:text-white">
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-white mb-3">Project Overview</h4>
              <p id="projectModalDescription" className="text-gray-300 mb-6">
                {description}
              </p>
              <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
              <p id="projectModalTech" className="text-gray-300 mb-6">
                {tech}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h5 className="text-sm font-medium text-gray-400 mb-1">Client</h5>
                  <p className="text-white">Confidential</p>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-gray-400 mb-1">Year</h5>
                  <p className="text-white">2023</p>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-gray-400 mb-1">Category</h5>
                  <p className="text-white">Mobile/Web Application</p>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-gray-400 mb-1">Duration</h5>
                  <p className="text-white">3-6 Months</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-4 bg-gray-700/50 flex justify-end space-x-3">
            <button
              onClick={closeModal}
              className="px-4 py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-600 transition"
            >
              Close
            </button>
            <a href="#contact"  onClick={closeModal} className="btn-primary px-6 py-2 rounded-lg text-white">
              Start Similar Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;