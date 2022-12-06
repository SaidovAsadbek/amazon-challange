export const initialState = {
    basket: [],
};

// selector
export const getBasketTotal = (basket) =>
    // reduce(itemlarni hammasini ketma ketlikda qushadi)
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(state, "state");
    console.log(action, "action");
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case "REMOVE_FROM_BASKET":
            // This's all id === id products delete
            // return {
            //     ...state,
            //     basket: state.basket.filter((item) => item.id !== action.id),
            // };

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id,
            );
            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product (id: ${action.id} as its not in basket!)`,
                );
            }
            return { ...state, basket: newBasket };
        default:
            return state;
    }
};

export default reducer;
