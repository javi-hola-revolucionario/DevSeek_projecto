import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

function History() {
  const { history = [] } = useContext(ChatContext);

  return (
    <div className="border p-4 rounded-lg mb-4">
      <h2 className="font-bold mb-2">
        Historial
      </h2>

      {history.length === 0 ? (
        <p>No hay consultas.</p>
      ) : (
        <ul>
          {history.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default History;