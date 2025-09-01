import {useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';
import {useAppTheme} from '../../../../theme/ThemeContext';
import {AppButtonMemoized} from '../appButton/AppButton';
import {AppTextMemoized} from '../appText/AppText';

export const TestComponent = () => {
  const {colors} = useAppTheme();

  const [reverseCounter, setReverseCounter] = useState<number>(-1);

  useEffect(() => {
    let timeoutInstance: NodeJS.Timeout | undefined = undefined;
    if (reverseCounter > 0) {
      timeoutInstance = setTimeout(() => {
        setReverseCounter(prev => prev - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timeoutInstance);
    };
  }, [reverseCounter]);

  const _startCountDown = () => {
    setReverseCounter(10);
  };

  const _handleClick = useCallback(_startCountDown, []);

  return (
    <View>
      {reverseCounter >= 0 && (
        <AppTextMemoized textVariant="3xl" textString={`${reverseCounter}`} />
      )}
      <AppButtonMemoized
        colorsToUse={colors}
        textString="Start"
        onClickAction={_handleClick}
      />
    </View>
  );
};
