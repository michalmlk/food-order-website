import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import Card from '../UI/Card/Card';
import { motion } from 'framer-motion';
import './Modal.scss';

export interface ModalWrapperProps {
    isShowing: boolean;
    onHide: () => void;
    children?: ReactNode | undefined;
}

const Modal: React.FC<ModalWrapperProps> = ({ isShowing, onHide, children }) =>
    isShowing && (
        <>
            {createPortal(
                <div className="modal-backdrop" onClick={onHide} />,
                document.getElementById('modal-backdrop')!
            )}
            {createPortal(
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.15,
                    }}
                >
                    <div className="modal-overlay">
                        <Card>{children}</Card>
                    </div>
                </motion.div>,
                document.getElementById('modal-root')!
            )}
        </>
    );

export default Modal;
