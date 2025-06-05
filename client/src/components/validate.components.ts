
export function validateComponent(component:Component, errorHandler: ErrorHandler): Component {

  return (options:IOptions) => {
    try {
      return component(options)
    } catch (error) {
      console.error('Ошибка', error)
      return errorHandler( error instanceof Error ? error : new Error(String(error)))
    }
  }
} 

export const errorFallBack = (error:Error) => {
  const div: HTMLDivElement = document.createElement('div')
  div.style.color = 'red'
  div.textContent = `Error: ${error.message}`
  return div
}
