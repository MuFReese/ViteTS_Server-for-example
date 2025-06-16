interface IOptions {
  title: string
  width: string
}


interface IValidationInput {
  inputModal: HTMLSelectElement
  functionInputIsValid?: (value: string) => boolean
  btnWithModal: HTMLSelectElement
}

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children?: React.ReactNode
  width?: string
  title?: string
}

interface FormDataModal{
  email: string
  message: string
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  title: string
  bold?: boolean
  validForm?: ValidationState
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label:string
  validation?: () => void
  valid?: boolean
}

interface ValidationState{
  email?: boolean
  text?: boolean
}