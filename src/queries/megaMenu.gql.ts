import { gql } from '@apollo/client';

export const getMegaMenu = gql`
    query getMegaMenu($rootCategoryUid: String!) {
        categoryList(filters: { parent_category_uid: { eq: $rootCategoryUid } }) {
            uid
            include_in_menu
            name
            position
            url_path
            children {
                uid
                include_in_menu
                name
                position
                url_path
                children {
                    uid
                    include_in_menu
                    name
                    position
                    url_path
                    children {
                        uid
                        include_in_menu
                        name
                        position
                        url_path
                    }
                }
            }
        }
    }
`;
