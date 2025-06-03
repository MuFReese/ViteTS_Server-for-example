"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const form_routes_1 = __importDefault(require("./routes/form.routes"));
const db_1 = __importDefault(require("./db"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use((0, cors_1.default)({
    origin: ['http://localhost:3000', 'http://example.com'], // Разрешенные домены
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Разрешенные HTTP методы
    allowedHeaders: ['Content-Type', 'Authorization'], // Разрешенные заголовки
    optionsSuccessStatus: 200 // Статус успеха для предварительных запросов
}));
app.use(express_1.default.json());
app.use('/api', form_routes_1.default);
db_1.default.connect()
    .then(() => console.log('Connected DB'))
    .catch(err => console.error('DB connection error', err));
app.listen(PORT, () => {
    console.log(`Server run in the http://localhost:${PORT}`);
});
