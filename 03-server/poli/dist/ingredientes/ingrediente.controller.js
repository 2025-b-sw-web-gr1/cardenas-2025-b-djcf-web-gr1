"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientesController = void 0;
const common_1 = require("@nestjs/common");
const ingrediente_service_1 = require("./ingrediente.service");
let IngredientesController = class IngredientesController {
    ingredientesService;
    constructor(ingredientesService) {
        this.ingredientesService = ingredientesService;
    }
    async crear(data) {
        try {
            const ingrediente = await this.ingredientesService.crear(data);
            return { statusCode: common_1.HttpStatus.CREATED, data: ingrediente };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async actualizar(id, data) {
        try {
            const ingrediente = await this.ingredientesService.actualizar(id, data);
            if (!ingrediente) {
                throw new common_1.HttpException('Ingrediente no encontrado', common_1.HttpStatus.NOT_FOUND);
            }
            return { statusCode: common_1.HttpStatus.OK, data: ingrediente };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async eliminar(id) {
        try {
            await this.ingredientesService.eliminar(id);
            return { statusCode: common_1.HttpStatus.NO_CONTENT };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async obtenerUno(id) {
        const ingrediente = await this.ingredientesService.obtenerUno(id);
        if (!ingrediente) {
            throw new common_1.HttpException('Ingrediente no encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        return { statusCode: common_1.HttpStatus.OK, data: ingrediente };
    }
    async obtenerMuchos(filtros) {
        const ingredientes = await this.ingredientesService.obtenerMuchos(filtros);
        return { statusCode: common_1.HttpStatus.OK, data: ingredientes };
    }
};
exports.IngredientesController = IngredientesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IngredientesController.prototype, "crear", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], IngredientesController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], IngredientesController.prototype, "eliminar", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], IngredientesController.prototype, "obtenerUno", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IngredientesController.prototype, "obtenerMuchos", null);
exports.IngredientesController = IngredientesController = __decorate([
    (0, common_1.Controller)('ingredientes'),
    __metadata("design:paramtypes", [ingrediente_service_1.IngredientesService])
], IngredientesController);
//# sourceMappingURL=ingrediente.controller.js.map