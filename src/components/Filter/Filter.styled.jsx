import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 500px;
  height: auto;
  margin: 30px auto;
  border: 0;
`;

export const Label = styled.label`
  display: flex;
  color: #fff;
  font-size: 30px;
  font-weight: 600;
  text-shadow: 1px 1px 2px #4d0c03;
`;

export const Input = styled.input`
  width: 460px;
  height: 40px;
  outline: none;
  border: 0;
  border-bottom: 1px solid #000;
  padding: 10px 30px;
  font-size: 20px;
  &::placeholder {
    font: inherit;
    font-size: 20px;
  }
`;
