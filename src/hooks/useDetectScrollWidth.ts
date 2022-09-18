import { useEffect, useTransition } from 'react';

const ssr = !globalThis.document;

const getScrollBarWidth = () => {
    const innerElement = document.createElement('div');

    innerElement.style.cssText = 'width:100%;height:200px';

    const outerElement = document.createElement('div');

    outerElement.style.cssText =
        'position:absolute;top:-50px;left:0px;visibility:hidden;width:50px;height:50px;overflow:hidden';
    outerElement.appendChild(innerElement);
    document.body.appendChild(outerElement);

    const widthWithoutScroll = innerElement.offsetWidth;

    outerElement.style.overflow = 'scroll';

    let widthWithScroll = innerElement.offsetWidth;

    if (widthWithoutScroll === widthWithScroll) widthWithScroll = innerElement.clientWidth;

    document.body.removeChild(outerElement);

    return widthWithoutScroll - widthWithScroll;
};

const createObserver = (scrollBarWidth: number) => {
    return new globalThis.ResizeObserver(entries => {
        for (const entry of entries) {
            const target = entry.target as HTMLElement;

            if (target.scrollHeight > globalThis.innerHeight) {
                target.style.setProperty('--global-scrollbar-width', `${scrollBarWidth}px`);
            } else {
                target.style.setProperty('--global-scrollbar-width', '0px');
            }
        }
    });
};

export const useDetectScrollWidth = () => {
    const [, startTransition] = useTransition();

    useEffect(() => {
        if (ssr) return;

        let observer: ResizeObserver;

        startTransition(() => {
            const scrollBarWidth = getScrollBarWidth();

            if (globalThis.ResizeObserver && scrollBarWidth !== 0) {
                observer = createObserver(scrollBarWidth);
                observer.observe(globalThis.document.body);
            }
        });

        return () => {
            if (observer && !ssr) {
                observer.disconnect();
                globalThis.document.body.style.removeProperty('--global-scrollbar-width');
            }
        };
    }, []);
};
