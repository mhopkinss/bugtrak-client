import { gql } from "@apollo/client";

const ADD_PROJECT = gql`
mutation AddProject($name: String!, $description: String!, $status: ProjectStatus!){
    addProject(name: $name, description: $description, status: $status){
        id
        name
        description
        status
        bugs{
            id
            name
            description
            projectId
        }
    }
}
`

const DELETE_PROJECT = gql`
mutation DeleteProject($id: ID!){
    deleteProject(id: $id){
        id
    }
}
`

const UPDATE_PROJECT = gql`
mutation UpdateProject($id: ID!, $name: String!, $description: String!, $status: ProjectStatusUpdate!){
    updateProject(id: $id, name: $name, description: $description, status: $status){
        id
        name
        description
        status
        bugs{
            id
            name
            description
            projectId
        }
    }
}
`

export {ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT};