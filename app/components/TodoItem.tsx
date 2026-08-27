import React from "react";
import link from "next/link";
import { Todo } from "@/types/todo";
import Link from "next/link";

export type {Todo};

export default function TodoItem({ todo }: { todo: Todo }) {
  return (
    <li
        className={`p-4 rounded-md border flex items-center justify-between gap-3 transition-colors ${todo.completed ? 'bg-green-100 border-green-200' : 'bg-gray-50 border-gray-200 hover:bg-gray-200'}`}
    >
      <div className="flex flex-col gap-3">
        <input
            type="checkbox"
            checked={todo.completed}
            className="w-5 h-5 rounded text-blue-600"
            readOnly
        />
        <span className={`text-lg ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>{todo.title}</span>
        </div>

        <Link
            href={`/todos/${todo.id}`}
            className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline shrink-0"
        >
          Detail
        </Link>
    </li>
    );
}