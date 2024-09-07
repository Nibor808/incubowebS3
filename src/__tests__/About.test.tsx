import React from 'react';
import {render, screen} from '@testing-library/react';
import {About, myInfo} from '../components/About';

describe('<About />', () => {
    beforeEach(() => render(<About />));

    test('it should render the image and info', () => {
        expect(screen.getByAltText('Robin Erickson')).toBeInTheDocument();
        expect(screen.getByText(myInfo.name)).toBeInTheDocument();
        expect(screen.getByText(myInfo.title)).toBeInTheDocument();
        expect(screen.getByText(myInfo.blurb)).toBeInTheDocument();
    });
});
