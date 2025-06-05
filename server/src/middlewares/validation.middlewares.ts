import { Request, Response, NextFunction } from 'express';
import { z } from 'zod'

const formSchema = z.object({
  email: z.string().email('Некорректный емаил'),
  // message: z.string().min(5, 'Сообщение должно содеражть минимум 5 символов')
})

export const validateForm = (req: Request, res: Response, next: NextFunction) => {
  try {
    formSchema.parse(req.body)
    next()
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        errors: error.errors.map( err => ({
          field: err.path[0],
          message: err.message
        }))
      })
    }
    res.status(500).json({error: 'ошибка валидации'})
  }
}