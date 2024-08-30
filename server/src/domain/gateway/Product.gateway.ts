import { Product } from "../entities/Product.entity";

export interface ProductGateway {
    create(product: Product): Promise<void>;
    listAll(): Promise<Product[]>;
}