import { gql } from '@apollo/client';

export const getReCaptchaConfig = gql`
    query getReCaptchaConfig {
        recaptchaV3Config {
            website_key
            badge_position
            language_code
            forms
        }
    }
`;
