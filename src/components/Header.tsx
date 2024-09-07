import React, {useEffect, useLayoutEffect, useMemo, useState} from 'react';
import logo from '../styles/images/incubo_logo.png';
import logoSm from '../styles/images/incubo_logo_sm.png';
import linkedIn from '../styles/images/linkedIn.png';
import {MyLink} from './MyLink';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
    toPortfolio: (ev: React.MouseEvent<HTMLButtonElement>) => void;
    toContact: (ev: React.MouseEvent<HTMLButtonElement>) => void;
    toTop: (ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export const Header: React.FC<HeaderProps> = ({toPortfolio, toContact, toTop}) => {
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [modeIcon, setModeIcon] = useState<React.ReactElement>(<FontAwesomeIcon icon={faSun} />);
    const [width, setWidth] = React.useState<number>(window.innerWidth);

    useLayoutEffect(() => {
        const resizeHandler = () => setWidth(window.innerWidth);

        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    const logoImg = useMemo(() => (width < 768 ? logoSm : logo), [width]);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
            setModeIcon(<FontAwesomeIcon icon={faSun} />);
        } else {
            document.body.classList.remove('dark-mode');
            setModeIcon(<FontAwesomeIcon icon={faMoon} />);
        }
    }, [darkMode]);

    return (
        <header data-testid="header">
            <nav className="navbar navbar-expand-lg fixed-top navbar-light">
                <div className="container">
                    <a href="#" onClick={toTop} className="logo-link" data-testid="logo-link">
                        <img
                            id="logo-img"
                            src={logoImg}
                            alt="incubo web solutions logo"
                            className="img-fluid navbar-brand"
                            data-testid="logo-img"
                        />
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#content"
                        aria-controls="content"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="content">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <button
                                    type="button"
                                    className="nav-link"
                                    onClick={toPortfolio}
                                    data-testid="portfolio-link">
                                    Portfolio
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    type="button"
                                    className="nav-link"
                                    onClick={toContact}
                                    data-testid="contact-link">
                                    Contact
                                </button>
                            </li>
                        </ul>

                        <div className="d-flex ms-auto align-items-center">
                            <div className="linkedin">
                                <MyLink
                                    title={<img src={linkedIn} alt="Robin Erickson linkedIn" />}
                                    href="https://www.linkedin.com/in/robinerickson08/"
                                    klass="social-link"
                                />
                            </div>

                            <div className="form-check form-switch">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="dark-light-toggle"
                                    data-testid="dark-light-toggle"
                                    onClick={() => setDarkMode(!darkMode)}
                                />
                                <label
                                    className="form-check-label mode-icon"
                                    htmlFor="dark-light-toggle">
                                    {modeIcon}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};
