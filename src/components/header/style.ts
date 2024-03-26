import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const HeaderContainer = styled.header`
  background-color:  #993399;
  padding: 20px;
  color: white;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const LinksContainer = styled.div`
  margin-top: 10px;
  font-size: 1.5rem;
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 10px;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
