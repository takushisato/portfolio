const Header = () => {
  return (
    <header>
      <div className="navbar bg-gray-100 border-b-2 border-gray-200">
        <div className="max-w-screen-md m-auto container">
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </label>
              <ul className="dropdown-content z-[1] menu p-2 shadow bg-gray-300 rounded-box w-52">
                <li className="font-bold my-2">
                  <a href="/">自己紹介</a>
                </li>
                <li className="font-bold my-2">
                  <a href="/">経歴</a>
                </li>
                <li className="font-bold my-2">
                  <a href="/">スキル</a>
                </li>
                <li className="font-bold my-2">
                  <a href="/">個人開発</a>
                </li>
                <li className="font-bold my-2">
                  <a href="/">更新情報</a>
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
