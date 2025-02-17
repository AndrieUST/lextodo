import { Task } from "../Task";
import styles from "./tasks.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";
import { Dialog } from "@base-ui-components/react/dialog";

export function Header({ handleAddTask, tasks, onDelete, onComplete }) {
  const [title, setTitle] = useState("");
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  function handleSubmit(event) {
    event.preventDefault();

    handleAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <>
      <section className={styles.tasks}>
        <header className={styles.header}>
          <div>
            <p>Tasks</p>
            <span>{tasksQuantity}</span>
          </div>
          <Dialog.Root>
            <Dialog.Trigger className={styles.createTaskBtn}>
              Create Task
            </Dialog.Trigger>
            <Dialog.Portal keepMounted>
              <Dialog.Backdrop className={styles.Backdrop} />
              <Dialog.Popup className={styles.Popup}>
                <Dialog.Title className={styles.Title}>
                  Create new task.
                </Dialog.Title>
                <Dialog.Description className={styles.Description}>
                  <form onSubmit={handleSubmit} className={styles.newTaskForm}>
                    <input
                      placeholder="Add a new task"
                      type="text"
                      onChange={onChangeTitle}
                      value={title}
                    />
                    <Dialog.Close>
                      <button>
                        Create <AiOutlinePlusCircle size={20} />
                      </button>
                    </Dialog.Close>
                  </form>
                </Dialog.Description>
                <div className={styles.Actions}>
                  <Dialog.Close className={styles.closeBtn}>Close</Dialog.Close>
                </div>
              </Dialog.Popup>
            </Dialog.Portal>
          </Dialog.Root>
        </header>

        <div className={styles.list}>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={onDelete}
              onComplete={onComplete}
            />
          ))}
        </div>
      </section>
    </>
  );
}
