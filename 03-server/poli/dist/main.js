"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const express_session_1 = __importDefault(require("express-session"));
const session_file_store_1 = __importDefault(require("session-file-store"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const FileStoreSession = (0, session_file_store_1.default)(express_session_1.default);
    app.use((0, express_session_1.default)({
        secret: 'mi-secreto-super-seguro',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 3600000,
            httpOnly: true,
            secure: false,
        },
    }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map