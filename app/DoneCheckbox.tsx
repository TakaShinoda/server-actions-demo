'use client'

import { useTransition } from 'react'
import { doneTask } from './actions'
import type { Todo } from './types'

type Props = {
  todo: Todo
}

export const DoneCheckbox = ({ todo }: Props) => {
  const [isPending, startTransition] = useTransition()
  return (
    <>
      {isPending ? (
        'loading...'
      ) : (
        <input
          checked={todo.done}
          onChange={() => startTransition(() => doneTask(todo.id, todo.done))}
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600"
        />
      )}
    </>
  )
}
