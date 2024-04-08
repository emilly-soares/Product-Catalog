import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  width: 200px;
  margin: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CardInfo = styled.div`
  padding: 1rem;
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 0.5rem;
`;

export const CardText = styled.p`
  font-size: 14px;
  margin-bottom: 0.3rem;
`;

export const FavoriteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-top: 10px;
  outline: none; 

  color: black; 

  ${(props) =>
    props.favorite &&
    css`
      color: purple; 
    `}

`;