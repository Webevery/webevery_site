import { createPortal } from 'react-dom';

function Portal({ children }) {
  const rootModal = document.getElementById('modal');
  return createPortal(children, rootModal);
}

export default Portal;
