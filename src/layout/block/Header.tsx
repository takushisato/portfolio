import { useEffect } from "react";

const Header = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // smooth scroll
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // ページ読み込み時にページトップに戻す
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // ページが完全にロードされてから位置をリセットさせるため、100msの遅延を追加
  }, []);

  return (
    <header>
      <div className="navbar bg-gray-100 border-b-2 border-gray-200">
        <div className="max-w-screen-md m-auto container text-left">
          <div className="flex-1">
            <a href="/" className="btn btn-ghost normal-case text-xl">
              TOP
            </a>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label className="m-1">
                <button className="btn btn-square btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-5 h-5 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </label>
              <ul className="dropdown-content z-[1] menu p-2 shadow bg-gray-300 rounded-box w-52">
                <li className="font-bold my-2">
                  <button onClick={() => handleScroll("profile")}>
                    自己紹介
                  </button>
                </li>
                <li className="font-bold my-2">
                  <button onClick={() => handleScroll("myHistory")}>
                    経歴
                  </button>
                </li>
                <li className="font-bold my-2">
                  <button onClick={() => handleScroll("skill")}>スキル</button>
                </li>
                <li className="font-bold my-2">
                  <button onClick={() => handleScroll("workExperience")}>
                    実務経歴
                  </button>
                </li>
                <li className="font-bold my-2">
                  <button onClick={() => handleScroll("personalDev")}>
                    個人開発
                  </button>
                </li>
                <li className="font-bold my-2">
                  <button onClick={() => handleScroll("siteHistory")}>
                    更新情報
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
