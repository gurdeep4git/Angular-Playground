export class Category {
    id: string;
    name: string;
}

export class Product {
    id: string;
    name: string;
    description: string;
}

export class ProductDetails {
    productId: number;
    name: string;
    sizes: number[] | string[];
    colors: string[];
    price: number;
}

export class StoreProduct {
    id: number;
    title: string;
    price: number;
    description: String;
    category: string;
    image: string;
    rating: RateModel;
}

export class RateModel {
    rate: number;
    count: number
}