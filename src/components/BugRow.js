import {FaTrash} from "react-icons/fa";
import { useMutation } from "@apollo/client";
import {DELETE_BUG} from "../mutations/bugMutations";
import {GET_BUGS} from "../queries/bugQueries"

function BugRow({bug}) {
    const [deleteBug] = useMutation(DELETE_BUG, {
        variables: {id: bug.id},
        refetchQueries: [{query: GET_BUGS}]
    });
    return (
    <tr>
        <td>{bug.name}</td>
        <td>{bug.description}</td>
        <td>
            <button className="btn btn-danger btn-sm" onClick={deleteBug}><FaTrash/></button>
        </td>
    </tr>
    );
}

export default BugRow;