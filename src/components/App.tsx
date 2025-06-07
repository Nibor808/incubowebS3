import React, {useEffect, useRef, useState, useCallback, memo} from 'react';
import {Header} from './Header';
import {About} from './About';
import {PortfolioList} from './PortfolioList';
import {list2016} from '../portfolio-data/list_2016';
import {list2017} from '../portfolio-data/list_2017';
import {list2020} from '../portfolio-data/list_2020';
import {ImageModal} from './Modal';
import {resizeImage} from '../utils/resizeImage';
import {usePrevious} from '../utils/usePrevious';
import {debounce} from '../utils/debounce';
import {ErrorBoundary} from './ErrorBoundary';
import {PerformanceMonitor} from './PerformanceMonitor';
import {Contact} from './Contact';

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

const AppElement = memo<{children: React.ReactNode}>(({children}) => {
    return (
        <div className="row">
            <div className="col-12">{children}</div>
        </div>
    );
});

export const App: React.FC = () => {
    const width = window.innerWidth;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [event, setEvent] = useState<React.MouseEvent<HTMLImageElement, MouseEvent> | null>(null);
    const portfolioRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);
    const [pageOffset, setPageOffset] = useState<number>(0);
    const previousPageOffset = usePrevious(pageOffset);

    const handleClick = useCallback((ev: React.MouseEvent<HTMLImageElement>) => {
        setIsOpen(true);
        setEvent(ev);
    }, []);

    useEffect(() => {
        const scroller = debounce(() => {
            setPageOffset(window.scrollY);
            const img = document.getElementById('logo-img') as HTMLImageElement;

            if (pageOffset !== previousPageOffset) {
                resizeImage({image: img, windowWidth: width});
            }
        }, 100);

        window.addEventListener('scroll', scroller);
        return () => window.removeEventListener('scroll', scroller);
    }, [width, pageOffset, previousPageOffset]);

    const handleContactClick = useCallback((ev: React.MouseEvent<HTMLButtonElement>) => {
        executeScroll(ev, contactRef);
    }, []);

    const handlePortfolioClick = useCallback((ev: React.MouseEvent<HTMLButtonElement>) => {
        executeScroll(ev, portfolioRef);
    }, []);

    const handleTopClick = useCallback((ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        executeScroll(ev);
    }, []);

    return (
        <ErrorBoundary>
            <PerformanceMonitor id="app">
                <ImageModal isOpen={isOpen} setIsOpen={setIsOpen} event={event} />
                <Header
                    key="header-1"
                    toContact={handleContactClick}
                    toPortfolio={handlePortfolioClick}
                    toTop={handleTopClick}
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
                                <Contact />
                            </div>
                        </AppElement>
                    </article>
                </section>
            </PerformanceMonitor>
        </ErrorBoundary>
    );
};
