import { taskUpdated } from "./actionTypes";
import { taskRemoving } from "./actionTypes";
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

export function deleteChange(id) {
  return {
    type: taskRemoving,
    payload: { id: id },
  };
}
