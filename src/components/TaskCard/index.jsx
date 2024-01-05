import { FaClipboardList } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./index.css";
export default function TaskCard(data) {
  const navigate = useNavigate();
  const task = data.data;

  function navigation() {
    navigate("/lista", {
        state: data,
      });
  }
  return (
    <div
      onClick={navigation}
      className="container-task"
      style={{ backgroundColor: `#${task.cor}` }}
    >
      <div className="align">
        <div className="container-round">
          <FaClipboardList color="black" size={30} />
        </div>
      </div>
      <div className="container-down">
        <p id="nova">{task.nome}</p>
      </div>
    </div>
  );
}
