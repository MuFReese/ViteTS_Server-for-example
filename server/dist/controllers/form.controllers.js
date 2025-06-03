"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitForm = void 0;
const form_modal_1 = require("../models/form.modal");
const submitForm = async (req, res) => {
    try {
        const formData = await req.body;
        const result = await (0, form_modal_1.saveFormData)(formData);
        res.status(201).json(result);
    }
    catch (error) {
    }
};
exports.submitForm = submitForm;
