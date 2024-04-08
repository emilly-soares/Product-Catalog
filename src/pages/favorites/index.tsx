import { useState, useEffect } from 'react';
import { db } from '../../services/firebaseConnection';
import { collection, getDocs, query, where, doc, setDoc } from 'firebase/firestore';
import axios from 'axios';
import { FaHeart } from 'react-icons/fa'; 
import * as S from './style';

interface Produto {
  id: string;
  title: string;
  condition: string;
  thumbnail: string;
  price: number;
}

export function Favorites() {
  const [productsFavorites, setProductsFavorites] = useState<Produto[]>([]);

  useEffect(() => {
    async function getProductsFavoritesFromDB() {
      try {
        const q = query(collection(db, 'produtos'), where('favoritado', '==', true));
        const querySnapshot = await getDocs(q);

        const productsFavoritesDetails: Produto[] = [];
        for (const doc of querySnapshot.docs) {
          const response = await axios.get(`https://api.mercadolibre.com/items/${doc.id}`);
          const productDetails: Produto = response.data;
          productsFavoritesDetails.push(productDetails);
        }

        setProductsFavorites(productsFavoritesDetails);
      } catch (error) {
        console.error('Erro ao obter os produtos favoritados:', error);
      }
    }

    getProductsFavoritesFromDB();
  }, []);


  const handleUnfavorite = async (produtoId: string) => {
    try {
      const productRef = doc(db, 'produtos', produtoId);
      await setDoc(productRef, { favorite: false }, { merge: true });
     
      setProductsFavorites(productsFavorites.filter(produto => produto.id !== produtoId)); 
    } catch (error) {
      console.error('Erro ao desfavoritar:', error);
    }
  };

  return (
    <S.Container>
      {productsFavorites.map(p => (
        <S.Card key={p.id}>
          <S.CardImage src={p.thumbnail} alt={p.title} />
          <S.CardInfo>
            <S.CardTitle>{p.title}</S.CardTitle>
            <S.CardText>Condição: {p.condition}</S.CardText>
            <S.CardText>Preço: {p.price}</S.CardText>
            <S.FavoriteButton onClick={() => handleUnfavorite(p.id)} favorite>
              <FaHeart size={24} /> 
            </S.FavoriteButton>
          </S.CardInfo>
        </S.Card>
      ))}
    </S.Container>
  );
}
