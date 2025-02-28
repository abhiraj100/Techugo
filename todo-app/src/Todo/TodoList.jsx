import React from "react";
import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const TodoList = ({
  data,
  onHandleDeleteTodo,
  onHandleCheckedTodo,
  checked,
}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}>
        <MdCheck />
      </button>
      <button
        className="delete-btn"
        onClick={() => onHandleDeleteTodo(data)} // call me back
      >
        <MdDeleteForever />
      </button>
    </li>
  );
};

export default TodoList;
