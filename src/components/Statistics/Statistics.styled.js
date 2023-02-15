import styled from 'styled-components';

export const StatList = styled.ul`
  list-style: none;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  gap: 10px;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 700;
  border-radius: 6px;
  background-color: lightskyblue;
  width: calc((100% - 80px) / 3);
  justify-content: space-between;
  padding: 10px;
  & span {
    margin-top: 10px;
  }
  &:last-child {
    flex-grow: 1;
  }
`;
