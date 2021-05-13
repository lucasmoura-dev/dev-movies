import styled from 'styled-components/native';

import colors from '@styles/colors';

type ContainerProps = {
  coverWidth?: number;
  coverHeight?: number;
};

export const Container = styled.View<ContainerProps>`
  background: ${colors.mediumGrey};
  width: ${p => (p.coverWidth ? `${p.coverWidth}px` : '150px')};
  height: ${p => (p.coverHeight ? `${p.coverHeight}px` : '220px')};
  border-radius: 10px;
`;

export const Cover = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
