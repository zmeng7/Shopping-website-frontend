import { createContext, useContext, useState } from "react";

// 1. 创建一个 Context
const CartContext = createContext();

// 2. Provider（包裹整个 App）
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // 加入购物车
  const addToCart = (product) => {
    setCartItems((prev) => {
      const exist = prev.find((item) => item.id === product.id);

      if (exist) {
        // 如果已存在，数量 +1
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      // 不存在 → 新加入
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // 暂时不实现 remove（之后再做）
  const value = {
    cartItems,
    addToCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}



// 3. 小工具：让其他组件更好地使用 Context
export function useCart() {
  return useContext(CartContext);
}
