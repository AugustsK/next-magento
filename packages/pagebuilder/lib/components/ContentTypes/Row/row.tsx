/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import { verticalAlignmentToFlex } from "../util";
import { classNames, shallowMerge } from "@/utils";
import { IMediaQuery, useMediaQuery } from "@/hooks/useMediaQuery";

import defaultClasses from './row.module.css';

interface RowProps {
    appearance: string,
    verticalAlignment: string,
    minHeight: string,
    backgroundColor: string,
    desktopImage: string,
    mobileImage: string,
    backgroundSize: string,
    backgroundPosition: string,
    backgroundAttachment: string,
    backgroundRepeat: string,
    enableParallax: string,
    parallaxSpeed: number,
    textAlign: string,
    border: string,
    borderColor: string,
    borderWidth: string,
    borderRadius: string,
    marginTop: string,
    marginRight: string,
    marginBottom: string,
    marginLeft: string,
    className?: string;
    classes?: Partial<{
        root: string
    }>
    mediaQueries: IMediaQuery[],
    paddingTop: string;
    paddingRight: string;
    paddingBottom: string;
    paddingLeft: string;
    children: string;
    cssClasses: string[];
    backgroundType: string;
    videoSrc: string;
    videoFallbackSrc: string;
    videoLoop: string;
    videoPlayOnlyVisible: string;
    videoLazyLoading: string;
    videoOverlayColor: string;
}

const Row: React.FC<RowProps> = props => {
    const backgroundElement = useRef(null);
    const [bgImageStyle, setBgImageStyle] = useState(null);
    const classes = shallowMerge(defaultClasses, props.classes);

    const {
        appearance,
        verticalAlignment,
        minHeight,
        backgroundColor,
        desktopImage,
        mobileImage,
        backgroundSize,
        backgroundPosition,
        backgroundAttachment,
        backgroundRepeat,
        enableParallax,
        parallaxSpeed = 0.5,
        textAlign,
        border,
        borderColor,
        borderWidth,
        borderRadius,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        mediaQueries,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        children,
        cssClasses = [],
        backgroundType,
        videoSrc,
        videoFallbackSrc,
        videoLoop,
        videoPlayOnlyVisible,
        videoLazyLoading,
        videoOverlayColor
    } = props;

    const { styles: mediaQueryStyles } = useMediaQuery({ mediaQueries});

    // TODO: continue

    return (
        <>ROW COMPONENT</>
    )
}

export default Row;
