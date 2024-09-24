import { useSelector } from "react-redux";
import dishesData from "../../Data/dishesData";
import Dish from "./Dish";
import { getSelectedCategory } from "../../redux/dishesSlice";

const Dishes = () => {

    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div>
            {dishesData
            .filter(dish => {
                if (selectedCategory === 'ALL') return true;
                return selectedCategory === dish.category})

            .map(dish => <Dish dish={dish} />)}
        </div>
    )
}

export default Dishes;