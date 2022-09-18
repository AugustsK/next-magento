const pbStyleAttribute = 'data-pb-style';

interface StylesObject {
    [key: string]: CSSStyleDeclaration[]
}

interface MediaStylesObject {
    [key: string]: {
        selectors: string[],
        css: string
    }[]
}

const convertToInlineStyles = (document: HTMLBodyElement) => {
    const styleBlocks = document.getElementsByTagName('style');
    const styles: StylesObject = {};
    const mediaStyles: MediaStylesObject = {};

    if (styleBlocks.length > 0) {
        Array.from(styleBlocks).forEach(styleBlock => {
            const cssRules = styleBlock?.sheet?.cssRules || [];

            Array.from(cssRules).forEach((rule) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                if (rule.selectorText) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    const selectors = rule.selectorText
                        .split(',')
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        .map(selector => selector.trim());
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    selectors.forEach(selector => {
                        if (!styles[selector]) {
                            styles[selector] = [];
                        }
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        styles[selector].push(rule.style);
                    });
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                } else if (rule.media) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    Array.from(rule.media).forEach(media => {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        mediaStyles[media as string] = Array.from(rule.cssRules).map(rule => {
                            return {
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                selectors: rule.selectorText
                                    .split(',')
                                    .map((selector: string) => selector.trim()),
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                css: rule.style.cssText
                            };
                        });
                    });
                }
            });
        });
    }

    Object.keys(mediaStyles).map((media, i) => {
        mediaStyles[media].forEach(style => {
            style.selectors.forEach(selector => {
                const element = document.querySelector(selector);
                if (element) {
                    element.setAttribute(`data-media-${i}`, media);
                    const savedStyles = element.getAttribute(
                        `data-media-style-${i}`
                    );
                    // avoids overwriting previously saved styles
                    element.setAttribute(
                        `data-media-style-${i}`,
                        `${savedStyles ? `${savedStyles} ` : ''}${style.css}`
                    );
                }
            });
        });
    });

    Object.keys(styles).map(selector => {
        const element = document.querySelector<HTMLElement>(selector);
        if (!element) {
            return;
        }

        styles[selector].map(style => {
            element.setAttribute(
                'style',
                element.style.cssText + style.cssText
            );
        });
        element.removeAttribute(pbStyleAttribute);
    });
}

export default convertToInlineStyles;