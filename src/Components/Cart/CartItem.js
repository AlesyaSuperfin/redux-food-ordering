import { useDispatch } from "react-redux";
import dishesData from "../../Data/dishesData";
import { removeItemFromCart } from "../../redux/cartSlice";
import trashIcon from './trash.png';

const CartItem = ({cartItem}) => {

    const dishes = dishesData.find(item => item.id === cartItem.dishId);
    const dispatch = useDispatch();

    return (
        <div className="cart">
        <div className="dishInACart">
        <p className="textInACart">{dishes.name}</p>
        <p className="textInACart"> - {cartItem.quantity} portion(s)</p>
        </div>
        <p className="textInACart">Price: ${dishes.price * cartItem.quantity}</p>
        <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>        
            <img className="trashIcon" src={trashIcon} alt='trashIcon' />
        </span>
    </div>)
}

export default CartItem;