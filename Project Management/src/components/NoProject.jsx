export default function NoProject({ onAddProject }) {
  function newProjectHandler() {
    onAddProject();
  }
  return (
    <>
      <img src="./logo.png" className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one.
      </p>
      <p className="mt-8">
        <button
          onClick={newProjectHandler}
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        >
          Enter a new project
        </button>
      </p>
    </>
  );
}
