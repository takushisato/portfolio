function MyHistoryCOmponent() {
  const myHistory = [
    {
      date: "1982年8月",
      content: "岩手県生まれ",
    },
    {
      date: "2001年3月",
      content: "岩手県立一関工業高校 電気科卒業",
    },
    {
      date: "2001年4月",
      content: "トステム株式会社 入社",
    },
    {
      date: "2004年1月",
      content: "トステム株式会社を退社",
    },
    {
      date: "2004年2月",
      content: "中小の金属加工会社に入社",
    },
    {
      date: "2019年1月",
      content: "プログラミング学習開始",
    },
    {
      date: "2019年10月",
      content: "同社を退社。また、個人でも仕事をするため屋号を取得",
    },
    {
      date: "2020年2月頃",
      content:
        "コロナが世界的に蔓延。リモートワークが注目され、ITエンジニア志望者が急増し業界に新人が飽和する。そして仕事が取りにくくなったため知り合いの工場でバイトなどを行いながらプログラミングの学習を続ける",
    },
    {
      date: "2021年10月頃",
      content: "IT系の勉強会で知り合ったIT社長の元で修行を始める",
    },
    {
      date: "2022年4月",
      content: "IT系のフリーランスとして完全に独立",
    },
  ];
  return (
    <div>
      <h2 className="text-2xl">経歴</h2>
      <p>私の経歴です</p>
      <ul>
        {myHistory.map((history, index) => (
          <li key={index}>
            <span>{history.date}</span>
            <span>{history.content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyHistoryCOmponent;
