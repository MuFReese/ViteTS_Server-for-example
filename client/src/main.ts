import { modal } from './plugins/modal'
import './style/modal.css'
import './style/normalize.css'
import './style/style.css'
import { submitForm } from './server'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <section class="wrapUser">
    <img src="../public/zakat.jpg" alt="Фото профиля">
    <div class="wrapUserInfo">
      <button id="contactMe">Contact me</button>
    </div>
  </section>
`
const btnContactme = document.querySelector('#contactMe') as HTMLButtonElement 
  

if(!btnContactme) {
  throw new Error('Element not found')
}

const contactMe = modal({
  title: 'Связаться со мной',
  width: '500px',
})


btnContactme.onclick = () => {
  contactMe.open()
}




















/**
 * 
*         <h1>Mihail Kurnosov</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, dolorem minus! Quos dicta non dolorum sapiente, itaque consectetur nam. Optio rerum nobis, officia et fugiat reprehenderit quia cum ratione. Ea!</p>
      <div class="userSkils">
        <h2>Мои скилы</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>TypeScript</li>
        </ul>
      </div>
 */