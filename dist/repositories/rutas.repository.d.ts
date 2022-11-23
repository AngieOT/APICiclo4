import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Rutas, RutasRelations } from '../models';
export declare class RutasRepository extends DefaultCrudRepository<Rutas, typeof Rutas.prototype.id, RutasRelations> {
    constructor(dataSource: MongoDataSource);
}
