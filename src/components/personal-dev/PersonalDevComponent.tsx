function PersonalDevComponent() {
  const personalDevList = [
    {
      id: 1,
      title: "ポートフォリオ",
      skill: "React、daisy.UI 他",
      description:
        "当ポートフォリオです。Reactを使用して作成しました。また、daisy.UIというUIフレームワークを使用してデザインを整えました。",
      URL: "",
      github: "https://takushisato.github.io/portfolio/",
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
  return (
    <div className="text-center my-16 max-w-screen-xl mx-auto">
      <h2 className="text-2xl">個人開発</h2>
      <p>個人開発の一例です</p>

      <div className="flex flex-wrap justify-center  text-left">
        {personalDevList.map((item) => (
          <div
            key={item.id}
            className="w-full md:w-1/3 lg:w-1/5 bg-slate-300 p-4 rounded-md m-4"
          >
            <h3>{item.title}</h3>
            <p className="font-bold">リポジトリ</p>
            <p>
              <a
                href={item.github}
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-50"
              >
                GitHub
              </a>
            </p>
            <p className="font-bold">使用技術</p>
            <p>{item.skill}</p>
            <p className="font-bold">詳細</p>
            <p>{item.description}</p>
            <a
              href={item.URL}
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-50"
            >
              {item.URL}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PersonalDevComponent;
