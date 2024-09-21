function SkillComponent() {
  return (
    <div className="my-16 max-w-screen-md mx-auto" id="skill">
      <h2 className="text-2xl text-center">スキル</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>分野</th>
              <th>言語、フレームワーク、ツール等</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>フロントエンド</td>
              <td>HTML、CSS</td>
            </tr>
            <tr>
              <td></td>
              <td>CSS Framework（Tailwind）</td>
            </tr>
            <tr>
              <td></td>
              <td>
                UI Framework（Bootstrap4、Bootstrap5、daisy.UI、Vuetify3）
              </td>
            </tr>
            <tr>
              <td></td>
              <td>TypeScript、JavaScript（jQuery、Vue.js、Nuxt.js）</td>
            </tr>
            <tr>
              <td>バックエンド</td>
              <td>Python（Django、Anaconda）</td>
            </tr>
            <tr>
              <td></td>
              <td>PHP（Laravel、WordPress）</td>
            </tr>
            <tr>
              <td></td>
              <td>DB（MySQL、SQLite3、PostgreSQL）</td>
            </tr>
            <tr>
              <td>インフラ・ツール等</td>
              <td>Docker、Git、AWS、Netlify、Render</td>
            </tr>
            <tr>
              <td>OS</td>
              <td>mac、Windows、Linux（Ubuntu）</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SkillComponent;
