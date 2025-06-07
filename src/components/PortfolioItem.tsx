import React, {memo} from 'react';
import {Item} from '../types';

interface PortfolioItemProps {
    handleClick: React.MouseEventHandler;
    item: Item;
}

export const PortfolioItem: React.FC<PortfolioItemProps> = memo(({handleClick, item}) => {
    const {title, github, renderText, renderImage} = item;

    return (
        <div className="portfolio-item">
            <div className="d-flex align-items-center">
                <h3>
                    <strong>{title}</strong>
                </h3>
                {github}
            </div>

            {renderText?.()}
            {renderImage?.(handleClick)}
        </div>
    );
});
