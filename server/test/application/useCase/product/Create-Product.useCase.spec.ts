import { CreateProductUseCase } from "../../../../src/application/useCase/product/Create-Product.useCase";
import { CreateProductInputDto } from "../../../../src/application/useCase/product/dto/Create-Product.dto";
import { ErrorMessage } from "../../../../src/domain/error/ErrorMessage";
import { ProductGateway } from "../../../../src/domain/gateway/Product.gateway";

describe('CreateProductUseCase', () => {
    let productGateway: jest.Mocked<ProductGateway>;
    let createProductUseCase: CreateProductUseCase; 

    beforeEach(() => {
        productGateway = {
            create: jest.fn()
        } as unknown as jest.Mocked<ProductGateway>;

        createProductUseCase = CreateProductUseCase.create(productGateway);
    });

    it('Shuld create a new product succesfully', async () => {
        const input: CreateProductInputDto = {
            name: 'TestProduct',
            price: 30,
            description: 'Test product description.'
        };

        const output = await createProductUseCase.execute(input);

        expect(productGateway.create).toHaveBeenCalledTimes(1);
        expect(productGateway.create).toHaveBeenCalledWith(expect.objectContaining({
            name: 'TestProduct',
            price: 30,
            description: 'Test product description.'
        }));

        expect(output).toHaveProperty('id');
        expect(output.id).toBeDefined();
        expect(typeof output.id).toBe('string');
    });

    it('Shuld throw an error if product name is empty', async () => {
        const input: CreateProductInputDto = {
            name: '',
            price: 30,
            description: 'Test product description.'
        };

        await expect(createProductUseCase.execute(input))
            .rejects.toThrow(ErrorMessage.nameCannotBeEmpty);
    });

    it('Shuld throw an error if product price is not positive', async () => {
        const input: CreateProductInputDto = {
            name: 'TestProduct',
            price: -30,
            description: 'Test product description.'
        };

        await expect(createProductUseCase.execute(input))
            .rejects.toThrow(ErrorMessage.priceMustBePositive);
    });
});