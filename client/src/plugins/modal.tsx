import { useEffect } from "react"
import { submitForm } from "../server"

export function CreateModal (options: IOptions) {

  useEffect( () => {
    const vmodal = document.querySelector<HTMLElement>('#modal')
    const modalBtn = document.querySelector<HTMLButtonElement>('#modal-btn')
    const inputModalEmail = document.querySelector<HTMLSelectElement>('#modal-email') 
    const inputModalMessage = document.querySelector<HTMLSelectElement>('#modal-text')

    const modal: IModal = {
      open() {
        vmodal.classList.add('open')
      },
      close() {
        vmodal.classList.remove('open')
        vmodal.classList.add('hide')
        setTimeout(() => {
          vmodal.classList.remove('hide')
        }, 200)
      }
    }

    const listenerClose = (event: Event) => {
      const getDataset = event.target as HTMLElement
      if (getDataset.dataset.close) {
        modal.close()
      }
    }

    vmodal.addEventListener( 'click', listenerClose)

    
    eventsWithModal()
    modalBtn.onclick = async () => {
      try {
        await submitForm(inputModalEmail.value, inputModalMessage.value);
        
        inputModalEmail.value = ''
        inputModalEmail.style.borderColor = 'black'

        inputModalMessage.value = ''
        inputModalMessage.style.borderColor = 'black'

        modal.close()
      } catch (error) {
        if (error instanceof Error) {
          alert('Ошибка отправки: ' + error.message)
        } else {
          console.log('неизвестная ошибка', error)
        }
      }
    }

  })
  
  return (
    <div className="modal">

      <div className="modal-overlay" data-close="true">

        <div className="modal-window" style={{width: options.width || '600px'}}>
          <div className="modal-header">
            <h3>{options.title}</h3>
            <span className="modal-close" data-close="true">&times;</span>
          </div>
          <div className="modal-main">
            <label htmlFor="modal-text">Имя: </label><input required type="text" id="modal-text" />
            <label htmlFor="modal-email">Емеил: </label><input required type="email" id="modal-email" placeholder="Введите в формате name@example.com" />
          </div>
          <div className="modal-footer">
            <button data-close="true" className="modal-btn" id="modal-btn">Отправить</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export function Modal(options: IOptions) {

}



/**
 * 
 * @Это все необходимо переписать для элемента <input />
 */
function validationInput({inputModal, functionInputIsValid, btnWithModal}: IValidationInput):void {
  if(functionInputIsValid) {
    if (functionInputIsValid(inputModal.value)) {
      inputModal.style.borderColor = 'green'
      btnWithModal.removeAttribute('disabled',)
    } else {
      inputModal.style.borderColor = 'red'
      btnWithModal.setAttribute('disabled','')
    }
  } else {
    if (inputModal.value.length === 0) {
      inputModal.style.borderColor = 'red'
      btnWithModal.setAttribute('disabled','')
    } else {
      inputModal.style.borderColor = 'green'
      btnWithModal.removeAttribute('disabled',)
    }
  }
}

function eventsWithModal() {

  const EMAIL_REGEXP: RegExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
  const inputModalEmail = document.querySelector('#modal-email') as HTMLSelectElement
  const inputModalMessage = document.querySelector('#modal-text') as HTMLSelectElement
  const btnModal = document.querySelector('#modal-btn') as HTMLSelectElement


  inputModalEmail.addEventListener('input', () => {
    validationInput({
      inputModal: inputModalEmail,
      functionInputIsValid: isEmailValid,
      btnWithModal: btnModal
    })
  })

  inputModalMessage.addEventListener('input', () => {
    validationInput({
      inputModal: inputModalMessage,
      btnWithModal: btnModal
    })
  })


  function isEmailValid(value: string) {
    return EMAIL_REGEXP.test(value)
  }

}