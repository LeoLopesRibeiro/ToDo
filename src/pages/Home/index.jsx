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
  const [task, setTask] = useState(JSON.parse(storage.takeTask())) // eslint-disable-line
  
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
        {task != null ? (
          task.map((data, id) => {

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
