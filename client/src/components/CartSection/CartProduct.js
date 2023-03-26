import { useDispatch } from "react-redux";
import { removeProduct } from "../../redux/reducer/cart";
const CartProduct = ({ _id, title, image, price }) => {
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeProduct(_id));
  };
  return (
    <tr>
      <td onClick={remove} class="cart-product-remove">
        x
      </td>
      <td class="cart-product-image">
        <a>
          <img
            height="80px"
            src={`${process.env.REACT_APP_API}/public/product/image/${image}`}
            alt="#"
          />
        </a>
      </td>
      <td style={{ maxWidth: 200 }} class="cart-product-info">
        <h4>{title}</h4>
      </td>
      <td class="cart-product-subtotal">Rs {price}</td>
    </tr>
  );
};
export default CartProduct;
