import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CartModal } from './index';
import { CartContext, CartItem } from '../../contexts/CartContext';
import '@testing-library/jest-dom/extend-expect';

describe('CartModal', () => {
  const cartItems: CartItem[] = [
    { id: '1', name: 'Item 1', quantity: 1, price: 10 },
    { id: '2', name: 'Item 2', quantity: 2, price: 20 }
  ];
  
  const mockDispatch = jest.fn();
  const mockOnClose = jest.fn();

  const renderCartModal = () => {
    return render(
      <CartContext.Provider value={{ cartItems, dispatch: mockDispatch }}>
        <CartModal onClose={mockOnClose} />
      </CartContext.Provider>
    );
  };

  test('should disable clear cart button when cart is empty', () => {
    const { getByText } = render(
      <CartContext.Provider value={{ cartItems: [], dispatch: mockDispatch }}>
        <CartModal onClose={mockOnClose} />
      </CartContext.Provider>
    );

    expect(getByText('O carrinho está vazio')).toBeInTheDocument();
    expect(getByText('Fechar')).toBeEnabled();
  });

  test('should call removeFromCart when remove button is clicked', async () => {
    const { getAllByText } = renderCartModal();
    const removeButtons = getAllByText(/Remover/i);

    await userEvent.click(removeButtons[0]);

    expect(mockDispatch).toHaveBeenCalledWith({ type: 'REMOVE_ITEM', id: '1' });
  });
});
