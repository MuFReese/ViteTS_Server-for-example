import { modal } from "../plugins/modal"

export function contactMe() {

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

  
}