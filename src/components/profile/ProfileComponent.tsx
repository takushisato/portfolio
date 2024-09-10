import myImage from "../../assets/image/profile.jpeg";

function ProfileComponent() {
  return (
    <div className="my-16 text-center">
      <h2 className="text-2xl">自己紹介</h2>
      <div className="avatar my-4">
        <div className="w-32 rounded-full">
          <img src={myImage} alt="My Image" className="" />
        </div>
      </div>
      <p>宮城県北部在住の「たくちゃん」と申します。</p>
      <p>普段は個人でWeb系のお仕事を請け負っています。</p>
      <p> 主にPython（Django）、VueやNuxtが多いです。</p>
      <div className="text-left inline-block mt-16">
        <h3 className="text-xl">趣味など・・・</h3>
        <p>釣り・・・オフショアジギング、ライトヒラメ、カレイ等の船釣り全般</p>
        <p>
          ゲーム・・・ゲーミングPC、PS5、ニンテンドースイッチ所有してます。ジャンルはエーペックスなどのFPS、モンハンなどのPvE、パーティゲームなど様々やります。
        </p>
        <p>いずれも開発の合間に没頭しています✌</p>
      </div>
    </div>
  );
}

export default ProfileComponent;
