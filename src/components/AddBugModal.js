import {useState} from "react";
import {FaUser} from "react-icons/fa";
import {useMutation, useQuery} from "@apollo/client";
import {ADD_BUG} from "../mutations/bugMutations";
import {GET_BUGS} from "../queries/bugQueries";
import {GET_PROJECTS} from "../queries/projectQueries";

function AddBugModal() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [projectId, setProjectId] = useState('');

  const {loading, error, data} = useQuery(GET_PROJECTS);

  const [addBug] = useMutation(ADD_BUG, {
    variables: {name, description, projectId},
    refetchQueries: [{query: GET_BUGS}],
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if(name === '' || description === '' || projectId === ''){
      return alert('Please fill in all fields');
    }
    addBug(name, description, projectId);
    setName('');
    setDescription('');
    setProjectId('');
  }

  if(loading) return null;
  if(error) return "Something went wrong...";

    return (
        <>
            {!loading && !error && (
            <>
    <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#addBugModal">
                <div className="d-flex align-items-center">
                  <FaUser className="icon" />
                  <div>Add Bug</div>
                </div>
            </button>

        <div className="modal fade" id="addBugModal" aria-labelledby="addBugModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
        <h1 className="modal-title fs-5" id="addBugModalLabel">Add Bug</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
              <label className="form-label">Name</label>
              <input className="form-control" type='text' id="name" value={name} onChange={(e) => {
                setName(e.target.value)
              }}>

              </input>
          </div>
          <div className="mb-3">
              <label className="form-label">Description</label>
              <input className="form-control" type='text' id="description" value={description} onChange={(e) => {
                setDescription(e.target.value)
              }}>

              </input>
          </div>
          <div className="mb-3">
              <label className="form-label">Project</label>
              <select id='projectId' className="form-select" value={projectId} onChange={(e)=> {
                setProjectId(e.target.value)}}>
                  <option value=''>Select Project</option>
                  {data.projects.map(project => {
                    return <option key={project.id} value={project.id}>{project.name}</option>
                  })}
              </select>
          </div>
          <button className="btn btn-secondary" type="submit" data-bs-dismiss="modal">Submit</button>
        </form>
      </div>
    </div>
  </div>
</div>
    </>)}
    </>
    );
}

export default AddBugModal;