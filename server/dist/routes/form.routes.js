"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const form_controllers_1 = require("../controllers/form.controllers");
const validation_middlewares_1 = require("../middlewares/validation.middlewares");
const router = (0, express_1.Router)();
router.post('/submit', validation_middlewares_1.validateForm, form_controllers_1.submitForm);
exports.default = router;
