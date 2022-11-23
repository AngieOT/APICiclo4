"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VuelosController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let VuelosController = class VuelosController {
    constructor(vuelosRepository) {
        this.vuelosRepository = vuelosRepository;
    }
    async create(vuelos) {
        return this.vuelosRepository.create(vuelos);
    }
    async count(where) {
        return this.vuelosRepository.count(where);
    }
    async find(filter) {
        return this.vuelosRepository.find(filter);
    }
    async updateAll(vuelos, where) {
        return this.vuelosRepository.updateAll(vuelos, where);
    }
    async findById(id, filter) {
        return this.vuelosRepository.findById(id, filter);
    }
    async updateById(id, vuelos) {
        await this.vuelosRepository.updateById(id, vuelos);
    }
    async replaceById(id, vuelos) {
        await this.vuelosRepository.replaceById(id, vuelos);
    }
    async deleteById(id) {
        await this.vuelosRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/vuelos'),
    (0, rest_1.response)(200, {
        description: 'Vuelos model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Vuelos) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vuelos, {
                    title: 'NewVuelos',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VuelosController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/vuelos/count'),
    (0, rest_1.response)(200, {
        description: 'Vuelos model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Vuelos)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VuelosController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/vuelos'),
    (0, rest_1.response)(200, {
        description: 'Array of Vuelos model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Vuelos, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Vuelos)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VuelosController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/vuelos'),
    (0, rest_1.response)(200, {
        description: 'Vuelos PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vuelos, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Vuelos)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Vuelos, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VuelosController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/vuelos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Vuelos model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vuelos, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Vuelos, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VuelosController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/vuelos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Vuelos PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vuelos, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Vuelos]),
    tslib_1.__metadata("design:returntype", Promise)
], VuelosController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/vuelos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Vuelos PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Vuelos]),
    tslib_1.__metadata("design:returntype", Promise)
], VuelosController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/vuelos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Vuelos DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], VuelosController.prototype, "deleteById", null);
VuelosController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.VuelosRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.VuelosRepository])
], VuelosController);
exports.VuelosController = VuelosController;
//# sourceMappingURL=vuelos.controller.js.map