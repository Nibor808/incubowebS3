import React, {memo} from 'react';
import {MyLink} from './MyLink';
import linkedIn from '../styles/images/linkedIn.png';

export const Contact: React.FC = memo(() => {
    return (
        <MyLink
            title={<img src={linkedIn} alt="Robin Erickson linkedIn" loading="lazy" />}
            href="https://www.linkedin.com/in/robinerickson08/"
            klass="social-link"
        />
    );
});

export default Contact;
