"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateForm = void 0;
const zod_1 = require("zod");
const formSchema = zod_1.z.object({
    email: zod_1.z.string().email('Некорректный емаил'),
    // message: z.string().min(5, 'Сообщение должно содеражть минимум 5 символов')
});
const validateForm = (req, res, next) => {
    try {
        formSchema.parse(req.body);
        next();
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            return res.status(400).json({
                errors: error.errors.map(err => ({
                    field: err.path[0],
                    message: err.message
                }))
            });
        }
        res.status(500).json({ error: 'ошибка валидации' });
    }
};
exports.validateForm = validateForm;
