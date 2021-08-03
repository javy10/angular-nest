export interface Reservacion{
    _id?: string;
    cliente_id: string;
    vuelo_id: string;
    clase: string;
    aciento: string;
    precio: number;
    descuento: number;
    preciodes: number;

}