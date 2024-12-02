import { useRef } from "react";
export default function AddProject({ onAddProject }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  function submitProjectHandler() {
    onAddProject({
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      date: dateRef.current.value,
      tasks: [],
    });
  }
  let inputClasses =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <form method="dialog" onSubmit={submitProjectHandler}>
      <div className="flex items-center justify-end gap-5">
        <button type="reset" className="text-stone-800 hover:text-stone-950">
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        >
          Save
        </button>
      </div>

      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          Title
        </label>
        <input type="text" ref={titleRef} className={inputClasses} />
      </p>

      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          Description
        </label>
        <textarea ref={descriptionRef} className={inputClasses} />
      </p>

      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          Date
        </label>
        <input type="date" ref={dateRef} className={inputClasses} />
      </p>
    </form>
  );
}
