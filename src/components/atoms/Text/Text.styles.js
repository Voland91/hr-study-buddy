import styled from 'styled-components';

export const StyledText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.s};
`;
