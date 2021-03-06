import { Action, createReducer, on } from '@ngrx/store';

import { TasksState, initialTasksState } from './tasks.state';
import * as TasksActions from './tasks.actions';

const reducer = createReducer(
  initialTasksState,
  on(TasksActions.getTasks, state => {
    console.log('GET_TASKS action being handled!');
    return {
      ...state,
      loading: true
    };
  }),
  on(TasksActions.getTasksSuccess, (state, props) => {
    console.log('GET_TASKS_SUCCESS action being handled!');
    const data = [...props.tasks];
    return {
      ...state,
      data,
      loading: false,
      loaded: true,
      selectedTask: null
    };
  }),
  on(TasksActions.getTasksError, (state, props) => {
    console.log('GET_TASKS_ERROR action being handled!');
    const error = props.error;
    return {
      ...state,
      loading: false,
      loaded: false,
      error
    };
  }),

  on(TasksActions.getTask, state => {
    console.log('GET_TASK action being handled!');
    return {
      ...state,
      loading: true,
      loaded: false
    };
  }),

  on(TasksActions.getTaskSuccess, (state, { task }) => {
    console.log('GET_TASK action being handled!');
    const selectedTask = { ...task };
    return {
      ...state,
      loading: false,
      loaded: true,
      selectedTask
    };
  }),

  on(
    TasksActions.getTaskError,
    (state, { error }) => {
      console.log('GET_TASK_ERROR action being handled!');
      return {
        ...state,
        loading: false,
        loaded: false,
        error
      };
    }
  ),

  on(TasksActions.createTaskSuccess, (state, { task }) => {
    console.log('CREATE_TASK_SUCCESS action being handled!');
    const data = [...state.data, { ...task }];

    return {
      ...state,
      data
    };
  }),

  on(TasksActions.updateTaskSuccess, (state, { task }) => {
    console.log('UPDATE_TASK_SUCCESS action being handled!');
    const data = [...state.data];

    const index = data.findIndex(t => t.id === task.id);

    data[index] = { ...task };

    return {
      ...state,
      data
    };
  }),

  on(TasksActions.deleteTaskSuccess, (state, { task }) => {
    console.log('DELETE_TASK_SUCCESS action being handled!');
    const data = state.data.filter(t => t.id !== task.id);

    return {
      ...state,
      data
    };
  }),

  on(
    TasksActions.updateTaskError,
    TasksActions.createTaskError,
    TasksActions.deleteTaskError,
    (state, { error }) => {
    console.log('CREATE/UPDATE/DELETE_TASK_ERROR action being handled!');
    return {
      ...state,
      error
    };
  }),

);

export function tasksReducer(state: TasksState | undefined, action: Action) {
  return reducer(state, action);
}
