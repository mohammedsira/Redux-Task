import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        datacart: (state, action) => {
            return action.payload;
        },
        increasecart: (state, action) => {
            let { id } = action.payload;
            let quantity = 1;
            return state.map((element) => {
                if (element.id === id) {
                    return {
                        ...element,
                        quantity: (element.quantity || quantity) + 1,
                    };
                }
                return element;
            });
        },
        decreasecart: (state, action) => {
            let { id } = action.payload;
            return state.map((element) => {
                if (element.id === id) {
                    return {
                        ...element,
                        quantity: element.quantity - 1,
                    };
                }
                return element;
            });
        },



        removecart: (state, action) => {
            const { id } = action.payload;
            return state.filter((product) => product.id !== id);
        },
    },
});
export const { datacart, increasecart, decreasecart, removecart } =
    ProductSlice.actions;
export default ProductSlice.reducer;