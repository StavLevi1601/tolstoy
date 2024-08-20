import styled from "styled-components";
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
`;

export const FormUrl = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  margin-bottom: 5px;
`;

export const AllInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Error = styled.span`
  color: red;
`;

export const FormInput = styled.input`
  padding: 10px;
  margin: 8px 0;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
`;

export const Button = styled.button`
  padding: 10px;
  margin: 10px;
  max-width: 200px;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #45a049;
  }
`;

export const MetadataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;
`;

export const MetadataCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  margin: 10px;
  width: 100%;
  border-radius: 10px;
  background-color: #f8f9fa;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
`;

export const MetadataImage = styled.img`
  width: 100%;
  height: auto;
  margin-top: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const MetadataTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #343a40;
`;

export const MetadataDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #6c757d;
`;

export const MetadataUrl = styled.a`
  font-size: 0.9rem;
  margin-bottom: 15px;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const MetadataError = styled.p`
  color: red;
  font-size: 1.2rem;
  margin-top: 20px;
`;
