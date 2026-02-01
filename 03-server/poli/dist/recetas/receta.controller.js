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
exports.RecetasController = void 0;
const common_1 = require("@nestjs/common");
const receta_service_1 = require("./receta.service");
let RecetasController = class RecetasController {
    recetasService;
    constructor(recetasService) {
        this.recetasService = recetasService;
    }
    async crear(data) {
        try {
            const receta = await this.recetasService.crear(data);
            return { statusCode: common_1.HttpStatus.CREATED, data: receta };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async actualizar(id, data) {
        try {
            const receta = await this.recetasService.actualizar(id, data);
            if (!receta) {
                throw new common_1.HttpException('Receta no encontrada', common_1.HttpStatus.NOT_FOUND);
            }
            return { statusCode: common_1.HttpStatus.OK, data: receta };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async eliminar(id) {
        try {
            await this.recetasService.eliminar(id);
            return { statusCode: common_1.HttpStatus.NO_CONTENT };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async obtenerUno(id) {
        const receta = await this.recetasService.obtenerUno(id);
        if (!receta) {
            throw new common_1.HttpException('Receta no encontrada', common_1.HttpStatus.NOT_FOUND);
        }
        return { statusCode: common_1.HttpStatus.OK, data: receta };
    }
    async obtenerMuchos(filtros) {
        const recetas = await this.recetasService.obtenerMuchos(filtros);
        return { statusCode: common_1.HttpStatus.OK, data: recetas };
    }
};
exports.RecetasController = RecetasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecetasController.prototype, "crear", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], RecetasController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RecetasController.prototype, "eliminar", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RecetasController.prototype, "obtenerUno", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecetasController.prototype, "obtenerMuchos", null);
exports.RecetasController = RecetasController = __decorate([
    (0, common_1.Controller)('recetas'),
    __metadata("design:paramtypes", [receta_service_1.RecetasService])
], RecetasController);
//# sourceMappingURL=receta.controller.js.map