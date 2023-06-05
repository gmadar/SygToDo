import { FC, useState } from "react";
import Select from "react-select";
import classes from "./Modal.module.css";
import { ToDo } from "../../interfaces/ToDo";
import { ToDoPriority } from "../../interfaces/ToDoPriority";
import { SingleValue } from "react-select/animated";
import Button from "../buttons/Button";

const options = [
  { value: ToDoPriority.HIGH, label: "High" },
  { value: ToDoPriority.MEDIUM, label: "Medium" },
  { value: ToDoPriority.LOW, label: "Low" },
];

interface ModalProps {
  closeModal: () => void;
  addTodo: (todo: ToDo) => void;
}

const Modal: FC<ModalProps> = ({ closeModal, addTodo }) => {
  const [priority, setPriority] = useState<ToDoPriority>(ToDoPriority.HIGH);
  const [text, setText] = useState<string>("");
  const handleChange = (newPriority: any) => setPriority(newPriority.value);

  return (
    <div className={classes.background}>
      <div className={classes.modal}>
        <div className={classes.header}>
          ADD TASK -
          <img className={classes.closeX} onClick={closeModal} src="/x.png" />
        </div>
        <div className={classes.content}>
          <label className={classes.label}>Add a task</label>
          <textarea
            className={classes.textarea}
            onChange={(e) => setText(e.target.value)}
            defaultValue={text}
          />
          <div>
            <label className={classes.label}>Priority</label>
            <Select
              value={priority}
              onChange={handleChange}
              options={options as any}
            />
          </div>
          <div>
            <Button
              onClick={() => {
                addTodo({
                  priority,
                  task: text,
                  createdAt: new Date(),
                  isCompleted: false,
                  id: Math.random(),
                });
                closeModal();
              }}
            >
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
