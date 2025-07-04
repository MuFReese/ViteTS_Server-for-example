import pool from "../db";
import { IFormData } from "@/types";


export const saveFormData = async (data: IFormData) => {
  const qeury = `
    INSERT INTO person (email, messag)
    VALUES ($1, $2)
    RETURNING *;
  `

  const values = [data.email, data.message]
  const result = await pool.query(qeury, values)
  return result.rows[0]
}