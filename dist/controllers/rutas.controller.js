"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RutasController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RutasController = class RutasController {
    constructor(rutasRepository) {
        this.rutasRepository = rutasRepository;
    }
    async create(rutas) {
        return this.rutasRepository.create(rutas);
    }
    async count(where) {
        return this.rutasRepository.count(where);
    }
    async find(filter) {
        return this.rutasRepository.find(filter);
    }
    async updateAll(rutas, where) {
        return this.rutasRepository.updateAll(rutas, where);
    }
    async findById(id, filter) {
        return this.rutasRepository.findById(id, filter);
    }
    async updateById(id, rutas) {
        await this.rutasRepository.updateById(id, rutas);
    }
    async replaceById(id, rutas) {
        await this.rutasRepository.replaceById(id, rutas);
    }
    async deleteById(id) {
        await this.rutasRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/rutas'),
    (0, rest_1.response)(200, {
        description: 'Rutas model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Rutas) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rutas, {
                    title: 'NewRutas',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RutasController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/rutas/count'),
    (0, rest_1.response)(200, {
        description: 'Rutas model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Rutas)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RutasController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/rutas'),
    (0, rest_1.response)(200, {
        description: 'Array of Rutas model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Rutas, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Rutas)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RutasController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/rutas'),
    (0, rest_1.response)(200, {
        description: 'Rutas PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rutas, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Rutas)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Rutas, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RutasController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/rutas/{id}'),
    (0, rest_1.response)(200, {
        description: 'Rutas model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rutas, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Rutas, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RutasController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/rutas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Rutas PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rutas, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Rutas]),
    tslib_1.__metadata("design:returntype", Promise)
], RutasController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/rutas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Rutas PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Rutas]),
    tslib_1.__metadata("design:returntype", Promise)
], RutasController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/rutas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Rutas DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], RutasController.prototype, "deleteById", null);
RutasController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.RutasRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.RutasRepository])
], RutasController);
exports.RutasController = RutasController;
//# sourceMappingURL=rutas.controller.js.map