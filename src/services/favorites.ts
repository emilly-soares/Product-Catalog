import { db } from './firebaseConnection';
import { doc, setDoc, getDoc } from 'firebase/firestore';


export const handleFavorite = async (produtoId: string) => {
  try {
    const productRef = doc(db, 'produtos', produtoId);
    const docSnapshot = await getDoc(productRef);
    if (docSnapshot.exists()) {
      console.log('Produto favoritado');
      return;
    }

    await setDoc(productRef, { favoritado: true });
    console.log(`Produto ${produtoId} favoritado com sucesso`);
  } catch (error) {
    console.error('Erro ao favoritar produto:', error);
  }
};

export const isFavorite = async (produtoId: string) => {
  try {
    const productRef = doc(db, 'produtos', produtoId);
    const docSnapshot = await getDoc(productRef);

    return docSnapshot.exists() && docSnapshot.data()?.favorite === true;
  } catch (error) {
    console.error('Erro ao verificar se o produto está favoritado:', error);
    return false;
  }
};

export const handleUnfavorite = async (produtoId: string) => {
  try {
    const productRef = doc(db, 'produtos', produtoId);
    await setDoc(productRef, { favorite: false }, { merge: true });
    console.log(`Produto ${produtoId} desfavoritado`);
  } catch (error) {
    console.error('Erro ao desfavoritar:', error);
  }
};
