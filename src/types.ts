import React from 'react';

export interface Item {
    title: string;
    github?: React.ReactElement;
    renderText?: () => React.ReactElement[] | React.ReactElement;
    renderImage?: (handleClick?: React.MouseEventHandler) => React.ReactElement;
}

export interface TimeValues {
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export interface Image {
    height: string;
    width: string;
}

export enum ImageResizeWidth {
    xSmall = 'xSmall',
    Small = 'Small',
    Medium = 'Medium',
    Large = 'Large',
}

export const ImageWidths: Record<string, Image> = {
    [ImageResizeWidth.xSmall]: {
        height: '70px',
        width: '165px',
    },
    [ImageResizeWidth.Small]: {
        height: '80px',
        width: '185px',
    },
    [ImageResizeWidth.Medium]: {
        height: '85px',
        width: '200px',
    },
    [ImageResizeWidth.Large]: {
        height: '110px',
        width: '258px',
    },
};

export interface ResizeImageProps {
    image: HTMLImageElement | null;
    windowWidth: number;
}
