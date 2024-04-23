import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';  
import * as S from './style.ts';
import { handleFavorite, isFavorite, handleUnfavorite } from '../../services/favorites';
import { useCart } from '../../contexts/CartContext';

interface Produto {
  id: string;
  title: string;
  condition: string;
  thumbnail: string;
  price: number;
  favorite: boolean;
}

export function Product() {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Produto | null>(null);
  const { dispatch } = useCart();  

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await axios.get(`https://api.mercadolibre.com/items/${productId}`);
        const productData: Produto = {
          id: response.data.id,
          title: response.data.title,
          condition: response.data.condition,
          thumbnail: response.data.thumbnail,
          price: response.data.price,
          favorite: await isFavorite(response.data.id),
        };
        setProduct(productData);
      } catch (error) {
        console.error('Erro ao carregar o produto:', error);
      }
    }

    getProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      dispatch({
        type: 'ADD_ITEM',
        item: {
          id: product.id,
          name: product.title,
          price: product.price,
          quantity: 1,  
        }
      });
    }
  };

  const handleFavoriteProduct = (productId: string) => {
    handleFavorite(productId);
    setProduct(prevProduct => prevProduct ? { ...prevProduct, favorite: true } : null);
    console.log(`ID ${productId} favoritado`);
  };

  const handleUnfavoriteProduct = (productId: string) => {
    handleUnfavorite(productId);
    setProduct(prevProduct => prevProduct ? { ...prevProduct, favorite: false } : null);
    console.log(`ID ${productId} desfavoritado`);
  };

  return (
    <S.Container>
      {product && (
        <S.Card key={product.id}>
          <S.CardImage src={product.thumbnail} alt={product.title} />
          <S.CardInfo>
            <S.CardTitle>{product.title}</S.CardTitle>
            <S.CardText>Condição: {product.condition}</S.CardText>
            <S.CardText>Preço: {product.price}</S.CardText>
            <S.BContainer>
              <S.FavoriteButton onClick={() => product.favorite ? handleUnfavoriteProduct(product.id) : handleFavoriteProduct(product.id)} favorite={product.favorite}>
                <FaHeart size={24} color={product.favorite ? 'purple' : 'black'} />
              </S.FavoriteButton>
              <S.CartButton onClick={handleAddToCart}>
                <FaShoppingCart size={24} />
              </S.CartButton>
            </S.BContainer>
          </S.CardInfo>
        </S.Card>
      )}
    </S.Container>
  );
}
