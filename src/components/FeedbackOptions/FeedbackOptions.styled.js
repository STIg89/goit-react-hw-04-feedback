import styled from 'styled-components';

export const BtnWrap = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
`;

export const Btn = styled.button`
  padding: 10px;
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 2px 3px 5px black;
  background-color: yellow;
  min-width: 140px;
  &::first-letter {
    text-transform: uppercase;
  }
  &:first-child {
    background-color: lightgreen;
  }
  &:last-child {
    background-color: red;
  }
  &:hover {
    box-shadow: 1px 1px 1px black;
  }
`;
