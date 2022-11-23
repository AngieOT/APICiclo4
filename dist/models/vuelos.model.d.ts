import { Entity } from '@loopback/repository';
export declare class Vuelos extends Entity {
    fecha_inicio: string;
    id?: string;
    hora_inicio: string;
    fecha_fin: string;
    hora_fin: string;
    asientos_vendidos: string;
    nombre_piloto: string;
    ruta: string;
    constructor(data?: Partial<Vuelos>);
}
export interface VuelosRelations {
}
export declare type VuelosWithRelations = Vuelos & VuelosRelations;
