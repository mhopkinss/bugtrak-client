import {useQuery} from "@apollo/client";
import BugRow from "./BugRow";
import {GET_BUGS} from "../queries/bugQueries"
import Spinner from "./assets/Spinner"

function Bugs() {
    const {loading, error, data} = useQuery(GET_BUGS)
    if(loading) return <Spinner />
    if(error) return <p>Something went wrong.</p>
    return (
        <>
        {!loading && !error && (
           <table className="table table-hover mt-3">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {data.bugs.map(bug => {
                    return <BugRow key={bug.id} bug={bug}/>
                })}
            </tbody>
           </table>
        )
        }
        </>
    );
}

export default Bugs;