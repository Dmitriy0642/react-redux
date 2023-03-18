import { taskUpdated } from "./actionTypes";

export function taskCompleted(id) {
  return {
    type: taskUpdated,
    payload: { id: id, complited: true },
  };
}
export function titleChanged(id) {
  return {
    type: taskUpdated,
    payload: { id: id, title: `New title for ${id}` },
  };
}
