import styled from 'styled-components';

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  height: 90px;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
`;

const StyledTextWrapper = styled.div`
  margin: 24px;
  display: flex;
  flex-direction: column;
`;

export { Wrapper, StyledTextWrapper };
