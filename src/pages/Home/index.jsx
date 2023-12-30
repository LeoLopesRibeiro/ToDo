import { useState } from "react";
import NewTask from "../../components/NewTaskCard";
import "./index.css";
import Modal from "../../components/ModalNewTask";
import { useStorage } from "../../hooks";
import TaskCard from "../../components/TaskCard";
export default function Home() {
  const storage = useStorage();
  const [modal, setModal] = useState(false);
  const [active, setActive] = useState("inactive");
  const task = storage.takeTask();

  let taskLines;
  if (task != null) {
    taskLines = task.split("#");
  }
  return (
    <div className="container-home">
      <Modal style={modal ? `slide-right ${active}` : `slide-left ${active}`} />
      <div className="responsive">
        <div
          className="click"
          onClick={() => {
            setModal(!modal), setActive("active");
          }}
        >
          <NewTask />
        </div>
        {taskLines != null ? (
          taskLines.map((data, id) => {
            return (
              <div key={id}>
                <TaskCard data={data} />
              </div>
            );
          })
        ) : (
          null
        )}
      </div>
    </div>
  );
}
