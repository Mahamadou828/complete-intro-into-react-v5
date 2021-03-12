import React, { FunctionComponent, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export const Modal: FunctionComponent = ({ children }) => {
  const elRef = useRef<HTMLDivElement>(document.createElement('div'));

  useEffect(() => {
    const modalRoot = document.getElementById('modal');
    if (!modalRoot) return;
    modalRoot.appendChild(elRef.current);
    return () => {
      modalRoot.removeChild(elRef.current);
    };
  }, []);
  return createPortal(<div>{children}</div>, elRef.current);
};
