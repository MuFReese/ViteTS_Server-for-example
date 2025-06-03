import { submitForm } from "../server"

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

  // btnModal.onclick = () => {
    // inputModalEmail.value = ''
    // inputModalEmail.style.borderColor = 'black'

    // inputModalMessage.value = ''
    // inputModalMessage.style.borderColor = 'black'

  // }

}




function createModal (options: IOptions) {
  const modal: HTMLDivElement = document.createElement('div')
  modal.classList.add('modal')
  modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay" data-close="true">
      <div class="modal-window" style="width: ${options.width || '600px'}">
        <div class="modal-header">
          <h3>${options.title}</h3>
          <span class="modal-close" data-close="true">&times;</span>
        </div>
        <div class="modal-main">
          <label for="modal-text">Имя: </label><input required type="text" id="modal-text">
          <label for="modal-email">Емеил: </label><input required type="email" id="modal-email" placeholder="Введите в формате name@example.com">
        </div>
        <div class="modal-footer">
          <button data-close="true" class="modal-btn" id="modal-btn">Отправить</button>
        </div>
      </div>
    </div>
  `)

  document.body.appendChild(modal)

  return modal
}


export function modal(options: IOptions)  {
  const vmodal: HTMLDivElement = createModal(options)
  const modalBtn = document.querySelector('#modal-btn') as HTMLButtonElement
  const inputModalEmail = document.querySelector('#modal-email') as HTMLSelectElement
  const inputModalMessage = document.querySelector('#modal-text') as HTMLSelectElement

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
      // Очистка после успешной отправки
      inputModalEmail.value = ''
      inputModalEmail.style.borderColor = 'black'

      inputModalMessage.value = ''
      inputModalMessage.style.borderColor = 'black'

      modal.close()
    } catch (error: any) {
      alert('Ошибка отправки: ' + error.message)
    }
  }

  return modal
}


