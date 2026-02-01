"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ingrediente_entity_1 = require("./ingrediente.entity");
const ingrediente_service_1 = require("./ingrediente.service");
const ingrediente_controller_1 = require("./ingrediente.controller");
let IngredientesModule = class IngredientesModule {
};
exports.IngredientesModule = IngredientesModule;
exports.IngredientesModule = IngredientesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ingrediente_entity_1.Ingrediente])],
        providers: [ingrediente_service_1.IngredientesService],
        controllers: [ingrediente_controller_1.IngredientesController],
        exports: [typeorm_1.TypeOrmModule, ingrediente_service_1.IngredientesService],
    })
], IngredientesModule);
//# sourceMappingURL=ingredientes.module.js.map