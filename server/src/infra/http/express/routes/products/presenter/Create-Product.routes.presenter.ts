import { CreateProductResponseDto } from "../dto/Create-Product.routes.dto";

export function CreateProductRoutePresenter(input: CreateProductResponseDto){
    const response =  { id: input.id };
    return response;
};