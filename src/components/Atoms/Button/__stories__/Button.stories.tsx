import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from '../button';

export default {
    title: 'Button',
    component: Button
} as ComponentMeta<typeof Button>;

export const TypesAndSizes: ComponentStory<typeof Button> = () => (
    <div>
        <h1 style={{ marginBottom: '16px' }}>Primary</h1>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
            <div>
                <Button visualType={'primary'} size={'xs'}>
                    Primary Button XS
                </Button>
            </div>
            <div>
                <Button visualType={'primary'} size={'sm'}>
                    Primary Button SM
                </Button>
            </div>
            <div>
                <Button visualType={'primary'} size={'md'}>
                    Primary Button MD
                </Button>
            </div>
            <div>
                <Button visualType={'primary'} size={'lg'}>
                    Primary Button LG
                </Button>
            </div>
            <div>
                <Button visualType={'primary'} size={'xl'}>
                    Primary Button XL
                </Button>
            </div>
        </div>
        <h1 style={{ marginBottom: '16px' }}>Secondary</h1>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
            <div>
                <Button visualType={'secondary'} size={'xs'}>
                    Secondary Button XS
                </Button>
            </div>
            <div>
                <Button visualType={'secondary'} size={'sm'}>
                    Secondary Button SM
                </Button>
            </div>
            <div>
                <Button visualType={'secondary'} size={'md'}>
                    Secondary Button MD
                </Button>
            </div>
            <div>
                <Button visualType={'secondary'} size={'lg'}>
                    Secondary Button LG
                </Button>
            </div>
            <div>
                <Button visualType={'secondary'} size={'xl'}>
                    Secondary Button XL
                </Button>
            </div>
        </div>
        <h1 style={{ marginBottom: '16px' }}>Tertiary</h1>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
            <div>
                <Button visualType={'tertiary'} size={'xs'}>
                    Tertiary Button XS
                </Button>
            </div>
            <div>
                <Button visualType={'tertiary'} size={'sm'}>
                    Tertiary Button SM
                </Button>
            </div>
            <div>
                <Button visualType={'tertiary'} size={'md'}>
                    Tertiary Button MD
                </Button>
            </div>
            <div>
                <Button visualType={'tertiary'} size={'lg'}>
                    Tertiary Button LG
                </Button>
            </div>
            <div>
                <Button visualType={'tertiary'} size={'xl'}>
                    Tertiary Button XL
                </Button>
            </div>
        </div>
    </div>
);
