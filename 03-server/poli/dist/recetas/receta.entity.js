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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Receta = void 0;
const typeorm_1 = require("typeorm");
const ingrediente_entity_1 = require("../ingredientes/ingrediente.entity");
let Receta = class Receta {
    id;
    nombre;
    descripcion;
    ingredientes;
};
exports.Receta = Receta;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Receta.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Receta.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Receta.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ingrediente_entity_1.Ingrediente, ingrediente => ingrediente.receta, { cascade: true }),
    __metadata("design:type", Array)
], Receta.prototype, "ingredientes", void 0);
exports.Receta = Receta = __decorate([
    (0, typeorm_1.Entity)()
], Receta);
//# sourceMappingURL=receta.entity.js.map