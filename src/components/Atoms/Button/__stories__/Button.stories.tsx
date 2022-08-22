import { ComponentMeta, ComponentStory } from '@storybook/react';

import ButtonComponent, { ButtonSize, ButtonVisualType } from '../button';

export default {
    title: 'Design System/Atoms/Button',
    component: ButtonComponent,
    parameters: {
        a11y: {
            config: {
                checks: [
                    {
                        id: 'color-contrast',
                        options: {
                            contrastRatio: {
                                normal: {
                                    expected: 4.2
                                }
                            }
                        }
                    }
                ],
                rules: [
                    {
                        id: 'color-contrast',
                        enabled: false
                    }
                ]
            }
        }
    }
} as ComponentMeta<typeof ButtonComponent>;

export const Button: ComponentStory<typeof ButtonComponent> = () => (
    <div>
        <h1 style={{ marginBottom: '16px' }}>Primary</h1>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
            <div>
                <ButtonComponent visualType={ButtonVisualType.primary} size={ButtonSize.xs}>
                    Button XS
                </ButtonComponent>
            </div>
            <div>
                <ButtonComponent visualType={ButtonVisualType.primary} size={ButtonSize.sm}>
                    Button SM
                </ButtonComponent>
            </div>
            <div>
                <ButtonComponent visualType={ButtonVisualType.primary} size={ButtonSize.md}>
                    Button MD
                </ButtonComponent>
            </div>
            <div>
                <ButtonComponent visualType={ButtonVisualType.primary} size={ButtonSize.lg}>
                    Button LG
                </ButtonComponent>
            </div>
            <div>
                <ButtonComponent visualType={ButtonVisualType.primary} size={ButtonSize.xl}>
                    Button XL
                </ButtonComponent>
            </div>
            <div>
                <ButtonComponent visualType={ButtonVisualType.primary} size={ButtonSize.xl} disabled>
                    Disabled
                </ButtonComponent>
            </div>
        </div>
        <h1 style={{ marginBottom: '16px' }}>Primary Lighter</h1>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
            <div>
                <ButtonComponent visualType={ButtonVisualType.primaryLighter} size={ButtonSize.xs}>
                    Button XS
                </ButtonComponent>
            </div>
            <div>
                <ButtonComponent visualType={ButtonVisualType.primaryLighter} size={ButtonSize.sm}>
                    Button SM
                </ButtonComponent>
            </div>
            <div>
                <ButtonComponent visualType={ButtonVisualType.primaryLighter} size={ButtonSize.md}>
                    Button MD
                </ButtonComponent>
            </div>
            <div>
                <ButtonComponent visualType={ButtonVisualType.primaryLighter} size={ButtonSize.lg}>
                    Button LG
                </ButtonComponent>
            </div>
            <div>
                <ButtonComponent visualType={ButtonVisualType.primaryLighter} size={ButtonSize.xl}>
                    Button XL
                </ButtonComponent>
            </div>
            <div>
                <ButtonComponent visualType={ButtonVisualType.primaryLighter} size={ButtonSize.xl} disabled>
                    Disabled
                </ButtonComponent>
            </div>
        </div>
        <h1 style={{ marginBottom: '16px' }}>Secondary</h1>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
            <div>
                <ButtonComponent visualType={ButtonVisualType.secondary} size={ButtonSize.xs}>
                    Button XS
                </ButtonComponent>
            </div>
            <div>
                <ButtonComponent visualType={ButtonVisualType.secondary} size={ButtonSize.sm}>
                    Button SM
                </ButtonComponent>
            </div>
            <div>
                <ButtonComponent visualType={ButtonVisualType.secondary} size={ButtonSize.md}>
                    Button MD
                </ButtonComponent>
            </div>
            <div>
                <ButtonComponent visualType={ButtonVisualType.secondary} size={ButtonSize.lg}>
                    Button LG
                </ButtonComponent>
            </div>
            <div>
                <ButtonComponent visualType={ButtonVisualType.secondary} size={ButtonSize.xl}>
                    Button XL
                </ButtonComponent>
            </div>
            <div>
                <ButtonComponent visualType={ButtonVisualType.secondary} size={ButtonSize.xl} disabled>
                    Disabled
                </ButtonComponent>
            </div>
        </div>
        <h1 style={{ marginBottom: '16px' }}>Tertiary</h1>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
            <div>
                <ButtonComponent visualType={ButtonVisualType.tertiary} size={ButtonSize.xs}>
                    Button XS
                </ButtonComponent>
            </div>
            <div>
                <ButtonComponent visualType={ButtonVisualType.tertiary} size={ButtonSize.sm}>
                    Button SM
                </ButtonComponent>
            </div>
            <div>
                <ButtonComponent visualType={ButtonVisualType.tertiary} size={ButtonSize.md}>
                    Button MD
                </ButtonComponent>
            </div>
            <div>
                <ButtonComponent visualType={ButtonVisualType.tertiary} size={ButtonSize.lg}>
                    Button LG
                </ButtonComponent>
            </div>
            <div>
                <ButtonComponent visualType={ButtonVisualType.tertiary} size={ButtonSize.xl}>
                    Button XL
                </ButtonComponent>
            </div>
            <div>
                <ButtonComponent visualType={ButtonVisualType.tertiary} size={ButtonSize.xl} disabled>
                    Disabled
                </ButtonComponent>
            </div>
        </div>
    </div>
);
