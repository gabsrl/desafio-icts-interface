import React from 'react';
import { FaSpinner } from 'react-icons/fa'
import { SpinnerWrapper, SpinnerContainer } from './style';
const Spinner = (props) => {
  return(
    <SpinnerWrapper>
      <FaSpinner style={{fontSize: `${props.size}px`, color: props.color}} />
    </SpinnerWrapper>
  );
}

export {SpinnerContainer};

export default Spinner;

