import React, {memo, useEffect, useMemo, useRef} from 'react';
import {Animated, View} from 'react-native';
import {AppColors} from '../../../../theme/AppColors';
import {AppComponentColorType} from '../appButton/data/AppComponentColorType';
import {getAppProgressBarStyles} from './styles/AppProgressBar.styles';

type PropsAppProgressBar = {
  colors: AppColors;
  progressPercent: number; // should not be greater than 100
  colorType?: AppComponentColorType;
  durationAnimMilliseconds?: number;
};

const AppProgressBar = ({
  colors,
  progressPercent,
  colorType = AppComponentColorType.Primary,
  durationAnimMilliseconds = 700,
}: PropsAppProgressBar) => {
  const stylesToUse = getAppProgressBarStyles(colors);
  const animValue = useRef(new Animated.Value(0)).current;

  const withinBoundPercentage = useMemo(() => {
    return Math.max(0, Math.min(100, progressPercent));
  }, [[progressPercent]]);

  const isSecondaryColor = colorType === AppComponentColorType.Secondary;

  useEffect(() => {
    Animated.timing(animValue, {
      toValue: withinBoundPercentage / 100,
      duration: durationAnimMilliseconds,
      useNativeDriver: true,
    }).start();
  }, [progressPercent, durationAnimMilliseconds, animValue]);

  return (
    <View
      style={[
        stylesToUse.trackContainer,
        isSecondaryColor
          ? stylesToUse.trackSecondary
          : stylesToUse.trackPrimary,
      ]}>
      <Animated.View
        style={[
          stylesToUse.fillBar,
          isSecondaryColor
            ? stylesToUse.fillBarSecondary
            : stylesToUse.fillBarPrimary,
          {transform: [{scaleX: animValue}]},
        ]}></Animated.View>
    </View>
  );
};

export const AppProgressBarMemoized = memo(AppProgressBar);
