import styles from "./task.module.css";
import { TbTrash } from "react-icons/tb";
import { Dialog } from "@base-ui-components/react/dialog";

export function Task({ task, onDelete }) {
  return (
    <div className={styles.task}>
      <p>{task.title}</p>

      <Dialog.Root>
        <Dialog.Trigger className={styles.deleteButton}>
          <TbTrash size={20} />
        </Dialog.Trigger>
        <Dialog.Portal keepMounted>
          <Dialog.Backdrop className={styles.Backdrop} />
          <Dialog.Popup className={styles.Popup}>
            <Dialog.Title className={styles.Title}>Delete task.</Dialog.Title>
            <Dialog.Description className={styles.Description}>
              Are you sure you want to delete this task?
            </Dialog.Description>
            <div className={styles.Actions}>
              <Dialog.Close
                className={styles.yesBtn}
                onClick={() => onDelete(task.id)}
              >
                Yes
              </Dialog.Close>
              <Dialog.Close
                className={styles.noBtn}
              >
                No
              </Dialog.Close>
            </div>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
