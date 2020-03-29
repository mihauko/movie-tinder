import styled from 'styled-components';


export const BackgroundImage = styled.div`
  background: url(${({ src }) => src}) center center / cover no-repeat rgb(250, 250, 250);
  width: 100%;
  min-height: 15rem;
  flex: 1 0 auto;
`;
