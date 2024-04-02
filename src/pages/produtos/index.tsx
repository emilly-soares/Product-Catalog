import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './style';

interface Produto {
  id: string;
  title: string;
  condition: string;
  thumbnail: string;
  price: number;
}


export function Produtos() {
    const [produtos, setProdutos] = useState([]);
  
    useEffect(() => {
      async function getProdutos() {
        try {
          const response = await axios.get('https://api.mercadolibre.com/sites/MLB/search?q=smartphone');
          setProdutos(response.data.results);
        } catch (error) {
          console.error('Erro ao obter os produtos:', error);
        }
      }
  
      getProdutos();
    }, []);
  
    return (
      <S.Container>
        {produtos.map(p => (
          <S.Card key={p.id}>
            {/*<a href={`https://api.mercadolibre.com/items/${produto.id}`} target="_blank" rel="noopener noreferrer">*/}
              <S.CardImage src={p.thumbnail} alt={p.title} />
              <S.CardInfo>
                <S.CardTitle>{p.title}</S.CardTitle>
                <S.CardText>Condição: {p.condition}</S.CardText>
                <S.CardText>Preço: {p.price}</S.CardText>
              </S.CardInfo>
          </S.Card>
        ))}
      </S.Container>
    );
}
