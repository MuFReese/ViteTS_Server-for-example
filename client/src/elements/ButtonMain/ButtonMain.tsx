import './buttomMain.css'


export default function ButtonMain({ title, bold,...rest}: ButtonProps) {
  
  return(
    <button
      className={`buttonMain ${bold ? 'bold' : ''}`}
      {...rest}
    >
      {title}
    </button>
  )
}