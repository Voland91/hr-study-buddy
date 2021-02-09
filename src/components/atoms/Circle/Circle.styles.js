import styled from 'styled-components';

export const StyledCircle = styled.div`
  width: 34px;
  height: 34px;
  background-color: ${({ theme }) => theme.colors.error};
  background-color: ${({ theme, good }) => good && theme.colors.success};
  background-color: ${({ theme, neutral }) => neutral && theme.colors.warning};
  border-radius: 50px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
