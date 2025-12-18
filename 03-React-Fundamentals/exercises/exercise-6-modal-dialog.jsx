import React, { useState } from 'react';

/**
 * Exercise 6: Modal Dialog Component
 * 
 * Build a reusable Modal component:
 * - Opens/closes with state
 * - Overlay that closes modal when clicked
 * - Content area for any children
 * - Close button (X)
 * - Prevent closing when clicking inside modal
 * 
 * Requirements:
 * - Use children prop for flexible content
 * - Event handling (onClick, onClose)
 * - Conditional rendering (show/hide)
 * - Component composition pattern
 * - Event propagation (stopPropagation)
 */

// TODO: Create Modal component
// HINT: Accept props: isOpen, onClose, children
const Modal = ({ isOpen, onClose, children }) => {
  // TODO: If not open, return null (don't render)
  if (!isOpen) return null;
  
  return (
    // TODO: Add overlay that closes modal when clicked
    <div 
      className="modal-overlay"
      onClick={onClose}
    >
      {/* TODO: Add modal content container */}
      {/* HINT: Stop propagation to prevent closing when clicking inside */}
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* TODO: Add close button */}
        <button 
          className="modal-close"
          onClick={onClose}
        >
          ✕
        </button>
        
        {/* TODO: Render children */}
        {children}
      </div>
    </div>
  );
};

// Example usage component
const ModalExample = () => {
  // TODO: Add state for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // TODO: Add state for which modal to show (for multiple modals)
  const [activeModal, setActiveModal] = useState(null);
  
  // TODO: Implement open/close handlers
  const openModal = (modalName) => {
    setActiveModal(modalName);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setActiveModal(null);
  };
  
  return (
    <div className="modal-example">
      <h1>Modal Dialog Example</h1>
      
      {/* TODO: Add buttons to open different modals */}
      <div className="button-group">
        <button onClick={() => openModal('welcome')}>
          Open Welcome Modal
        </button>
        <button onClick={() => openModal('confirm')}>
          Open Confirm Modal
        </button>
        <button onClick={() => openModal('form')}>
          Open Form Modal
        </button>
      </div>
      
      {/* TODO: Render Modal with different content based on activeModal */}
      
      {/* Welcome Modal */}
      <Modal 
        isOpen={isModalOpen && activeModal === 'welcome'} 
        onClose={closeModal}
      >
        <h2>Welcome!</h2>
        <p>This is a modal dialog. Click outside or press the X to close.</p>
        <button onClick={closeModal}>Got it!</button>
      </Modal>
      
      {/* Confirm Modal */}
      <Modal 
        isOpen={isModalOpen && activeModal === 'confirm'} 
        onClose={closeModal}
      >
        <h2>Are you sure?</h2>
        <p>This action cannot be undone.</p>
        <div className="modal-actions">
          <button onClick={closeModal}>Cancel</button>
          <button onClick={() => {
            console.log('Confirmed!');
            closeModal();
          }}>
            Confirm
          </button>
        </div>
      </Modal>
      
      {/* Form Modal */}
      <Modal 
        isOpen={isModalOpen && activeModal === 'form'} 
        onClose={closeModal}
      >
        <h2>Contact Form</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          console.log('Form submitted');
          closeModal();
        }}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Your email" />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea placeholder="Your message"></textarea>
          </div>
          <div className="modal-actions">
            <button type="button" onClick={closeModal}>Cancel</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ModalExample;

/**
 * CSS Styles needed (for reference):
 * 
 * .modal-overlay {
 *   position: fixed;
 *   top: 0;
 *   left: 0;
 *   right: 0;
 *   bottom: 0;
 *   background-color: rgba(0, 0, 0, 0.5);
 *   display: flex;
 *   justify-content: center;
 *   align-items: center;
 *   z-index: 1000;
 * }
 * 
 * .modal-content {
 *   background: white;
 *   padding: 2rem;
 *   border-radius: 8px;
 *   max-width: 500px;
 *   width: 90%;
 *   position: relative;
 * }
 * 
 * .modal-close {
 *   position: absolute;
 *   top: 1rem;
 *   right: 1rem;
 *   background: none;
 *   border: none;
 *   font-size: 1.5rem;
 *   cursor: pointer;
 * }
 */

/**
 * Bonus Challenges:
 * - Add animation (fade in/out, slide in/out)
 * - Add keyboard support (close on Escape key)
 * - Prevent body scroll when modal is open
 * - Add different sizes (small, medium, large)
 * - Add focus trap (keep focus within modal)
 * - Add custom header and footer slots
 * - Make modal draggable
 */
