import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; 
`;

export const ModalContent = styled.div`
  background: #f8f8ff; 
  color: #5e345e; 
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(94, 52, 94, 0.2); 
  width: 90%;
  max-width: 500px;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto; 
`;

export const Button = styled.button`
  padding: 8px 12px;
  font-size: 16px;
  color: white;
  background-color: #6a1b9a; 
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #8e24aa; 
  }
`;

export const QuantityButton = styled(Button)`
  background-color: #7b1fa2;

  &:hover {
    background-color: #9c27b0;
  }
`;

export const RemoveButton = styled(Button)`
  background-color: #9c27b0; 

  &:hover {
    background-color: #ab47bc;
  }
`;

export const ClearCartButton = styled(Button)`
  background-color: #ad1457;

  &:hover {
    background-color: #d81b60;
  }
`;

export const CloseButton = styled(Button)`
  background-color: #6a1b9a;

  &:hover {
    background-color: #9c27b0;
  }
`;