import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  align-items: center;
`;
export const Email = styled.p`
  margin-right: 10px;
  font-weight: 700;
`;
export const Button = styled.button`
  display: inline-flex;
  border-radius: 4px;
  border: none;
  background-color: #f4df7f;
  color: inherit;
  padding: 8px 12px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  &:hover,
  &:focus {
    background-color: #1976d2;
    color: #fff;
  }
`;
