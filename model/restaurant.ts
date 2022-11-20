interface Restaurant {
    id?: string;
    name: string;
    address: string;
    imageUrl: string;
    category: string[];
    isFeatured: boolean;
    dishes: string[];
    rating?: number;
}

export default Restaurant;
