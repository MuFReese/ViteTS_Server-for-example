
import { useState } from "react"
import { CreateModal } from "../../plugins/Modal/modal"
import ButtonMain from "../../elements/ButtonMain/ButtonMain"
import './style.css'

export default function DataMainUser() {
  const [ isModalOpen, setModalOpen] = useState<boolean>(false)


  return (
    
    <section className="wrapUser">
      <img src="../public/zakat.jpg" alt="Фото профиля"/>
      <div className="wrapUserInfo">
        {/* <h1>Mihail Kurnosov</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, dolorem minus! Quos dicta non dolorum sapiente, itaque consectetur nam. Optio rerum nobis, officia et fugiat reprehenderit quia cum ratione. Ea!</p>
        <div className="userSkils">
          <h2>Мои скилы</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>TypeScript</li>
          </ul>
        </div> */}
        <ButtonMain bold={true} title="Contact me" onClick={() => setModalOpen(true)}/>
        <CreateModal
          title="Форма"
          width="500px"
          isOpen={isModalOpen}
          onClose={ () => setModalOpen(false)}
        />
      </div>
    </section>
  )
}