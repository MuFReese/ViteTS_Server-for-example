
export function DataMainUser() {
  return (
    <section className="wrapUser">
      <img src="../public/zakat.jpg" alt="Фото профиля"/>
      <div className="wrapUserInfo">
        <h1>Mihail Kurnosov</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, dolorem minus! Quos dicta non dolorum sapiente, itaque consectetur nam. Optio rerum nobis, officia et fugiat reprehenderit quia cum ratione. Ea!</p>
        <div className="userSkils">
          <h2>Мои скилы</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>TypeScript</li>
          </ul>
        </div>
        <button id="contactMe">Contact me</button>
      </div>
    </section>
  )
}