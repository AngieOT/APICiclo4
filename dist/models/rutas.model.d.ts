import { Entity } from '@loopback/repository';
export declare class Rutas extends Entity {
    origen: string;
    id?: string;
    destino: string;
    tiempo_estimado: string;
    constructor(data?: Partial<Rutas>);
}
export interface RutasRelations {
}
export declare type RutasWithRelations = Rutas & RutasRelations;
