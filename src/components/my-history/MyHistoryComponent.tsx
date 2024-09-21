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
    <div className="max-w-screen-lg mx-auto">
      <div className="my-16" id="myHistory">
        <h2 className="text-2xl text-center">経歴</h2>
        <ul className="timeline timeline-vertical">
          {myHistoryList.map((history) => (
            <li key={history.id}>
              <div className="timeline-start">{history.date}</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className="timeline-end timeline-box hover:opacity-50 cursor-pointer"
                key={history.id}
                onClick={() => handleRowClick(history.id)}
              >
                {history.content}
              </div>
              <hr />
            </li>
          ))}
        </ul>
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
    </div>
  );
}

export default MyHistoryComponent;
