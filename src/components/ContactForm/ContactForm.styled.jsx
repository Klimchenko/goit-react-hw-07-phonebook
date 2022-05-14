import styled from 'styled-components';

export const Form = styled.form`
  display: inline-flex;
  flex-direction: column;
  margin-top: 20px;
  border: 0;
`;

export const Label = styled.label`
  display: inline-flex;
  justify-content: flex-start;
  margin-bottom: 10px;
  color: #fff;
  font-size: 25px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 460px;
  height: 40px;
  outline: none;
  border: 0;
  border-bottom: 1px solid #000;
  margin-bottom: 20px;
  padding: 10px 30px;
  font-size: 20px;
`;

export const InputBottom = styled(Input)`
  margin-bottom: 40px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 170px;
  height: 40px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  border: 0;
  color: #011b27;
  background-color: #fff;

  &:hover {
    color: #fff;
    background-color: #264d5f;
    box-shadow: 1px 2px 1px #011b27, 3px 5px 4px #264d5f;
    transition: all 400ms cubic-bezier(0.4, 0, 0.3, 1);
  }
`;
