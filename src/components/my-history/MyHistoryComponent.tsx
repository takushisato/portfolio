import { myHistoryList } from "../../model/my-history-list";

function MyHistoryComponent() {
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
                className="timeline-end timeline-box text-left"
                key={history.id}
              >
                {history.content.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </div>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyHistoryComponent;
