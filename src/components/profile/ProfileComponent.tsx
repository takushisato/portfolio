import myImage from "../../assets/image/profile.jpeg";

function ProfileComponent() {
  return (
    <div className="my-16">
      <h2 className="text-2xl">自己紹介</h2>
      <div className="avatar">
        <div className="w-32 rounded-full">
          <img src={myImage} alt="My Image" className="" />
        </div>
      </div>

      <p>
        takushisatoと申します。 宮城県北部在住です。
        普段は個人でWeb系のお仕事を請け負っています。
        主にPython（Django）、VueやNuxtが多いです。
        趣味は釣り（オフショアジギング、ライトヒラメ、カレイ等）とゲーム（ゲーミングPC、PS5、ニンテンドースイッチ所有）で、開発の合間に没頭しています。
      </p>
    </div>
  );
}

export default ProfileComponent;
