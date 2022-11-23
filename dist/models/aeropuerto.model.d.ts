import { Entity } from '@loopback/repository';
export declare class Aeropuerto extends Entity {
    nombre: string;
    id?: string;
    ciudad: string;
    pais: string;
    coord_x: string;
    coord_y: string;
    siglas: string;
    tipo: string;
    constructor(data?: Partial<Aeropuerto>);
}
export interface AeropuertoRelations {
}
export declare type AeropuertoWithRelations = Aeropuerto & AeropuertoRelations;
