function SiteHistoryComponent() {
  return (
    <div className="max-w-screen-sm mx-auto text-center my-16" id="siteHistory">
      <h2 className="text-2xl">更新履歴</h2>
      <div className="h-24 overflow-x-auto">
        <table className="table table-pin-rows">
          <tbody>
            <tr>
              <td>
                <span className="font-bold">2024/9/30</span>{" "}
                <span className="mx-8"></span>スムーススクロールを追加しました。
              </td>
            </tr>
            <tr>
              <td>
                <span className="font-bold">2024/9/15</span>{" "}
                <span className="mx-8"></span> 経歴、個人開発を修正しました。
              </td>
            </tr>
            <tr>
              <td>
                <span className="font-bold">2024/9/01</span>{" "}
                <span className="mx-8"></span> 新規公開しました。
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SiteHistoryComponent;
