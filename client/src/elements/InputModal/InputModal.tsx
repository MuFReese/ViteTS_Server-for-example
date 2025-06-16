import './inputModal.css'

export default function InputModal({ label, valid, id,...rest}:InputProps) {


  return (
    <div className="wrapInputModal">
      <label className='labelModalForInput' htmlFor={id}>{label}</label>
      <input
        id={id} 
        className={`input-modal ${ valid ? '' : 'isValidInput'}`}
        {...rest}
      />
    </div>
  )
}