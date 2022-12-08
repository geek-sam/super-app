import React, { useState, useEffect  } from "react";
import ListPannel from "./pages/list-pannel/ListPannel.js";
import TaskPannel from "./pages/task-pannel/TaskPannel";
import NotSelected from "./components/NotSelected";
import "./Todo.css";
const storageAccessKey = "todos"
function Todo() {
  const [lists, setLists] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [selectedListIndex, setSelectedListIndex] = useState();

  useEffect(() => {
    if (lists.length > 0)
      localStorage.setItem(storageAccessKey, JSON.stringify(lists));
  }, [lists])

  useEffect(() => {
    // TODO handle the edge case
    setLists(JSON.parse(localStorage.getItem(storageAccessKey)));
  }, [])


  return (
    <div className="main-container">
      <ListPannel
        lists={lists}
        setLists={setLists}
        selectedListIndex={selectedListIndex}
        setSelectedListIndex={setSelectedListIndex}
      />
      {selectedListIndex == null ? (
        <NotSelected />
      ) : (
        <TaskPannel
          lists={lists}
          tasks={tasks}
          setLists={setLists}
          setTasks={setTasks}
          selectedListIndex={selectedListIndex}
        />
      )}
    </div>
  );
}

export default Todo;

// use of react useEffect Hook without using the dependency array
// use of react useEffect Hook using empty dependency array []
// use of react useEffect Hook with a dependency in dependency array [dependencyName]
