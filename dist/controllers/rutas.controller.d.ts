import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Rutas } from '../models';
import { RutasRepository } from '../repositories';
export declare class RutasController {
    rutasRepository: RutasRepository;
    constructor(rutasRepository: RutasRepository);
    create(rutas: Omit<Rutas, 'id'>): Promise<Rutas>;
    count(where?: Where<Rutas>): Promise<Count>;
    find(filter?: Filter<Rutas>): Promise<Rutas[]>;
    updateAll(rutas: Rutas, where?: Where<Rutas>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Rutas>): Promise<Rutas>;
    updateById(id: string, rutas: Rutas): Promise<void>;
    replaceById(id: string, rutas: Rutas): Promise<void>;
    deleteById(id: string): Promise<void>;
}
