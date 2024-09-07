import {fireEvent, render, screen} from '@testing-library/react';
import {Header} from '../components/Header';
import React from 'react';

const toPortfolio = jest.fn();
const toContact = jest.fn();
const toTop = jest.fn();
const click: MouseEvent = new MouseEvent('click', {
    bubbles: true,
});

test('renders the Header component without error', () => {
    render(<Header toPortfolio={toPortfolio} toContact={toContact} toTop={toTop} />);
});

describe('Header', () => {
    beforeEach(() => {
        render(<Header toPortfolio={toPortfolio} toContact={toContact} toTop={toTop} />);
    });

    test('clicking portfolio link calls toPortfolio', () => {
        const portfolioLink = screen.getByTestId('portfolio-link');
        expect(portfolioLink).toBeInTheDocument();
        expect(toPortfolio).not.toHaveBeenCalled();

        fireEvent(portfolioLink, click);

        expect(toPortfolio).toHaveBeenCalled();
    });

    test('clicking contact link calls toPortfolio', () => {
        const contactLink = screen.getByTestId('contact-link');
        expect(contactLink).toBeInTheDocument();
        expect(toContact).not.toHaveBeenCalled();

        fireEvent(contactLink, click);

        expect(toContact).toHaveBeenCalled();
    });

    test('clicking dark-light-toggle adds "dark-mode" to body\'s classList', () => {
        const darkModeToggle = screen.getByTestId('dark-light-toggle');
        expect(darkModeToggle).toBeInTheDocument();

        const classList = document.body.classList;
        expect(classList).not.toContain('dark-mode');

        fireEvent(darkModeToggle, click);

        expect(classList).toContain('dark-mode');
    });

    test('clicking the logo link calls toTop', () => {
        const logoLink = screen.getByTestId('logo-link');
        expect(logoLink).toBeInTheDocument();

        expect(toTop).not.toHaveBeenCalled();

        fireEvent(logoLink, click);

        expect(toTop).toHaveBeenCalled();
    });
});
