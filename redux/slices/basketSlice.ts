import { ActionCreator, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../typings/Product";

interface Type {
    items: Product[];
}

interface Id {
    id: string;
}

const initialState: Type = {
    items: [],
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action: PayloadAction<Product>) => {
            state.items.push(action.payload);
        },
        removeFromBasket: (state, action: PayloadAction<Id>) => {
            const index = state.items.findIndex(
                (basketItem) => basketItem.id === action.payload.id
            );

            let newBasket = [...state.items];

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Cant remove the product which doesn't exist`);
            }
            state.items = newBasket;
        },
    },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectItems = (state: any) => state.basket.items;
export const selectTotal = (state: any) =>
    state.basket.items.reduce((total: any, item: any) => total + item.price, 0);

export default basketSlice.reducer;
