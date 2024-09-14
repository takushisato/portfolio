function SkillComponent() {
  return (
    <div className="my-16 max-w-screen-md mx-auto" id="skill">
      <h2 className="text-2xl text-center">スキル</h2>
      <p className="text-center">言語、フレームワーク、ツール等</p>
      <p className="text-center">経験のあるものを記載しております</p>
      <ul>
        <li className="my-2">HTML、CSS</li>
        <li className="my-2">CSS Framework（Tailwind）</li>
        <li className="my-2">Python（Django、Anaconda）</li>
        <li className="my-2">PHP（Laravel、WordPress）</li>
        <li className="my-2">
          UI Framework（Bootstrap4、Bootstrap5、daisy.UI、Vuetify3）
        </li>
        <li className="my-2">JavaScript（jQuery、Vue.js、Nuxt.js）</li>
        <li className="my-2">TypeScript</li>
        <li className="my-2">Docker</li>
        <li className="my-2">Git</li>
        <li className="my-2">Linux（Ubuntu）</li>
        <li className="my-2">SQL（MySQL、SQLite3）</li>
        <li className="my-2">AWS、Netlify、Render</li>
      </ul>
    </div>
  );
}

export default SkillComponent;
