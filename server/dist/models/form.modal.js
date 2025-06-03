"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveFormData = void 0;
const db_1 = __importDefault(require("../db"));
const saveFormData = async (data) => {
    const qeury = `
    INSERT INTO person (email, messag)
    VALUES ($1, $2)
    RETURNING *;
  `;
    const values = [data.email, data.message];
    const result = await db_1.default.query(qeury, values);
    return result.rows[0];
};
exports.saveFormData = saveFormData;
