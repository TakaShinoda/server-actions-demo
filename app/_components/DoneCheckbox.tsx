'use client'

import { useTransition } from 'react'
import { doneTask } from '../actions'
import type { Task } from '../types'

type Props = {
  task: Task
}

export const DoneCheckbox = ({ task }: Props) => {
  const [isPending, startTransition] = useTransition()
  return (
    <>
      {isPending ? (
        'loading...'
      ) : (
        <input
          checked={task.done}
          onChange={() => startTransition(() => doneTask(task.id, task.done))}
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600"
        />
      )}
    </>
  )
}
