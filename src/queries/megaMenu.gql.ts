import { gql } from "@apollo/client";

export const getMegaMenu = gql`
    query getMegaMenu {
        categoryList {
            uid
            name
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
