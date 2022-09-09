import {
    getAdvanced,
    getBackgroundImages,
    getVerticalAlignment,
    getIsHidden,
    getMediaQueries
} from "../util";

import { ContentTypeObject } from "../../PageBuilder/usePageBuilder";

const extractConfig = (node: HTMLElement, props: ContentTypeObject) => {
    const dataNode = props.appearance === 'contained' ? node.childNodes[0] as HTMLElement : node;
    const childNode = node.childNodes.length > 0 ? node.childNodes[0] as HTMLElement : null;
    const videoOverlayColor =
        props.appearance === 'full-width' || props.appearance === 'full-bleed'
            ? childNode?.getAttribute('data-video-overlay-color')
            : childNode?.getAttribute('data-video-overlay-color');

    const minHeight = dataNode.style.minHeight
        ? dataNode.style.minHeight
        : null;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const containsDynamicBlock = [...dataNode.childNodes].some(e => {
        return e.getAttribute('data-content-type') === 'dynamic_block';
    });

    return {
        minHeight: containsDynamicBlock ? null : minHeight,
        ...getVerticalAlignment(dataNode),
        backgroundColor: dataNode.style.backgroundColor
            ? dataNode.style.backgroundColor
            : null,
        ...getBackgroundImages(dataNode),
        enableParallax: dataNode.getAttribute('data-enable-parallax') === '1',
        parallaxSpeed: parseFloat(dataNode.getAttribute('data-parallax-speed') || ''),
        backgroundType: dataNode.getAttribute('data-background-type'),
        videoSrc: dataNode.getAttribute('data-video-src'),
        videoFallbackSrc: dataNode.getAttribute('data-video-fallback-src'),
        videoLoop: dataNode.getAttribute('data-video-loop') === 'true',
        videoPlayOnlyVisible:
            dataNode.getAttribute('data-video-play-only-visible') === 'true',
        videoLazyLoading:
            dataNode.getAttribute('data-video-lazy-load') === 'true',
        videoOverlayColor: videoOverlayColor || null,
        ...getAdvanced(dataNode),
        ...getIsHidden(node),
        ...getMediaQueries(dataNode)
    };
}

export default extractConfig;
