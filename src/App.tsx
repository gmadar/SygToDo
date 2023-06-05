import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Avatar from "./components/Avatar";
import GlobalTasksStatus from "./components/GlobalTasksStatus";
import Logo from "./components/Logo";
import Title from "./components/Title";
import Button from "./components/buttons/Button";
import { ToDo } from "./interfaces/ToDo";
import Modal from "./components/Modal";
import { ToDoPriority } from "./interfaces/ToDoPriority";

function App() {
  const [todos, setTodos] = useState<Array<ToDo>>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const todosStatus = todos.reduce(
    (acc, todo) => {
      if (todo.priority === ToDoPriority.HIGH) {
        acc.high++;
      } else if (todo.priority === ToDoPriority.MEDIUM) {
        acc.medium++;
      } else {
        acc.low++;
      }
      return acc;
    },
    { low: 0, medium: 0, high: 0 }
  );

  return (
    <>
      <Header>
        <Logo />
        <GlobalTasksStatus {...todosStatus} />
        <Avatar name="hertzel" />
      </Header>
      <div>
        <Title>
          TO DO LIST
          <Button onClick={() => setShowModal(true)}>+ Add task</Button>
          {/* <ToggleButtons /> */}
        </Title>
        <table>
          <thead>
            <tr>
              <th>Task name</th>
              <th>Created at</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={todo.id}>
                <td
                  onClick={() => {
                    setTodos((todos) => {
                      const updatedTodos = [...todos];
                      updatedTodos[index].isCompleted =
                        !updatedTodos[index].isCompleted;
                      return updatedTodos;
                    });
                  }}
                >
                  <td
                    onClick={() => {
                      setTodos((todos) => {
                        const updatedTodos = [...todos];
                        console.log(
                          "before update",
                          index,
                          updatedTodos[index].isCompleted
                        );
                        updatedTodos[index].isCompleted =
                          !updatedTodos[index].isCompleted;
                        console.log(
                          "after update",
                          index,
                          updatedTodos[index].isCompleted
                        );
                        return updatedTodos;
                      });
                    }}
                    style={{
                      textDecoration: todo.isCompleted
                        ? "line-through"
                        : "none",
                    }}
                  >
                    {todo.task}
                  </td>
                </td>
                <td>{todo.createdAt.toLocaleDateString()}</td>
                <td>{todo.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && (
        <Modal
          addTodo={(todo) => {
            setTodos((todos) => [todo, ...todos]);
          }}
          closeModal={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default App;
