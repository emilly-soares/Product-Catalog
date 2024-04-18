import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaHeart } from 'react-icons/fa';
import * as S from './style';
import { handleFavorite, isFavorite, handleUnfavorite } from '../../services/favorites';

interface Produto {
  id: string;
  title: string;
  condition: string;
  thumbnail: string;
  price: number;
  favorite: boolean;
}

export function Products() {
  const [products, setProducts] = useState<Produto[]>([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get('https://api.mercadolibre.com/sites/MLB/search?q=smartphone');
        const productsWithFavorite = await Promise.all(
          response.data.results.map(async (p: Produto) => ({
            ...p,
            favorite: await isFavorite(p.id),
          }))
        );
        setProducts(productsWithFavorite);
      } catch (error) {
        console.error('Erro ao carregar os produtos:', error);
      }
    }

    getProducts();
  }, []);

  const handleFavoriteProduct = (produtoId: string) => {
    handleFavorite(produtoId);
    setProducts(products.map(p => p.id === produtoId ? { ...p, favorite: true } : p));
    console.log(`ID ${produtoId} favoritado`);
  };

  const handleUnfavoriteProduct = (produtoId: string) => {
    handleUnfavorite(produtoId);
    setProducts(products.map(p => p.id === produtoId ? { ...p, favorite: false } : p));
    console.log(`ID ${produtoId} desfavoritado`);
  };

  const handleDetails = (produtoId: string) => {
    history.push(`/product/${produtoId}`);
  };

  return (
    <S.Container>
      {products.map(p => (
        <S.Card key={p.id}>
          <S.CardImage src={p.thumbnail} alt={p.title} />
          <S.CardInfo>
            <S.CardTitle>{p.title}</S.CardTitle>
            <S.CardText>Condição: {p.condition}</S.CardText>
            <S.CardText>Preço: {p.price}</S.CardText>
            <div>
              <S.FavoriteButton onClick={() => p.favorite ? handleUnfavoriteProduct(p.id) : handleFavoriteProduct(p.id)} favorite={p.favorite}>
                <FaHeart size={24} color={p.favorite ? 'purple' : 'black'} />
              </S.FavoriteButton>
              <S.DetailsButton to={`/product/${p.id}`}>Mais Detalhes</S.DetailsButton>
            </div>
          </S.CardInfo>
        </S.Card>
      ))}
    </S.Container>
  );
}
