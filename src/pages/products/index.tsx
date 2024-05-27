import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaHeart, FaShoppingCart } from 'react-icons/fa'; // Adicionar ícone de carrinho
import * as S from './style';
import { handleFavorite, isFavorite, handleUnfavorite } from '../../services/favorites';
import { useCart } from '../../contexts/CartContext'; // Importar useCart

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
  const { dispatch } = useCart(); // Utilizar o dispatch do useCart

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

  const handleAddToCart = (product: Produto) => {
    dispatch({
      type: 'ADD_ITEM',
      item: {
        id: product.id,
        name: product.title,
        price: product.price,
        quantity: 1,
      }
    });
  };

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

  return (
    <S.Container>
      {products.map(product => (
        <S.Card key={product.id}>
          <S.CardImage src={product.thumbnail} alt={product.title} />
          <S.CardInfo>
            <S.CardTitle>{product.title}</S.CardTitle>
            <S.CardText>Condição: {product.condition}</S.CardText>
            <S.CardText>Preço: {product.price}</S.CardText>
            <div>
              <S.FavoriteButton onClick={() => product.favorite ? handleUnfavoriteProduct(product.id) : handleFavoriteProduct(product.id)} favorite={product.favorite}>
                <FaHeart size={24} color={product.favorite ? 'purple' : 'black'} />
              </S.FavoriteButton>
              <S.CartButton onClick={() => handleAddToCart(product)}>
                <FaShoppingCart size={24} />
              </S.CartButton>
              <S.DetailsButton to={`/product/${product.id}`}>Mais Detalhes</S.DetailsButton>
            </div>
          </S.CardInfo>
        </S.Card>
      ))}
    </S.Container>
  );
}
