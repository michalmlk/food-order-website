import React, { ReactElement } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';
import Card from '../UI/Card/Card';

const Modal = ({
    isShowing,
    hide,
    children,
}: {
    isShowing: boolean;
    hide: () => void;
    children: ReactElement | ReactElement[];
}) =>
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
