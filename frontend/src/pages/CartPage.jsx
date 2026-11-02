/**
 *  CartPage.jsx
**/

import { Link } from 'react-router-dom';
import CartProductCard from '../components/CartProductCard.jsx';

function CartPage({ cart, onRemoveFromCart, onIncreaseQty, onDecreaseQty }) {

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const grouped = cart.reduce((acc, product) => {
    const existing = acc.find(item => item.product._id === product._id);
    if (existing) {
      existing.quantity += 1;
    } else {
      acc.push({ product, quantity: 1 });
    }
    return acc;
  }, []);

  if (cart.length === 0) {
    return (
      <div className="page-container">
        <h2>your cart is empty!</h2>
        <Link 
          to="/" 
          className="btn btn-primary" 
          style={{ marginTop: '1rem' }}
        > browse products</Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h2>Cart ({cart.length} items)</h2>

      <div className="cart-list">
        {grouped.map((item) => (
          <CartProductCard
            key={item.product._id}
            product={item.product}
            quantity={item.quantity}
            onIncrease={() => onIncreaseQty(item.product)}
            onDecrease={() => onDecreaseQty(item.product)}
            onRemove={() => onRemoveFromCart(item.product._id)}
          />
        ))}
      </div>
    
      <div className="cart-total">
        <h3>Total: ₹{totalPrice}</h3>
      </div>
    </div>
  );
}

export default CartPage;
