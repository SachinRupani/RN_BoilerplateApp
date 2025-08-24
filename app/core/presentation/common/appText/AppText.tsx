import {memo} from 'react';
import {Text} from 'react-native';
import {useAppTheme} from '../../../../theme/ThemeContext';
import {TextColorVariant} from './data/TextColorVariant';
import {TextVariant} from './data/TextSizeVariant';
import {getAppTextStyles} from './styles/AppText.styles';

type PropsAppText = {
  textString: string;
  textVariant?: TextVariant;
  textColorVariant?: TextColorVariant;
  extraTextStyle?: any;
};

const AppText = ({
  textString,
  textVariant,
  textColorVariant,
  extraTextStyle,
}: PropsAppText) => {
  const {colors} = useAppTheme();
  const stylesToUse = getAppTextStyles(colors, textVariant, textColorVariant);

  return (
    <Text
      style={[stylesToUse.textStyle, extraTextStyle ? extraTextStyle : null]}>
      {textString}
    </Text>
  );
};

export const AppTextMemoized = memo(AppText);
