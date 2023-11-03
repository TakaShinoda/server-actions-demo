import { sql } from '@vercel/postgres'

async function addTask(formData: FormData) {
  'use server'

  const task = formData.get('task')
  
  await sql`INSERT INTO todo (task) VALUES (${task?.toString() || ''})`
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h2 className="mt-10text-center text-2xl font-bold leading-9 tracking-tight text-white mb-12">
        Todo List
      </h2>
      <form className="space-y-6 w-8/12" action={addTask}>
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
    </main>
  )
}
