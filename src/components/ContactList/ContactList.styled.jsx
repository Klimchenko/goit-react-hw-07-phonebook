import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  height: auto;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  width: 700px;
  height: 60px;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  box-shadow: 2px 4px 3px #000;
  border-radius: 3px;
  background-color: #fff;
  display: flex;
  justify-content: start;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  transition: all 400ms cubic-bezier(0.4, 0, 0.3, 1);

  &:hover {
    box-shadow: 5px 4px 5px 1px rgba(100, 100, 100, 0.7);
  }
`;

export const Text = styled.p`
  margin-right: 10px;
  color: #011b27;
  font-size: 22px;
  font-weight: 600;
  text-shadow: 1px 2px 3px #011b27;
`;

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const ChangeColor = styled.span`
  color: #011b27;
  transition: color 400ms cubic-bezier(0.4, 0, 0.3, 1);
  &:hover {
    color: #264d5f;
  }
`;
