import React from 'react';

import Link from 'next/link';

import { shallowMerge } from '@/app/utils';
import Newsletter from '@/components/Framework/Newsletter';
import { useStoreDataContext } from '@/context/storeData';
import { useUniqueId } from '@/hooks';

import { useFooter } from './useFooter';

import defaultClasses from './footer.module.css';

interface FooterProps {
    classes?: Partial<{
        root: string;
        container: string;
        main: string;
        linkWrapper: string;
        links: string;
        secondLinkChild: string;
        linkHeading: string;
        list: string;
        link: string;
        newsletter: string;
        sub: string;
        social: string;
        socialLink: string;
        copyright: string;
    }>;
}

const Footer: React.FC<FooterProps> = props => {
    const { classes: propClasses } = props;
    const { navigation } = useFooter();
    const classes = shallowMerge(defaultClasses, propClasses);
    const { id } = useUniqueId();
    const { storeConfig } = useStoreDataContext();

    return (
        <footer className={classes.root} aria-labelledby={id`footerHeading`}>
            <h2 id={id`footerHeading`} className="sr-only">
                Footer
            </h2>
            <div className={classes.container}>
                <div className={classes.main}>
                    <div className={classes.linkWrapper}>
                        <div className={classes.links}>
                            <div>
                                <h3 className={classes.linkHeading}>Account</h3>
                                <ul role="list" className={classes.list}>
                                    {navigation.account.map(item => (
                                        <li key={item.name}>
                                            <Link href={item.href}>
                                                <a className={classes.link}>{item.name}</a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={classes.secondLinkChild}>
                                <h3 className={classes.linkHeading}>About Us</h3>
                                <ul role="list" className={classes.list}>
                                    {navigation.aboutUs.map(item => (
                                        <li key={item.name}>
                                            <Link href={item.href}>
                                                <a className={classes.link}>{item.name}</a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className={classes.links}>
                            <div>
                                <h3 className={classes.linkHeading}>Help</h3>
                                <ul role="list" className={classes.list}>
                                    {navigation.help.map(item => (
                                        <li key={item.name}>
                                            <Link href={item.href}>
                                                <a className={classes.link}>{item.name}</a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={classes.secondLinkChild}>
                                <h3 className={classes.linkHeading}>Legal</h3>
                                <ul role="list" className={classes.list}>
                                    {navigation.legal.map(item => (
                                        <li key={item.name}>
                                            <Link href={item.href}>
                                                <a className={classes.link}>{item.name}</a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={classes.newsletter}>
                        <Newsletter />
                    </div>
                </div>
                <div className={classes.sub}>
                    <div className={classes.social}>
                        {navigation.social.map(item => (
                            <a key={item.name} href={item.href} className={classes.socialLink}>
                                <span className="sr-only">{item.name}</span>
                                <item.icon className="h-6 w-6" aria-hidden={true} />
                            </a>
                        ))}
                    </div>
                    <p className={classes.copyright}>{storeConfig?.copyright}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
