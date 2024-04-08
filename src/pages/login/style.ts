import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

export const Form = styled.form`
  width: 25%;
  padding: 20px;
  margin-top: 50px; 
  border-radius: 8px;
  background-color: #f5f5f5;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  font-size: 28px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 20px;
`;

export const Input = styled.input`
  width: 90%; 
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 20px;
  padding-left: 32px;
  height: 30px;
  background-repeat: no-repeat;
  background-position: 8px center;
  background-size: 16px; 
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #8a05be;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold; 
`;

