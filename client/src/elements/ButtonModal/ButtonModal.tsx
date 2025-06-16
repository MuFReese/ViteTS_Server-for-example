import './buttonModal.css'

export default function ButtonModal({title, validForm,...rest}:ButtonProps) {


  return (
    <button
      disabled={!(validForm?.email && validForm?.text)}
      className={`modal-btn  ${validForm?.email && validForm?.text ? '' : 'modal-btnIsNotValid'}`}
      {...rest}
    >
      {title}
    </button>
  )
}