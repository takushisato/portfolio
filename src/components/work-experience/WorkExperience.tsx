function PersonalDevComponent() {
  const personalDevList = [
    {
      id: 1,
      title: "塗料メーカーの業務システム",
      skill: "Django、Nuxt3、Vuetify3 他",
      timeFrame: "2023年11月〜2024年8月",
      description:
        "大手塗料メーカーの業務システムです。実験結果をエクセルで共有しているものを、システム化して社内で共有するためのシステムを開発しました。",
    },
    {
      id: 2,
      title: "高校の部活動支援システム",
      skill: "Django、daisy.UI 他",
      timeFrame: "2023年6月〜",
      description:
        "岩手県のある高校の部活動OB会から依頼されて制作していたシステム。現役選手の活動報告、部活動支援金として寄付金を集める機能をstripeの決済サービスを使用して実装しました。",
    },
    {
      id: 3,
      title: "C向け辞書アプリ",
      skill: "Django、Nuxt3、Vuetify3 他",
      timeFrame: "2023年4月〜2024年5月",
      description:
        "openAIのAPIを用いた辞書アプリ。ChatGPTライクなAIサービスを開発しました。",
    },
    {
      id: 4,
      title: "企業コーポレートサイト",
      skill: "Nuxt3、Vuetify3 他",
      timeFrame: "2023年1月〜2023年2月",
      description:
        "企業HP制作案件。Nuxt.jsの静的サイトジェネレーターを使用し、ホームページを制作しました。",
    },
  ];

  return (
    <div className="text-center my-16 max-w-screen-xl mx-auto">
      <h2 className="text-2xl">実務経歴</h2>
      <p>システム開発の実務経歴です</p>
      <p>直近のものを記載しています</p>

      <div className="flex flex-wrap justify-center text-left">
        {personalDevList.map((item) => (
          <div
            key={item.id}
            className="w-full md:w-1/3 lg:w-1/5 bg-slate-300 p-4 rounded-md m-4"
          >
            <h3>{item.title}</h3>
            <p className="font-bold">使用技術</p>
            <p>{item.skill}</p>
            <p className="font-bold">開発期間</p>
            <p>{item.timeFrame}</p>
            <p className="font-bold">詳細</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PersonalDevComponent;
