import { useState } from "react";

function MyHistoryComponent() {
  const myHistory = [
    {
      id: 1,
      date: "1982年8月",
      content: "岩手県生まれ",
    },
    {
      id: 2,
      date: "2001年4月",
      content: "トステム株式会社（現在の株式会社LIXIL） 入社",
    },
    {
      id: 3,
      date: "2004年1月",
      content: "トステム株式会社を退社",
    },
    {
      id: 4,
      date: "2004年2月",
      content: "中小の金属加工会社に入社",
    },
    {
      id: 5,
      date: "2019年1月",
      content: "プログラミング学習開始",
    },
    {
      id: 6,
      date: "2019年10月",
      content: "同社を退社。また、個人でも仕事をするため屋号を取得",
    },
    {
      id: 7,
      date: "2020年2月頃",
      content: "コロナが世界的に蔓延する中、プログラミングの学習を続ける",
    },
    {
      id: 8,
      date: "2021年10月頃",
      content: "IT系の勉強会で知り合ったIT社長の元で修行を始める",
    },
    {
      id: 9,
      date: "2022年4月",
      content: "IT系のフリーランスとして独立",
    },
  ];

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
    <div className="my-16 mx-auto max-w-screen-md">
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
            {myHistory.map((history) => (
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
            <p className="py-4">{myHistory[historyID - 1].content}</p>
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
