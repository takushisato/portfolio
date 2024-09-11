import myImage from "../../assets/image/profile.jpeg";
import github from "../../assets/image/github.png";
import twitter from "../../assets/image/twitter.png";
import facebook from "../../assets/image/facebook.png";

function ProfileComponent() {
  return (
    <div className="my-16 text-center max-w-screen-md mx-auto">
      <h2 className="text-2xl">自己紹介</h2>
      <div className="avatar my-4">
        <div className="w-32 rounded-full">
          <img src={myImage} alt="My Image" className="" />
        </div>
      </div>
      <p>宮城県北部在住の「たくちゃん」と申します。</p>
      <p>普段は個人でWeb系のお仕事を請け負っています。</p>
      <p> 主にPython（Django）、VueやNuxtが多いです。</p>
      <div className="flex my-12 icon-aria  mx-auto">
        <a
          href="https://github.com/takushisato"
          className="w-12 mx-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github icon" className="hover:opacity-50" />
        </a>
        <a
          href="https://x.com/4CKwk9kTXBo3Cuz"
          className="w-12 mx-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="twitter icon" className="hover:opacity-50" />
        </a>
        <a
          href="https://www.facebook.com/taku820801/"
          className="w-12 mx-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={facebook}
            alt="facebook icon"
            className="hover:opacity-50"
          />
        </a>
      </div>
      <div className="text-left inline-block">
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
