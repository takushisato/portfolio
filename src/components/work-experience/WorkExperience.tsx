import { useState } from "react";
import { workExperienceList } from "../../model/work-experience-list";
function WorkExperienceComponent() {
  const [workExperienceID, setWorkExperienceID] = useState<number | null>(null);

  // 行をクリックしたときにモーダルを表示
  const handleRowClick = (id: number) => {
    const modal = document.getElementById("my_modal_2");
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
      setWorkExperienceID(id);
    }
  };

  return (
    <div
      className="text-center my-16 max-w-screen-xl mx-auto"
      id="workExperience"
    >
      <h2 className="text-2xl">実務経歴</h2>
      <p>システム開発の実務経歴です</p>
      <p>直近のものを記載しています</p>

      <div className="flex flex-wrap justify-center text-left">
        {workExperienceList.map((item) => (
          <div
            key={item.id}
            className="w-full md:w-1/3 lg:w-1/5 bg-slate-300 p-4 rounded-md m-4 cursor-pointer hover:opacity-80"
            onClick={() => handleRowClick(item.id)}
          >
            <h3>{item.title}</h3>
            <br />
            <p className="font-bold">使用技術</p>
            <p>{item.sub_title}</p>
            <p className="font-bold">就業期間</p>
            <p>{item.timeFrame}</p>
          </div>
        ))}
      </div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          {workExperienceID !== null && (
            <h2 className="text-lg">
              {workExperienceList[workExperienceID - 1].title}
            </h2>
          )}
          <br />
          <div className="flex border-bottom-gray">
            <p className="font-bold">参加時期：</p>
            {workExperienceID !== null && (
              <p className="ml-2">
                {workExperienceList[workExperienceID - 1].timeFrame}
              </p>
            )}
          </div>
          <br />
          <div className="flex border-bottom-gray">
            <p className="font-bold">ポジション：</p>
            {workExperienceID !== null && (
              <p className="ml-2">
                {workExperienceList[workExperienceID - 1].position}
              </p>
            )}
          </div>
          <br />
          <div className="flex border-bottom-gray">
            <p className="font-bold">参画人数：</p>
            {workExperienceID !== null && (
              <p className="ml-2">
                {workExperienceList[workExperienceID - 1].member_count}
              </p>
            )}
          </div>
          <br />
          <div className="text-left border-bottom-gray">
            <p className="font-bold">詳細説明：</p>
            {workExperienceID !== null && (
              <p className="ml-2">
                {workExperienceList[workExperienceID - 1].detail
                  .split("\n")
                  .map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
              </p>
            )}
          </div>
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

export default WorkExperienceComponent;
