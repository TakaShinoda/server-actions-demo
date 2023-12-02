import { addTask } from '../actions'

export const TaskForm = () => {
  return (
    <form className="space-y-6 w-1/3" action={addTask}>
      <div>
        <label
          htmlFor="task"
          className="block text-sm font-medium leading-6 text-white"
        >
          Task
        </label>
        <div className="mt-2">
          <input
            id="task"
            name="task"
            type="text"
            required
            className="block w-full p-4 rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
      >
        Add
      </button>
    </form>
  )
}
