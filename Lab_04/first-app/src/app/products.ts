export abstract class Product {
    id: number;
    name: string;
    price: number;
    description: string;

    constructor(id: number, name: string, price: number, description: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    };
};

export const products = [
    {
        id: 1,
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens'
    },
    {
        id: 2,
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras'
    },
    {
        id: 3,
        name: 'Phone Standard',
        price: 299,
        description: ''
    },
];