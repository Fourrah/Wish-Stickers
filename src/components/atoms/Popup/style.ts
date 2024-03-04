import styled from 'styled-components';

export const PopupBox = styled.div`
  position: fixed; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px; 
  padding: 20px; 
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1); 
  z-index: 1000;
`;

export const InputText = styled.input`
  width: 95%; 
  padding: 10px 10px;
  margin-bottom: 20px; 
  border: 2px solid #A435F0; 
  border-radius: 5px;
  outline: none;
`;

export const OkButton = styled.button`
  width: 100%; 
  padding: 10px 0; 
  background-color: #A435F0; 
  color: white; 
  border: none; 
  border-radius: 5px; 
  cursor: pointer; 
  &:hover {
    background-color: #4E387E; 
  }
`;

export const CloseButton = styled.button`
  position: absolute; 
  top: 3px; 
  right: 2px; 
  background-color: transparent; 
  border: none; 
  font-size: 15px; 
  cursor: pointer; 

  &:hover {
    color: #6C2DC7; 
  }
`;
