import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View``;

interface Props {
  width: number;
  height: number;
  list: string[];
  value: string;
  setValue: (newValue: string) => void;
  displayCount?: number;
}

const WheelPicker: React.FC<Props> = ({displayCount = 5, value, list}) => {
  const displayList = [];
  let targetIndex = list.findIndex((item) => item === value);

  if (targetIndex === -1) targetIndex = 0;

  const halfDisplayCount = Math.floor(displayCount / 2);

  for (
    let i = targetIndex - halfDisplayCount;
    i <= targetIndex + halfDisplayCount;
    i++
  ) {}

  return <Container>{}</Container>;
};

export default WheelPicker;
