import React, {memo, useCallback} from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
    isOpen: boolean;
    setIsOpen: (arg: boolean) => void;
    target: HTMLImageElement;
}

export const Modal: React.FC<ModalProps> = memo(({isOpen, setIsOpen, target}) => {
    const handleRequestClose = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

    if (!target) {
        return null;
    }

    return (
        <ReactModal
            appElement={document.getElementById('root') as HTMLElement}
            isOpen={isOpen}
            onRequestClose={handleRequestClose}
            overlayClassName="img-modal-overlay"
            className="img-modal">
            <div className="img-modal-content">
                <h4>{target.alt}</h4>
                <img src={target.src} alt={target.alt} />
            </div>
        </ReactModal>
    );
});

interface ImageModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    event: React.MouseEvent<HTMLImageElement, MouseEvent> | null;
}

export const ImageModal: React.FC<ImageModalProps> = memo(({isOpen, setIsOpen, event}) => {
    if (!event?.target) {
        return null;
    }

    const target = event.target as HTMLImageElement;

    return (
        <span key="modal-1">
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} target={target} />
        </span>
    );
});
