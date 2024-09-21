import { useState } from "react";
import { myHistoryList } from "../../model/my-history-list";

function MyHistoryComponent() {
  // historyIDをuseStateで管理
  const [historyID, setHistoryID] = useState<number | null>(null);

  // 行をクリックしたときにモーダルを表示
  const handleRowClick = (id: number) => {
    const modal = document.getElementById("my_modal_1");
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
      setHistoryID(id);
    }
  };

  return (
    <div className="my-16 mx-auto max-w-screen-md" id="myHistory">
      <h2 className="text-2xl text-center">経歴</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>日付</th>
              <th>概要</th>
            </tr>
          </thead>
          <tbody>
            {myHistoryList.map((history) => (
              <tr
                key={history.id}
                onClick={() => handleRowClick(history.id)}
                className="hover:opacity-50 cursor-pointer"
              >
                <td>{history.date}</td>
                <td>{history.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">詳細情報</h3>
          {historyID !== null && (
            <p className="py-4">{myHistoryList[historyID - 1].content}</p>
          )}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default MyHistoryComponent;
