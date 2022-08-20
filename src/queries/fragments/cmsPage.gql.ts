import { gql } from '@apollo/client';

export const CmsPageFragment = gql`
    fragment CmsPageFragment on CmsPage {
        identifier
        url_key
        title
        content
        content_heading
        page_layout
        meta_title
        meta_description
        meta_keywords
    }
`;
