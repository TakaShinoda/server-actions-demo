'use client'

import { useOptimistic } from 'react'
import { doneTask } from '../actions'
import type { Task } from '../types'

type Props = {
  task: Task
}

export const DoneCheckbox = ({ task }: Props) => {
  // 第1引数には最初に返される値、および保留中のアクションがない場合に返される値
  // 第2引数には現在の状態と渡されたオプティミスティックな値を受け取り、結果のオプティミスティックな状態を返す関数
  const [optimisticState, addOptimistic] = useOptimistic(
    task.done,
    (_currentState, done: boolean) => done
  )
  return (
    <input
      checked={optimisticState}
      onChange={async () => {
        addOptimistic(!task.done)
        await doneTask(task.id, task.done)
      }}
      type="checkbox"
      className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600"
    />
  )
}
