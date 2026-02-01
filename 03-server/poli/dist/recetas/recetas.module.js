"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecetasModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const receta_entity_1 = require("./receta.entity");
const receta_service_1 = require("./receta.service");
const receta_controller_1 = require("./receta.controller");
let RecetasModule = class RecetasModule {
};
exports.RecetasModule = RecetasModule;
exports.RecetasModule = RecetasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([receta_entity_1.Receta])],
        providers: [receta_service_1.RecetasService],
        controllers: [receta_controller_1.RecetasController],
        exports: [typeorm_1.TypeOrmModule, receta_service_1.RecetasService]
    })
], RecetasModule);
//# sourceMappingURL=recetas.module.js.map