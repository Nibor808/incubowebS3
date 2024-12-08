import React, {memo} from 'react';
import {MyLink} from './MyLink';
import linkedIn from '../styles/images/linkedIn.png';
import {HeaderProps} from './Header';

interface HeaderLayoutProps extends HeaderProps{
    logoImg: string;
    setDarkMode: (val: boolean) => void;
    darkMode: boolean;
    modeIcon: React.ReactElement;
}

export const HeaderLayout: React.FC<HeaderLayoutProps> = memo(({
    logoImg,
    toTop,
    toPortfolio,
    toContact,
    setDarkMode,
    darkMode,
    modeIcon,
}) => {
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
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="content">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <button
                                    type="button"
                                    className="nav-link"
                                    onClick={toPortfolio}
                                    data-testid="portfolio-link"
                                >
                                    Portfolio
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    type="button"
                                    className="nav-link"
                                    onClick={toContact}
                                    data-testid="contact-link"
                                >
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
                                    htmlFor="dark-light-toggle"
                                >
                                    {modeIcon}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
});
