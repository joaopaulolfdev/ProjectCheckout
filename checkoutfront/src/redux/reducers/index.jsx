import { combineReducers } from "redux";

import Product from "../../redux/reducers/Product";
import Category from "../../redux/reducers/Category";
import Cart from "../../redux/reducers/Cart";

const reducers = combineReducers({
    product: Product,
    category: Category,
    cart: Cart
});

export default reducers;