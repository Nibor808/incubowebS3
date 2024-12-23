import React, {useMemo} from 'react';

export interface MyLinkProps {
    title: string | React.ReactElement;
    href: string;
    klass?: string;
}

export const MyLink: React.FC<MyLinkProps> = ({title, href, klass}) => {
    return useMemo(
        () => (
            <a href={href} target={'_blank'} rel="noopener noreferrer" className={klass}>
                {title}
            </a>
        ),
        [title, href, klass]
    );
};
