import styled from 'styled-components';

export const StyledCircle = styled.div`
  width: 34px;
  height: 34px;
  background-color: ${({ theme }) => theme.colors.error};
  border-radius: 50px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;
