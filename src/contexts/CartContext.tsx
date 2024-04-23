import { createContext, useContext, useReducer, ReactNode, Dispatch } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

type CartAction =
  | { type: "ADD_ITEM"; item: CartItem }
  | { type: "REMOVE_ITEM"; id: string }
  | { type: "CLEAR_CART" }
  | { type: "UPDATE_QUANTITY"; id: string; quantity: number };

const initialState: CartItem[] = [];

interface CartContextType {
  cartItems: CartItem[];
  dispatch: Dispatch<CartAction>;
}

export const CartContext = createContext<CartContextType>({
  cartItems: initialState,
  dispatch: () => undefined
});

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "ADD_ITEM":
      const foundItem = state.find(item => item.id === action.item.id);
      if (foundItem) {
        return state.map(item =>
          item.id === action.item.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...state, { ...action.item, quantity: 1 }];

    case "REMOVE_ITEM":
      return state.filter(item => item.id !== action.id);

    case "CLEAR_CART":
      return [];

    case "UPDATE_QUANTITY":
      return state.map(item =>
        item.id === action.id ? { ...item, quantity: action.quantity } : item
      );

    default:
      return state;
  }
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  return useContext(CartContext);
}
