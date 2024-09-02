import { Product, PropsProduct } from "../../../src/domain/entities/Product.entity";
import { ErrorMessage } from "../../../src/domain/error/ErrorMessage";

describe('Product Entity', () => {
    it('Shuld create a product with valid name, price and description', () => {
        const product = Product.create(
            'TestProduct',
            30,
            'Test product description.',
            'test.com/image_test'
        );

        expect(product).toBeDefined();
        expect(product.name).toBe('TestProduct');
        expect(product.price).toBe(30);
        expect(product.description).toBe('Test product description.');
        expect(product.quantity).toBe(0);
        expect(product.imageURL).toBe('test.com/image_test');
    });

    it('Shuld throw an error if name is empty', () => {
        expect(() => Product.create('',30,'Test product description.', 'test.com/image_test'))
        .toThrow(ErrorMessage.cannotBeEmpty);
    });

    it('Shuld throw an error if price is not a positive integer', () => {
        expect(() => Product.create('TestProduct',-5,'Test product description.', 'test.com/image_test'))
        .toThrow(ErrorMessage.priceMustBePositive);

        expect(() => Product.create('TestProduct',0,'Test product description.', 'test.com/image_test'))
        .toThrow(ErrorMessage.priceMustBePositive);
    });

    it('Shuld throw an error if description is empty', () => {
        expect(() => Product.create('TestProduct',30,'', 'test.com/image_test'))
        .toThrow(ErrorMessage.cannotBeEmpty);
    });

    it('Shuld throw an error if imageURL is empty', () => {
        expect(() => Product.create('TestProduct',30,'Test product description.', ''))
        .toThrow(ErrorMessage.cannotBeEmpty);
    })


    it('Shuld throw an error if quantity is not a positive integer', () => {
        const productProps: PropsProduct = {
            id: '123',
            name: 'TestProduct',
            price: 30,
            description: 'Test product description.',
            imageURL: 'test.com/image_test',
            quantity: -1,
        };

        expect(() => Product.with(productProps)).toThrow(ErrorMessage.quantityMustBePositive);
        productProps.quantity = 1.5;
        expect(() => Product.with(productProps)).toThrow(ErrorMessage.quantityMustBeInteger);
    });

    it('Shuld increase quantity correctly', () => {
        const product = Product.create(
            'TestProduct',
            30,
            'Test product description.',
            'test.com/image_test',
        );

        product.increaseQuantity(5);
        expect(product.quantity).toBe(5);
    });

    it('Shuld decrease quantity correctly', () => {
        const product = Product.create(
            'TestProduct',
            30,
            'Test product description.',
            'test.com/image_test',
        );

        product.increaseQuantity(5);
        product.decreaseQuantity(3);
        expect(product.quantity).toBe(2);
    });

    it('Shuld throw an error if trying set a non-integer quantity', () => {
        const product = Product.create(
            'TestProduct',
            30,
            'Test product description.',
            'test.com/image_test',
        );

        product.increaseQuantity(1);
        expect(() => product.increaseQuantity(1.5)).toThrow(ErrorMessage.quantityMustBeInteger);
        expect(() => product.decreaseQuantity(1.5)).toThrow(ErrorMessage.quantityMustBeInteger);
    });

    it('Shuld throw an error if trying quantity to a negative value', () => {
        const product = Product.create(
            'TestProduct',
            30,
            'Test product description.',
            'test.com/image_test',
        );

        expect(() => product.increaseQuantity(-1)).toThrow(ErrorMessage.quantityMustBePositive);
        expect(() => product.decreaseQuantity(-1)).toThrow(ErrorMessage.quantityMustBePositive);
    });

    it('Shuld throw an error if trying decrease a default quantity value', () => {
        const product = Product.create(
            'TestProduct',
            30,
            'Test product description.',
            'test.com/image_test',
        );

        expect(() => product.decreaseQuantity(1)).toThrow(ErrorMessage.quantityMustBePositive);
    });
});