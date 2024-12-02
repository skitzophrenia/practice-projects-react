import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import AddProject from "./components/AddProject.jsx";
import NoProject from "./components/NoProject.jsx";
import ProjectInfo from "./components/ProjectInfo.jsx";

function App() {
  const [projects, setProjects] = useState([]);
  const [isAddProjectActive, setAddProjectActive] = useState(false);
  const [emptyPage, setEmptyPage] = useState(true);
  const [isProjectInfoActive, setIsProjectInfoActive] = useState(false);
  const [selectedProject, setSelectedProject] = useState();

  function newTaskHandler(task, index) {
    setProjects(
      projects.map((item, idx) =>
        idx === index ? { ...item, tasks: item.tasks.concat(task) } : item
      )
    );
  }

  function deleteProjectHandler() {
    setAddProjectActive(false);
    setIsProjectInfoActive(false);
    setEmptyPage(true);
    setProjects(() => {
      const removedProject = projects.filter(
        (item, i) => i !== selectedProject
      );
      return removedProject;
    });
  }

  function deleteTaskHandler(taskIndex) {
    setProjects(() => {
      const deletedTask = projects[selectedProject].tasks.filter(
        (item, index) => index !== taskIndex
      );
      const updatedProject = projects.map((item, idx) =>
        idx === selectedProject ? { ...item, tasks: deletedTask } : item
      );
      return updatedProject;
    });
  }

  // store project object on projects array
  function addProjectHandler(retrievedProjects) {
    setProjects((prevProjectData) => {
      const updateProjectData = [...prevProjectData, retrievedProjects];
      return updateProjectData;
    });
    setAddProjectActive(false);
    setEmptyPage(true);
  }

  function openAddProjectHandler() {
    setAddProjectActive(true);
    setIsProjectInfoActive(false);
    setEmptyPage(false);
  }

  function selectProjectHandler(selectedProjectIndex) {
    setSelectedProject(selectedProjectIndex);
    setAddProjectActive(false);
    setEmptyPage(false);
    setIsProjectInfoActive(true);
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar
          projects={projects}
          onSelectProject={selectProjectHandler}
          className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl"
        >
          <button
            onClick={openAddProjectHandler}
            className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
          >
            Add Project
          </button>
        </Sidebar>

        <div className="w-[35rem] mt-16">
          {isAddProjectActive && (
            <AddProject onAddProject={addProjectHandler} />
          )}
          {emptyPage && <NoProject onAddProject={openAddProjectHandler} />}
          {isProjectInfoActive && (
            <ProjectInfo
              onNewTask={newTaskHandler}
              projects={projects}
              selectedProject={selectedProject}
              onDeleteProject={deleteProjectHandler}
              onDeleteTask={deleteTaskHandler}
            />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
