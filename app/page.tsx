import { TaskForm } from './_components/TaskForm'
import { TaskTable } from './_components/TaskTable'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-2">
      <h2 className="mt-10text-center text-2xl font-bold leading-9 tracking-tight text-white mb-12">
        Todo List
      </h2>
      <TaskForm />
      <TaskTable />
    </main>
  )
}
