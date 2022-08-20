import { gql } from '@apollo/client';

export const subscribeEmailToNewsletterMutation = gql`
    mutation subscribeEmailToNewsletter($email: String!) {
        subscribeEmailToNewsletter(email: $email) {
            status
        }
    }
`;
