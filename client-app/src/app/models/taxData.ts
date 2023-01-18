import { Client } from "./client";
import { Service } from "./service";
import { Supplier } from "./supplier";

export interface TaxData {
    supplier: Supplier;
    client: Client;
    service: Service;
}