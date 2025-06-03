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