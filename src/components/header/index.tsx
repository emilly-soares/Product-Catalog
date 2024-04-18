import { HeaderContainer, Title, LinksContainer, StyledLink } from './style';

export function Header() {
  return (
    <HeaderContainer>
      <LinksContainer>
        <StyledLink to="/">Produtos</StyledLink>
        <StyledLink to="/favoritos">Favoritos</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
      </LinksContainer>
      <hr />
    </HeaderContainer>
  );
}
;