import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import Card from '../UI/Card/Card';
import './Modal.scss';

export interface ModalWrapperProps {
    isShowing: boolean;
    hide: () => void;
    children: ReactNode | undefined;
}

const Modal: React.FC<ModalWrapperProps> = ({ isShowing, hide, children }) =>
    isShowing && (
        <>
            {createPortal(
                <div className="modal-backdrop" onClick={hide} />,
                document.getElementById('modal-backdrop')!
            )}
            {createPortal(
                <React.Fragment>
                    <div className="modal-overlay">
                        <Card>{children}</Card>
                    </div>
                </React.Fragment>,
                document.getElementById('modal-root')!
            )}
        </>
    );

export default Modal;
