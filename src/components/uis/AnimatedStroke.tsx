import React, {useRef, useState} from 'react';
import {Animated} from 'react-native';
import {Path, PathProps} from 'react-native-svg';

interface Props {
  progress: Animated.Value;
}

const AnimatedPath = Animated.createAnimatedComponent(Path);

const AnimatedStroke: React.FC<Props & PathProps> = ({
  progress,
  ...pathProps
}) => {
  const [length, setLength] = useState(0);
  const ref = useRef(null);

  return (
    <AnimatedPath
      ref={ref}
      onLayout={() => setLength(ref.current.getTotalLength)}
      {...pathProps}
      strokeDasharray={length}
      strokeDashoffset={progress.interpolate({
        inputRange: [0, 1],
        outputRange: [length, 1],
      })}
    />
  );
};

export default AnimatedStroke;
