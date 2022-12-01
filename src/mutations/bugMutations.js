import { gql } from "@apollo/client";

const ADD_BUG = gql`
mutation addBug($name: String!, $description: String!, $projectId: String!){
    addBug(name: $name, description: $description, projectId: $projectId){
        id
        name
        description
        projectId
    }
}
`


const DELETE_BUG = gql`
mutation deleteBug($id: ID!) {
    deleteBug(id: $id){
        id
        name
        description
    }
}
`

export {DELETE_BUG, ADD_BUG};