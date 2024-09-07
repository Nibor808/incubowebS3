import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Header} from './Header';
import {About} from './About';
import {PortfolioList} from './PortfolioList';
import {list2016} from '../portfolio-data/list_2016';
import {list2017} from '../portfolio-data/list_2017';
import {list2020} from '../portfolio-data/list_2020';
import {Modal} from './Modal';
import linkedIn from '../styles/images/linkedIn.png';
import {MyLink} from './MyLink';
import {resizeImage} from '../utils/resizeImage';
import {usePrevious} from '../utils/usePrevious';

const executeScroll = (
    ev: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>,
    ref?: React.MutableRefObject<HTMLDivElement | null>
) => {
    ev.preventDefault();

    ref && ref.current
        ? ref.current?.scrollIntoView({
              behavior: 'smooth',
          })
        : window.scrollTo(0, 0);
};

const AppElement: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <div className="row">
            <div className="col-12">{children}</div>
        </div>
    );
};

export const App: React.FC = () => {
    const width = window.innerWidth;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [event, setEvent] = useState<React.MouseEvent<HTMLImageElement, MouseEvent> | null>(null);
    const portfolioRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);
    const [pageOffset, setPageOffset] = useState<number>(0);
    const previousPageOffset = usePrevious(pageOffset);

    const scrollHandler = useCallback(() => {
        setPageOffset(window.scrollY);
        const img = document.getElementById('logo-img') as HTMLImageElement;

        if (pageOffset !== previousPageOffset) {
            resizeImage({image: img, windowWidth: width});
        }
    }, [width, pageOffset]);

    useEffect(() => {
        const scroller = () => {
            window.addEventListener('scroll', scrollHandler);
        };

        scroller();

        return () => {
            window.removeEventListener('scroll', scroller);
        };
    }, []);

    const handleClick = (ev: React.MouseEvent<HTMLImageElement>) => {
        setIsOpen(true);
        ev.persist();
        setEvent(ev);
    };

    const showModal = React.useCallback((): React.ReactElement => {
        const target = event?.target as HTMLImageElement;

        return (
            <span key="modal-1">
                <Modal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    srcText={target?.dataset.text} // holds path to full size image
                    headerText={target?.alt}
                />
            </span>
        );
    }, [event?.target, isOpen]);

    return (
        <>
            {isOpen ? showModal() : null}
            <Header
                key="header-1"
                toContact={(ev: React.MouseEvent<HTMLButtonElement>) =>
                    executeScroll(ev, contactRef)
                }
                toPortfolio={(ev: React.MouseEvent<HTMLButtonElement>) =>
                    executeScroll(ev, portfolioRef)
                }
                toTop={(ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => executeScroll(ev)}
            />
            <section key="about-3" className="landing container">
                <article className="about" data-testid="about">
                    <div className="about-container d-flex align-items-center flex-column">
                        <AppElement>
                            <About />
                        </AppElement>
                    </div>
                </article>

                <article className="portfolio" ref={portfolioRef} data-testid="portfolio">
                    <div className="header-container">
                        <AppElement>
                            <h1>Portfolio</h1>
                            <a
                                href="https://github.com/Nibor808"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="github-link">
                                github
                            </a>
                        </AppElement>
                    </div>

                    <div className="portfolio-container">
                        <PortfolioList
                            year="2020"
                            list={list2020}
                            sideBarName="sidebar2020"
                            handleClick={handleClick}
                        />

                        <PortfolioList
                            year="2017"
                            list={list2017}
                            sideBarName="sidebar2017"
                            handleClick={handleClick}
                        />

                        <PortfolioList
                            data-testid="2016-list"
                            year="2016"
                            list={list2016}
                            sideBarName="sidebar2016"
                            handleClick={handleClick}
                        />
                    </div>
                </article>

                <article className="contact" ref={contactRef} data-testid="contact">
                    <AppElement>
                        <h1>Contact</h1>
                    </AppElement>

                    <AppElement>
                        <div className="cta">
                            <p>Want to work together? Get in touch!</p>
                            <MyLink
                                title={<img src={linkedIn} alt="Robin Erickson linkedIn" />}
                                href="https://www.linkedin.com/in/robinerickson08/"
                                klass="social-link"
                            />
                        </div>
                    </AppElement>
                </article>
            </section>
        </>
    );
};
