import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface InputSliderProps {
  value: number;
  onChange: () => {};
}

function InputSlider(props): InputSliderProps {
  const { value, onChange } = props;

  return (
    <Slider min={0} max={5} value={value} step={0.1} onChange={onChange} />
  );
}

export default InputSlider;
