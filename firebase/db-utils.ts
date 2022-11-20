import type {
    FirestoreDataConverter,
    DocumentData,
    QueryDocumentSnapshot,
    SnapshotOptions,
    CollectionReference,
    Query,
} from "firebase/firestore";
import {
    collection,
    query,
    doc,
    setDoc,
    getDocs,
    where,
} from "firebase/firestore";

import { db } from "./index";
import Restaurant from "../model/restaurant";

const restaurantConvertor: FirestoreDataConverter<Restaurant> = {
    toFirestore(restaurant: Restaurant): DocumentData {
        return { ...restaurant };
    },
    fromFirestore(
        snapshot: QueryDocumentSnapshot,
        options: SnapshotOptions
    ): Restaurant {
        const data = snapshot.data(options)!;
        const restautant: Restaurant = {
            id: snapshot.id,
            name: data.name,
            address: data.address,
            imageUrl: data.imageUrl,
            category: data.category,
            isFeatured: data.isFeatured,
            dishes: data.dishes,
            rating: data.rating,
        };
        return restautant;
    },
};

const restaurantsRef: CollectionReference<Restaurant> = collection(
    db,
    "restaurants"
).withConverter(restaurantConvertor);

const saveRestaurant = async (restaurant: Restaurant) => {
    await setDoc(doc(restaurantsRef), restaurant);
};

const getRestaurantByQuery = async (
    q: Query<Restaurant>
): Promise<Restaurant[]> => {
    const querySnapshot = await getDocs(q);
    const restaurants: Restaurant[] = [];
    querySnapshot.forEach((doc) => {
        restaurants.push(doc.data());
    });
    return restaurants;
};

const getAllRestaurant = async (): Promise<Restaurant[]> => {
    const q: Query<Restaurant> = query(restaurantsRef);
    return await getRestaurantByQuery(q);
};

const getFeaturedRestaurant = async (): Promise<Restaurant[]> => {
    const q: Query<Restaurant> = query(
        restaurantsRef,
        where("isFeatured", "==", true)
    );
    return await getRestaurantByQuery(q);
};

export { saveRestaurant, getAllRestaurant, getFeaturedRestaurant };
