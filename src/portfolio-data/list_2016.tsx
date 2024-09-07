import React from 'react';
import casemon from '../styles/images/casemon.jpg';
import plus3Calc from '../styles/images/plus3-calc.jpg';
import plus3Curr from '../styles/images/plus3-curr.jpg';
import plus3Units from '../styles/images/plus3-units.jpg';
import {MyLink} from '../components/MyLink';
import {Item} from '../types';

export const list2016: Item[] = [
    {
        title: '+3',
        github: <MyLink title="git" href="https://github.com/Nibor808/plus3" klass="git-link" />,
        renderText: () => {
            return [
                <p key="main1">
                    My wife had requested that I build her an app to solve a specific need she had
                    at work. A calculator that allowed you to display calculations as you went, add
                    notes to any line and send it as an email.
                </p>,
                <p key="main2">+3 was born.</p>,
                <p key="main3">
                    Just for fun I added in a units converter as well as an API driven currency
                    converter. +3 was built using xcode and the swift programming language. *Due to
                    time constraints, and well life, +3 is no longer available in the app store.
                </p>,
            ];
        },
        renderImage: () => {
            return (
                <div className="row">
                    <div className="col">
                        <img
                            src={plus3Calc}
                            data-text={plus3Calc}
                            className="img-fluid"
                            alt="+3 Calculator"
                        />
                    </div>

                    <div className="col">
                        <img
                            src={plus3Curr}
                            data-text={plus3Curr}
                            className="img-fluid"
                            alt="+3 Currency Converter"
                        />
                    </div>

                    <div className="col">
                        <img
                            src={plus3Units}
                            data-text={plus3Units}
                            className="img-fluid"
                            alt="+3 Units Converter"
                        />
                    </div>
                </div>
            );
        },
    },
    {
        title: 'Casemon',
        github: (
            <MyLink title="git" href="https://github.com/Nibor808/casemon-mvp" klass="git-link" />
        ),
        renderText: () => {
            return [
                <p key="main1">
                    I was engaged by a start up to develop the MVP for a web app that allows
                    attorneys to receive notifications via email or renderText whenever
                    there&lsquo;s an update to one of their cases.
                </p>,
                <p key="main2">
                    The MVP was built on Node JS and CoffeeScript for the backend and HTML5, CSS3
                    and jQuery for the frontend.
                </p>,
                <p key="main3">
                    Unfortunately due to a lack of interest in the product, Casemon is no longer
                    active.
                </p>,
            ];
        },
        renderImage: () => <img src={casemon} className="img-fluid" alt="Casemon Landing Page" />,
    },
];
