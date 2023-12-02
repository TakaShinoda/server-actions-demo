'use server'

import { sql } from '@vercel/postgres'
import { revalidatePath } from 'next/cache'

export async function addTask(formData: FormData) {
  const task = formData.get('task')
  await sql`INSERT INTO todo (task) VALUES (${task?.toString() || ''})`

  revalidatePath('/')
}

export async function getAllTasks() {
  return await sql`SELECT * FROM todo ORDER BY created_at ASC`
}

export async function doneTask(id: number, done: boolean) {
  await sql`UPDATE todo SET done = ${!done} WHERE id = ${id}`

  revalidatePath('/')
}

export async function deleteTask(id: number) {
  await sql`DELETE FROM todo WHERE id = ${id}`

  revalidatePath('/')
}
