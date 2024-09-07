import React from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
    isOpen: boolean;
    setIsOpen: (arg: boolean) => void;
    headerText: string | undefined;
    srcText: string | undefined;
}

export const Modal: React.FC<ModalProps> = ({isOpen, setIsOpen, headerText, srcText}) => {
    return (
        <ReactModal
            appElement={document.getElementById('root') as HTMLElement}
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            overlayClassName="img-modal-overlay"
            className="img-modal">
            <div className="img-modal-content">
                <h4>{headerText}</h4>

                <img src={srcText} alt={headerText} />
            </div>
        </ReactModal>
    );
};
