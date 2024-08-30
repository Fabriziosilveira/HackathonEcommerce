import { ErrorMessage } from "../error/ErrorMessage";

export type PropsProduct = {
    id: string;
    name: string;
    price: number;
    description: string;
    quantity: number;
}

export class Product{
    private constructor(private props: PropsProduct){
        this.validateName(this.props.name);
        this.validatePrice(this.props.price);
        this.validateQuantity(this.props.quantity);
    }

    public static create(name: string, price: number, description: string){
        return new Product({
            id: crypto.randomUUID().toString(),
            name,
            price,
            description,
            quantity: 0,
        })
    }

    public static with(props: PropsProduct) {
        return new Product(props);
    }

    private validateQuantityUpdate(): void{
        if (this.props.quantity == 0){
            throw new Error(ErrorMessage.quantityMustBePositive);
        }
    }

    private validateQuantity(quantity: number): void{
        if (!Number.isInteger(quantity)){
            throw new Error(ErrorMessage.quantityMustBeInteger);
        } else if (quantity < 0){
            throw new Error(ErrorMessage.quantityMustBePositive);
        }
    }

    private validateName(name: string): void{
        if (name == ""){
            throw new Error(ErrorMessage.nameCannotBeEmpty);
        }
    }

    private validatePrice(price: number): void{
        if (price <= 0){
            throw new Error(ErrorMessage.priceMustBePositive);
        }
    }

    public increaseQuantity(quantity: number){
        this.validateQuantity(quantity);
        this.props.quantity += quantity;
    }

    public decreaseQuantity(quantity: number){
        this.validateQuantityUpdate();
        this.validateQuantity(quantity);
        this.props.quantity -= quantity;
    }

    public get id() : string {
        return this.props.id;
    }

    public get name() : string {
        return this.props.name;
    }
    
    public get price() : number {
        return this.props.price;
    }
    
    public get description() : string {
        return this.props.description;
    }
    
    public get quantity() : number {
        return this.props.quantity;
    }
}

