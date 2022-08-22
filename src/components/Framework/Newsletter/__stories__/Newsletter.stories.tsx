import { ComponentMeta, ComponentStory } from '@storybook/react';

import NewsletterComponent from "@/components/Framework/Newsletter";

export default {
    title: 'Design System/Molecules/Newsletter',
    component: NewsletterComponent,
    // parameters: {
    //     a11y: {
    //         config: {
    //             checks: [
    //                 {
    //                     id: 'color-contrast',
    //                     options: {
    //                         contrastRatio: {
    //                             normal: {
    //                                 expected: 4.2
    //                             }
    //                         }
    //                     }
    //                 }
    //             ],
    //             rules: [
    //                 {
    //                     id: 'color-contrast',
    //                     enabled: false
    //                 }
    //             ]
    //         }
    //     }
    // }
} as ComponentMeta<typeof NewsletterComponent>;

export const Newsletter: ComponentStory<typeof NewsletterComponent> = () => (
    <div>
        <NewsletterComponent />
    </div>
);
