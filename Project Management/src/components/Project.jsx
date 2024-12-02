import { useState } from "react";
import AddProject from "./AddProject.jsx";
import NoProject from "./NoProject.jsx";
import ProjectInfo from "./ProjectInfo.jsx";
export default function Project({
  onAddProject,
  addProjectStatus,
  projectInfoStatus,

}) {
  function addProjectHandler(projectData) {
    onAddProject(projectData);
  }

  let showNoProject = false;
  let showProjecInfo = false;

  if (!addProjectStatus && !projectInfoStatus) {
    showNoProject = true;
  }

  if (!addProjectStatus && projectInfoStatus) {
    showProjecInfo = true;
  }

  return (
    <div className="w-[35rem] mt-16">
      {addProjectStatus && <AddProject onProjectSubmit={addProjectHandler} />}
      {showNoProject && <NoProject  />}
      {showProjecInfo && <ProjectInfo />}
    </div>
  );
}
