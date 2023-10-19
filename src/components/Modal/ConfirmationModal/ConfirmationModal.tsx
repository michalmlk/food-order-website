import React from 'react';
import Modal, { ModalWrapperProps } from '../Modal';
import Card from '../../UI/Card/Card';

const ConfirmationModal: React.FC<ModalWrapperProps> = ({ onHide, isShowing }): JSX.Element => {
    return (
        <Modal isShowing={isShowing} onHide={onHide}>
            <Card>
                <h1>Hello confirmation modal</h1>
            </Card>
        </Modal>
    );
};

export default ConfirmationModal;
