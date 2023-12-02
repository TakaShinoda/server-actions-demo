import { addTask, getAllTasks } from './actions'
import { DoneCheckbox } from './DoneCheckbox'

export default async function Home() {
  const { rows } = await getAllTasks()

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h2 className="mt-10text-center text-2xl font-bold leading-9 tracking-tight text-white mb-12">
        Todo List
      </h2>
      <form className="space-y-6 w-1/4" action={addTask}>
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

      <div className="w-1/4">
        <div className="mt-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-white/5">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"
                  >
                    Id
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                  >
                    Task
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                  >
                    Done
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white/5">
                {rows.map((todo) => (
                  <tr key={todo.id}>
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">
                      {todo.id}
                    </td>
                    <td className="px-3 py-4 text-sm text-white">
                      {todo.task}
                    </td>
                    <td className="px-3 py-4 text-sm text-white">
                      <DoneCheckbox todo={todo as any} />
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <button
                        type="button"
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}
