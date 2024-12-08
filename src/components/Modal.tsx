import React from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
    isOpen: boolean;
    setIsOpen: (arg: boolean) => void;
    target: HTMLImageElement;
}

export const Modal: React.FC<ModalProps> = ({isOpen, setIsOpen, target}) => {
    if (!target) {
        return null;
    }

    return (
        <ReactModal
            appElement={document.getElementById('root') as HTMLElement}
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            overlayClassName="img-modal-overlay"
            className="img-modal">
            <div className="img-modal-content">
                <h4>{target.alt}</h4>

                <img src={target.srcset} alt={target.alt} />
            </div>
        </ReactModal>
    );
};
