import { getAllTasks } from '../actions'
import { DoneCheckbox } from './DoneCheckbox'
import { DeleteButton } from './DeleteButton'
import type { Task } from '../types'

export const TaskTable = async () => {
  const { rows } = await getAllTasks()
  return (
    <div className="w-1/3">
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
              {rows.map((task) => (
                <tr key={task.id}>
                  <td className="py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">
                    {task.id}
                  </td>
                  <td className="px-3 py-4 text-sm text-white">{task.task}</td>
                  <td className="px-3 py-4 text-sm text-white">
                    <DoneCheckbox task={task as Task} />
                  </td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <DeleteButton task={task as Task} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
