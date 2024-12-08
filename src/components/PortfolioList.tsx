import React, {memo, useMemo} from 'react';
import {Item} from '../types';
import {PortfolioItem} from './PortfolioItem';

interface PortfolioListProps {
    handleClick: React.MouseEventHandler;
    year: string;
    list: Item[];
    sideBarName: string;
}

export const PortfolioList: React.FC<PortfolioListProps> = memo(
    ({handleClick, year, list, sideBarName}) => {
        const itemList = useMemo(() => {
            return list.map((item: Item, index: number) => (
                <PortfolioItem
                    key={`portfolio-item-${index}`}
                    item={item}
                    handleClick={handleClick}
                />
            ));
        }, [list, handleClick]);

        return (
            <div className="row" data-testid={`${year}-list`}>
                <div className={`col-sm-2 col-md-1 ${sideBarName}`}>
                    <p>{year}</p>
                </div>

                <div className="col-sm-10 col-md-11 portfolio-items">{itemList}</div>
            </div>
        );
    }
);
