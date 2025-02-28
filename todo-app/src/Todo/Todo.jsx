import React, { useEffect, useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList.jsx";
import TodoDate from "./TodoDate.jsx";
import {
  setLocalStorageTodoData,
  getLocalStorageTodoData,
} from "./TodoLocalStorage.jsx";

const Todo = () => {
  // const [task, setTask] = useState([]);
  const [task, setTask] = useState(() => getLocalStorageTodoData());

  const handleFormSubmit = (inputValue) => {
    // event.preventDefault();
    const { id, content, checked } = inputValue;
    // to check if the input field is empty or not
    if (!content) {
      return;
    }

    // to check if the data is already existing or not
    // if (task.includes(inputValue)) return;

    const ifTodoContentMatched = task.find(
      (currTask) => currTask.content === content
    );

    if (ifTodoContentMatched) return;

    setTask((prevTask) => [
      ...prevTask,
      { id: id, content: content, checked: checked },
    ]);
  };

  // add data to localStorage
  // localStorage.setItem(todoKey, JSON.stringify(task));
  setLocalStorageTodoData(task);

  // todo handleDeleteTodo functionality
  const handleDeleteTodo = (value) => {
    // console.log(value);
    const updatedTask = task.filter((currTask) => currTask.content !== value);
    setTask(updatedTask);
  };

  // todo hanldeClearTodoData functionality
  const hanldeClearTodoData = () => {
    setTask([]);
  };

  // todo handleCheckedTodo functionality
  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((currTask) => {
      if (currTask.content === content) {
        return { ...currTask, checked: !currTask.checked };
      } else {
        return currTask;
      }
    });

    setTask(updatedTask);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />
      <section className="myUnOrderList">
        <ul>
          {task.map((currTask) => {
            return (
              <TodoList
                data={currTask.content}
                key={currTask.id}
                checked={currTask.checked}
                onHandleDeleteTodo={handleDeleteTodo}
                onHandleCheckedTodo={handleCheckedTodo}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button
          style={{ color: "white", borderRadius: "20px", fontWeight: "600" }}
          className="clear-btn"
          onClick={hanldeClearTodoData}
        >
          Clear All
        </button>
      </section>
    </section>
  );
};

export default Todo;
