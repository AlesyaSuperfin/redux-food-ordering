import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const Dish = ({dish}) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()

    return (
        <div className="dishContainer">
            <img src={`${dish.img}.jpg`} alt="food" />
            <div className="dish">
            <h2>{dish.name}</h2>
            <h3>: $ {dish.price}</h3>
            </div>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
            <button onClick={() => dispatch(addItemToCart({dish, quantity}))}>Add to cart</button>
        </div>
    )
} 

export default Dish;