import React from 'react';
import {PortfolioItem} from './PortfolioItem';
import {Item} from '../types';

interface PortfolioListProps {
    handleClick: React.MouseEventHandler;
    year: string;
    list: Item[];
    sideBarName: string;
}

export const PortfolioList: React.FC<PortfolioListProps> = ({
    handleClick,
    year,
    list,
    sideBarName,
}) => {
    return (
        <div className="row" data-testid={`${year}-list`}>
            <div className={`col-sm-2 col-md-1 ${sideBarName}`}>
                <p>{year}</p>
            </div>

            <div className="col-sm-10 col-md-11 portfolio-items">
                {list.map((item: Item, index: number) => (
                    <PortfolioItem
                        key={`portfolio-item-${index}`}
                        item={item}
                        handleClick={handleClick}
                    />
                ))}
            </div>
        </div>
    );
};
