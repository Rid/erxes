import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles';
import { rgba } from '../styles/color';
import Rotate from '../utils/animateRotate';

const WrapperLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: ${colors.colorPrimary};
  width: 70px;
  height: 60px;
  z-index: 101;
  border-bottom: 1px solid ${rgba(colors.colorWhite, 0.1)};
`;

const MainLoader = styled.div`
  position: relative;
  margin: 16px auto;
  width: 25px;
  height: 25px;
  animation: ${Rotate} 0.75s linear infinite;
  border: 2px solid ${colors.colorWhite};
  border-top-color: ${rgba(colors.colorBlack, 0.2)};
  border-right-color: ${rgba(colors.colorBlack, 0.2)};
  border-bottom-color: ${rgba(colors.colorBlack, 0.2)};
  border-radius: 100%;
`;

function Loader() {
  return (
    <WrapperLoader>
      <MainLoader />
    </WrapperLoader>
  );
}

export default Loader;
