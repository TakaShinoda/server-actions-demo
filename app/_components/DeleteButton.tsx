'use client'
import { useTransition } from 'react'
import { deleteTask } from '../actions'
import type { Task } from '../types'

type Props = {
  task: Task
}

export const DeleteButton = ({ task }: Props) => {
  const [isPending, startTransition] = useTransition()
  return (
    <button
      onClick={() => startTransition(() => deleteTask(task.id))}
      type="button"
      className="text-red-600 hover:text-red-900"
    >
      {isPending ? 'loading...' : 'Delete'}
    </button>
  )
}
