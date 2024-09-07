import {ImageWidths, ResizeImageProps} from '../types';

export const resizeImage = (props: ResizeImageProps) => {
    const {image, windowWidth} = props;

    if (image) {
        const docBody = document.body;

        if (docBody.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            // add the shadow under the nav as we scroll down
            docBody.classList.add('nav-shadow');

            // render smaller image while not at the top
            if (windowWidth < 768) {
                image.style.height = ImageWidths.xSmall.height;
                image.style.width = ImageWidths.xSmall.width;
            } else {
                // Desktop sizes
                image.style.height = ImageWidths.Small.height;
                image.style.width = ImageWidths.Small.width;
            }

            image.style.transition = 'all 400ms ease-in-out';
        } else if (windowWidth < 768) {
            // while still at the top of the page
            image.style.height = ImageWidths.Medium.height;
            image.style.width = ImageWidths.Medium.width;
            docBody.classList.remove('nav-shadow');
        } else {
            // Desktop sizes
            image.style.height = ImageWidths.Large.height;
            image.style.width = ImageWidths.Large.width;
            docBody.classList.remove('nav-shadow');
        }
    }

    return image;
};
