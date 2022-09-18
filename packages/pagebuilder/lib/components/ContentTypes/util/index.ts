export const getBackgroundImages = (node: HTMLElement) => {
    const images = node.getAttribute('data-background-images');
    const response = {
        desktopImage: null,
        mobileImage: null,
        backgroundSize: node.style.backgroundSize,
        backgroundPosition: node.style.backgroundPosition,
        backgroundAttachment: node.style.backgroundAttachment,
        backgroundRepeat: node.style.backgroundRepeat || 'repeat'
    };

    if (images) {
        const imagesStructure = JSON.parse(images.replace(/\\"/g, '"'));
        if (imagesStructure.desktop_image) {
            response.desktopImage = imagesStructure.desktop_image;
        }
        if (imagesStructure.mobile_image) {
            response.mobileImage = imagesStructure.mobile_image;
        }
    }

    return response;
};

const alignmentToFlex: { [key: string]: string } = {
    top: 'flex-start',
    middle: 'center',
    bottom: 'flex-end'
};

export const getVerticalAlignment = (node: HTMLElement) => {
    let verticalAlignment = null;
    if (node.style.justifyContent) {
        verticalAlignment = flexToVerticalAlignment(node.style.justifyContent);
    }

    return {
        verticalAlignment
    };
};

export const verticalAlignmentToFlex = (alignment: string) => alignmentToFlex[alignment]

export const flexToVerticalAlignment = (flex: string) => {
    const flexToAlignment = Object.assign(
        {},
        ...Object.entries(alignmentToFlex).map(([a, b]) => ({ [b]: a }))
    );

    return flexToAlignment[flex];
};

export const getAdvanced = (node: HTMLElement) => ({
    ...getPadding(node),
    ...getMargin(node),
    ...getBorder(node),
    ...getTextAlign(node),
    ...getCssClasses(node),
    ...getIsHidden(node)
});

export const getPadding = (node: HTMLElement) => ({
    paddingTop: node.style.paddingTop,
    paddingRight: node.style.paddingRight,
    paddingBottom: node.style.paddingBottom,
    paddingLeft: node.style.paddingLeft
});

export const getMargin = (node: HTMLElement) => ({
    marginTop: node.style.marginTop,
    marginRight: node.style.marginRight,
    marginBottom: node.style.marginBottom,
    marginLeft: node.style.marginLeft
});

export const getBorder = (node: HTMLElement) => ({
    border: node.style.borderStyle,
    borderColor: node.style.borderColor,
    borderWidth: node.style.borderWidth,
    borderRadius: node.style.borderRadius
});

export const getTextAlign = (node: HTMLElement) => ({
    textAlign: node.style.textAlign
});

export const getCssClasses = (node: HTMLElement) => ({
    cssClasses: node.getAttribute('class')?.split(' ') || []
});

export const getIsHidden = (node: HTMLElement) => ({
    isHidden: node.style.display === 'none'
});

export const cssToJSXStyle = (style?: string) => {
    const toCamelCase = (str: string) => str.replace(/-(.)/g, (_, p) => p.toUpperCase());

    const result: { [key: string]: string } = {};

    style?.split(';').forEach(el => {
        const [prop, value] = el.split(':');

        if (prop) {
            result[toCamelCase(prop.trim())] = value.trim();
        }
    });

    return result;
};

export const getMediaQueries = (node: HTMLElement) => {
    const response: { media?: string, style: { [key: string]: string }}[] = [];
    const dataset = Object.keys(node.dataset);

    const medias = dataset
        .filter(key => key.match(/media-/))
        .map(key => node.dataset[key]);

    const styles = dataset
        .filter(key => key.match(/mediaStyle/))
        .map(key => node.dataset[key]);

    medias.forEach((media, i) => {
        response.push({
            media,
            style: cssToJSXStyle(styles[i])
        });
    });

    return { mediaQueries: response };
};
