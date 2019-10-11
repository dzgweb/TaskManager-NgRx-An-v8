import { createAction, props } from '@ngrx/store';

import { Task } from './../../../tasks/models/task.model';

export const getTasks = createAction('[Tasks] GET_TASKS');

export const getTasksSuccess = createAction(
  '[Tasks Effects] GET_TASKS_SUCCEESS',
  props<{ tasks: Task[] }>()
);
export const getTasksError = createAction(
  '[Tasks Effects] GET_TASKS_ERROR',
  props<{ error: Error | string }>()
);

export const getTask = createAction(
  '[Tasks] GET_TASK',
  props<{ taskID: number }>()
);

export const createTask = createAction(
  '[Tasks] CREATE_TASK',
  props<{ task: Task }>()
);

export const updateTask = createAction(
  '[Tasks] UPDATE_TASK',
  props<{ task: Task }>()
);

export const completeTask = createAction(
  '[Task List Page] COMPLETE_TASK',
  props<{ task: Task }>()
);

export const deleteTask = createAction(
  '[Tasks] DELETE_TASK',
  props<{ task: Task }>()
);
