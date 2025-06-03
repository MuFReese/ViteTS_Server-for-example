export async function submitForm(email: string, message: string): Promise<void> {
  console.log(email, message)
  try {
    const response = await fetch('http://localhost:3001/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, message }),
    });
    
    const data = await response.json();
    console.log('Ответ сервера:', data);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.errors?.[0]?.message || 'Ошибка отправки');
    }

  } catch (error) {
    console.error('Ошибка:', error)
    console.log(email, message)
    throw error
  }
}