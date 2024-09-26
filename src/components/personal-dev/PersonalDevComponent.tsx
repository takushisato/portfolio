import { useState } from "react";
import { personalDevList } from "../../model/personal-dev-list";

function PersonalDevComponent() {
  // workExperienceIDをuseStateで管理
  const [workExperienceID, setWorkExperienceID] = useState<number | null>(null);

  // 行をクリックしたときにモーダルを表示
  const handleRowClick = (id: number) => {
    const modal = document.getElementById("my_modal_3");
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
      setWorkExperienceID(id);
    }
  };

  return (
    <div className="text-center my-16 max-w-screen-xl mx-auto" id="personalDev">
      <h2 className="text-2xl">個人開発</h2>
      <p>個人開発の一例です</p>
      <p>サーバで公開しているものは「公開URL」をクリックで閲覧できます</p>

      <div className="flex flex-wrap justify-center text-left">
        {personalDevList.map((item) => (
          <div
            key={item.id}
            className="w-full md:w-1/3 lg:w-1/5 bg-slate-300 p-4 rounded-md m-4 cursor-pointer hover:opacity-80"
            onClick={() => handleRowClick(item.id)}
          >
            <h3 className="font-bold">{item.title}</h3>
            <br />
            <p className="font-bold">使用技術</p>
            <p>{item.skill}</p>
          </div>
        ))}
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">詳細情報</h3>
          <div className="border-bottom-gray"></div>
          {workExperienceID !== null && (
            <>
              <p className="py-4 text-left border-bottom-gray">
                {personalDevList[workExperienceID - 1].description
                  .split("\n")
                  .map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
              </p>
              <br />
              <div className="text-left border-bottom-gray">
                <p className="">
                  <a
                    href={personalDevList[workExperienceID - 1].github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-accent min-w-40">
                      GitHubはこちら
                    </button>
                  </a>
                </p>
                <br />
                {personalDevList[workExperienceID - 1].URL && (
                  <p className="mb-8">
                    <a
                      href={personalDevList[workExperienceID - 1].URL}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="btn btn-secondary min-w-40">
                        公開URLはこちら
                      </button>
                    </a>
                  </p>
                )}
              </div>
            </>
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

export default PersonalDevComponent;
