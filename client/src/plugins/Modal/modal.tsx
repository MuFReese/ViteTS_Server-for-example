import React, { useCallback, useState } from "react"
import { submitForm } from "../../components/server"
import './modal.css'
import ButtonModal from "../../elements/ButtonModal/ButtonModal"
import InputModal from "../../elements/InputModal/InputModal"

export function CreateModal ({ isOpen, onClose, width, title}: ModalProps) {
  const [validation, setValidation] = useState<ValidationState>({})

  const [ formData, setFormData ] = useState<FormDataModal>({
    email: '',
    message: ''
  })

  
  const [isClosing, setIsClosing] = useState<boolean>(false)

  const handleClose = useCallback( () => {
    setIsClosing(true)
    setTimeout( () => {
      setIsClosing(false)
      onClose()
    }, 200)
  }, [onClose])

  function validate(value:string, id:string) {
    const regExp: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    setValidation( prev => ({
      ...prev,
      [id === 'modal-email' ? 'email' : 'text']:
        id === 'modal-email' ? regExp.test(value) : value.length > 0
    }))
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target
    setFormData( prev => ({
      ...prev,
      [ id === 'modal-email' ? 'email' : 'message']: value
    })) 

    validate(value, id)

  }

  const handleOverlayClick = ( event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement
    if (target.dataset.close) {
      handleClose()
    }
  }

  const handleSubmit = async () => {
    try {
      await submitForm( formData.email, formData.message)
      setFormData({ email: '', message: ''})
      handleClose()
    } catch (error){
      if ( error instanceof Error) { 
        console.log('Ошибка ' + error.message)
      } else {
        console.log('Неизвестная ошибка: ' + error)
      }
    }
  }



  return (
    <div className={`modal ${ isOpen ? 'open' : ''} ${ isClosing ? 'hide' : ''}`}>

      <div className="modal-overlay" data-close="true" onClick={handleOverlayClick}>

        <div className="modal-window" style={{width: width || '600px'}}>
          <div className="modal-header">
            <h3>{title}</h3>
            <span className="modal-close" data-close="true">&times;</span>
          </div>
          <div className="modal-main">
            <InputModal 
              label="Text"
              required 
              type="text" 
              id="modal-text" 
              onChange={handleChange}
              valid={validation.text}
              value={formData.message}
            />
            <InputModal
              label="Email"
              required 
              type="email" 
              id="modal-email" 
              placeholder="Введите в формате name@example.com"
              onChange={handleChange} 
              valid={validation.email}
              value={formData.email}
            />
          </div>
          <div className="modal-footer">
            <ButtonModal 
              title="Send"
              data-close="true" 
              id="modal-btn"
              validForm={validation}
              onClick={handleSubmit}
            />
          </div>
        </div>

      </div>

    </div>
  )
}


