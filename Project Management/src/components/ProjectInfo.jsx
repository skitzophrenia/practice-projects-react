import { useRef } from "react";
export default function ProjectInfo({
  projects,
  selectedProject,
  onNewTask,
  onDeleteProject,
  onDeleteTask,
}) {
  const inputTask = useRef();

  function newTaskHandler() {
    onNewTask(inputTask.current.value, selectedProject);
    inputTask.current.value = "";
  }

  function deleteProjectButtonHandler() {
    onDeleteProject();
  }

  function deleteTaskButtonHandler(index) {
    onDeleteTask(index);
  }

  return (
    <>
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between gap-5">
          <h2 className="text-xl font-bold text-stone-700 my-4">
            {projects[selectedProject].title}
          </h2>
          <button
            className="text-stone-800 hover:text-stone-950"
            onClick={deleteProjectButtonHandler}
          >
            Delete
          </button>
        </div>
        <div>
          <p className="text-stone-400 mb-4">
            {projects[selectedProject].date}
          </p>
          <p className="text-stone-600 mb-4">
            {projects[selectedProject].description}
          </p>
        </div>
      </header>
      <h2 className="text-xl font-bold text-stone-700 my-4">Tasks</h2>
      <div className="flex items-center gap-4">
        <input
          ref={inputTask}
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        />
        <button
          className="text-stone-700 hover:text-stone-950"
          onClick={newTaskHandler}
        >
          Add Task
        </button>
      </div>
      <ul className="p-4 mt-8 rounded-md bg-stone-100">
        {projects[selectedProject].tasks.map((task, index) => (
          <li key={index} className="flex justify-between my-4">
            {task}{" "}
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={() => deleteTaskButtonHandler(index)}
            >
              Clear
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
