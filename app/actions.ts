'use server'

import { sql } from '@vercel/postgres'
import { revalidatePath } from 'next/cache'

export async function doneTodo(id: number, done: boolean) {
  await sql`UPDATE todo SET done = ${!done} WHERE id = ${id}`

  revalidatePath('/')
}
