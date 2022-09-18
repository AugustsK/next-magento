import React, { useEffect, useRef, useState } from 'react';

const ssr = !globalThis.document;

export interface IMediaQuery {
    media: string;
    style: React.CSSProperties & {
        [key: string]: string;
    };
}

export const useMediaQuery = (props: { mediaQueries: IMediaQuery[] } = { mediaQueries: [] }) => {
    const [styles, setStyles] = useState<
        React.CSSProperties & {
            [key: string]: string;
        }
    >({});
    const isMountedRef = useRef(false);
    const { mediaQueries } = props;

    useEffect(() => {
        isMountedRef.current = true;

        if (!mediaQueries || ssr) return;

        const { matchMedia } = globalThis;

        const mqlList = mediaQueries.map(({ media, style }) => ({
            match: matchMedia(media),
            style
        }));

        const handleMatch = (query: MediaQueryListEvent, i: number) => {
            if (!isMountedRef.current) return;

            if (query.matches) {
                setStyles(prevState => ({
                    ...prevState,
                    ...mediaQueries[i].style
                }));
            } else {
                setStyles(prevState =>
                    Object.keys(prevState)
                        .filter(key => mediaQueries[i].style[key] !== prevState[key])
                        .reduce((obj, key) => {
                            return {
                                ...obj,
                                [key]: prevState[key]
                            };
                        }, {})
                );
            }
        };

        mqlList.forEach((mql, i) => {
            if (mql.match.matches) {
                setStyles(prevState => ({
                    ...prevState,
                    ...mql.style
                }));
            }

            mql.match.addEventListener('change', query => handleMatch(query, i));
        });

        return () => {
            isMountedRef.current = false;

            mqlList.forEach((mql, i) => {
                mql.match.removeEventListener('change', query => handleMatch(query, i));
            });
        };
    }, [mediaQueries]);

    return {
        styles
    };
};
