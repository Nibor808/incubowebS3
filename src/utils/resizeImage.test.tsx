import React from 'react';
import {render} from '@testing-library/react';
import {resizeImage} from './resizeImage';
import {ImageWidths} from 'types';

const TestComponent = () => {
    return <img data-testid="test-image" alt="test" style={{height: 10, width: 10}} src="" />;
};

describe('resizeImage', () => {
    it('should return a Medium image', () => {
        const {height, width} = ImageWidths.Medium;
        const {getByTestId} = render(<TestComponent />);

        const image = getByTestId('test-image') as HTMLImageElement;
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('style');
        expect(image.getAttribute('style')).toEqual('height: 10px; width: 10px;');

        resizeImage({image, windowWidth: 100});
        expect(image.getAttribute('style')).toEqual(`height: ${height}; width: ${width};`);
    });

    it('should return a Large image', () => {
        const {height, width} = ImageWidths.Large;
        const {getByTestId} = render(<TestComponent />);

        const image = getByTestId('test-image') as HTMLImageElement;
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('style');
        expect(image.getAttribute('style')).toEqual('height: 10px; width: 10px;');

        resizeImage({image, windowWidth: 800});
        expect(image.getAttribute('style')).toEqual(`height: ${height}; width: ${width};`);
    });

    it('should return an xSmall Image if scrolling on a screen < 786px', () => {
        const {height, width} = ImageWidths.xSmall;
        const {getByTestId} = render(<TestComponent />);

        const image = getByTestId('test-image') as HTMLImageElement;
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('style');
        expect(image.getAttribute('style')).toEqual('height: 10px; width: 10px;');

        document.body.scrollTop = 50;

        resizeImage({image, windowWidth: 100});
        expect(image.getAttribute('style')).toEqual(
            `height: ${height}; width: ${width}; transition: all 400ms ease-in-out;`
        );
    });

    it('should return a Small Image if scrolling', () => {
        const {height, width} = ImageWidths.Small;
        const {getByTestId} = render(<TestComponent />);

        const image = getByTestId('test-image') as HTMLImageElement;
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('style');
        expect(image.getAttribute('style')).toEqual('height: 10px; width: 10px;');

        document.body.scrollTop = 50;

        resizeImage({image, windowWidth: 800});
        expect(image.getAttribute('style')).toEqual(
            `height: ${height}; width: ${width}; transition: all 400ms ease-in-out;`
        );
    });

    it('should return null', () => {
        const result = resizeImage({image: null, windowWidth: 100});
        expect(result).toBeNull();
    });
});
