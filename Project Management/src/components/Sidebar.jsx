export default function Sidebar({ children, projects, onSelectProject }) {
  function selectedProjectHandler(selectedProjectIndex) {
    onSelectProject(selectedProjectIndex);
  }
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      {children}
      <menu>
        <ul className="mt-8">
          {projects &&
            projects.map((project, i) => (
              <li className="flex justify-between my-4">
                <button
                  key={i}
                  onClick={() => selectedProjectHandler(i)}
                  className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                >
                  {project.title}
                </button>
              </li>
            ))}
        </ul>
      </menu>
    </aside>
  );
}
