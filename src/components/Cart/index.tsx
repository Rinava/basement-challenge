const Cart = ({items}) => {
  return (
    <div>
      <h3>Your cart</h3>
      {items ? (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <p>{item.title}</p>
              <button>Remove</button>
              <p>{item.description}</p>
              <label>Quantity:</label>
              <input type="number" value={item.quantity} />
              <label>Size</label>
              <input id="" name="" type="radio" />
              <p>{item.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no items in your cart.</p>
      )}

      <p>Total: {items.total}</p>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
