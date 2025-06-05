interface IOptions {
  title: string
  width: string
}

interface IModal {
  open: () => void
  close: () => void
}

interface IValidationInput {
  inputModal: HTMLSelectElement
  functionInputIsValid?: (value: string) => boolean
  btnWithModal: HTMLSelectElement
}

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

type Component = (options: IOptions) => HTMLElement
type ErrorHandler = (error: Error) => HTMLElement

