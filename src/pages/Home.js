import React from 'react';
import Bugs from "../components/Bugs";
import Projects from "../components/Projects";
import AddBugModal from "../components/AddBugModal";
import AddProjectModal from "../components/AddProjectModal";

function Home(props) {
    return (
        <>
        <div className='d-flex gap-3 mb-4'>
        <AddBugModal />
        <AddProjectModal />
        </div>
            <Projects />
            <hr />
            <Bugs />
        </>
    );
}

export default Home;