import { gql } from "@apollo/client";

const GET_BUGS= gql`
query getBugs{
    bugs{
        id
        name
        description
    }
}
`
export {GET_BUGS};