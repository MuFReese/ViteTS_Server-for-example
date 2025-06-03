import { Request, Response } from 'express'
import { saveFormData } from '../models/form.modal'

export const submitForm = async (req: Request, res: Response) => {
  try {
    const formData = await req.body
    const result = await saveFormData(formData)
    res.status(201).json(result)
  } catch (error) {
    
  }

}