import { HttpClient } from "@angular/common/http"

export interface Todo {
  id: string
  title: string
  content: string
  status: number
  deadline: Date
}

export enum STATUS {
  TODO = 1,
  IN_PROGRESS = 2,
  DONE = 3,
  BUG = 4,
}
