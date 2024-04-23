import React from 'react';
import { useCart, CartItem  } from '../../contexts/CartContext';
import * as S from './style.ts';  

interface CartModalProps {
    onClose: () => void;  
}

export const CartModal: React.FC<CartModalProps> = ({ onClose }) => {
  const { cartItems, dispatch } = useCart();

  const removeFromCart = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', id, quantity });
  };

  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalContent onClick={e => e.stopPropagation()}>
        <h1>Carrinho de Compras</h1>
        {cartItems.map((item: CartItem) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>Quantidade: {item.quantity}</p>
            <S.QuantityButton onClick={() => updateQuantity(item.id, item.quantity - 1)}> - </S.QuantityButton>
            <S.QuantityButton onClick={() => updateQuantity(item.id, item.quantity + 1)}> + </S.QuantityButton>
            <p>Preço: ${item.price}</p>
            <S.RemoveButton onClick={() => removeFromCart(item.id)}>Remover</S.RemoveButton>
          </div>
        ))}
        {cartItems.length > 0 && <S.ClearCartButton onClick={clearCart}>Limpar Carrinho</S.ClearCartButton>}
        {cartItems.length === 0 && <p>O carrinho está vazio</p>}
        <S.CloseButton onClick={onClose}>Fechar</S.CloseButton>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default CartModal;
