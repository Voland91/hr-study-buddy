import styled from 'styled-components';

export const StyledTitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.l};
`;
