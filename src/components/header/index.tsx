import { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import { useUser } from '../../contexts/UserContext';  
import CartModal from '../../components/cart/index';
import * as S from './style';

export function Header() {
  const { cartItems } = useCart();
  const { name } = useUser();  
  const [isModalOpen, setModalOpen] = useState(false);
  
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <S.HeaderContainer>
      <S.LinksContainer>
        <S.LeftLinksContainer>
          <S.StyledLink to="/">Produtos</S.StyledLink>
          <S.StyledLink to="/favoritos">Favoritos</S.StyledLink>
          {name ? (
            <S.StyledLink to="/login" as="span" >Olá, {name}</S.StyledLink>  
          ) : (
            <S.StyledLink to="/login">Login</S.StyledLink>
          )}
        </S.LeftLinksContainer>
        <S.StyledLink to="#" onClick={() => setModalOpen(true)}>Carrinho ({totalItems})</S.StyledLink>
      </S.LinksContainer>
      {isModalOpen && <CartModal onClose={() => setModalOpen(false)} />}
      <hr />
    </S.HeaderContainer>
  );
}
