import { taskUpdated } from "./actionTypes";
import { taskRemoving } from "./actionTypes";
export function taskReducer(state = [], action) {
  switch (action.type) {
    case taskUpdated: {
      const newArray = [...state];
      const elementIndex = newArray.findIndex(
        (el) => el.id === action.payload.id
      );
      newArray[elementIndex] = { ...newArray[elementIndex], ...action.payload };
      return newArray;
    }
    case taskRemoving: {
      const newArray = [...state];
      return newArray.filter((item) => item.id !== action.payload.id);
    }
    default:
      return state;
  }
}
