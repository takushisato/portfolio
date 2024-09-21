import { useState } from "react";
function PersonalDevComponent() {
  const personalDevList = [
    {
      id: 1,
      title: "ポートフォリオ",
      skill: "React、daisy.UI 他",
      description:
        "当ポートフォリオです。Reactを使用して作成しました。また、daisy.UIというUIフレームワークを使用してデザインを整えました。",
      URL: "https://takushisato.github.io/portfolio/",
      github: "https://github.com/takushisato/portfolio",
    },
    {
      id: 2,
      title: "AIを使用した釣りアプリ",
      skill: "Django、Nuxt3、Vuetify3 他",
      description:
        "openAIのAPIを用いた釣りアプリを個人開発中です。2024年8月現在まだ認証回りだけ作成してますが、今後は気象データなどを取り込んで釣りアプリとして作成していく予定です。",
      URL: "",
      github: "https://github.com/takushisato/ai-talk-app",
    },
    {
      id: 3,
      title: "釣り人向け 潮見表サイト",
      skill: "Nuxt2、TailwindCSS 他",
      description:
        "海上保安庁が公開しているAPIを利用して、潮の満ち引きをグラフで検索できる様にしたサービスを個人開発しました。",
      URL: "https://sio-michihiki.com/",
      github: "https://github.com/takushisato/michihiki-nuxt",
    },
    {
      id: 4,
      title: "ゲーム開発",
      skill: "RPGツクールMZ",
      description:
        "脱出系ゲーム「青鬼」を模したゲームを個人開発で制作しました。もしも、ローカルにプルして動かすという場合は音量に注意して下さい。",
      URL: "",
      github: "https://github.com/takushisato/futakobusan",
    },
  ];

  // historyIDをuseStateで管理
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
            <h3>{item.title}</h3>
            <br />
            {/* <p className="font-bold">リポジトリ</p>
            <p>
              <a
                href={item.github}
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-50"
              >
                GitHub
              </a>
            </p> */}
            <p className="font-bold">使用技術</p>
            <p>{item.skill}</p>
            {/* <p className="font-bold">詳細</p>
            <p>{item.description}</p>
            <br />
            {item.URL && (
              <a href={item.URL} target="_blank" rel="noreferrer">
                <button className="btn btn-secondary">公開URL</button>
              </a>
            )} */}
          </div>
        ))}
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">詳細情報</h3>
          {workExperienceID !== null && (
            <p className="py-4">
              {personalDevList[workExperienceID - 1].description}
            </p>
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
