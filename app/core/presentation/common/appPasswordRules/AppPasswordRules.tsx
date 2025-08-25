import {memo} from 'react';
import {View} from 'react-native';
import {AppColors} from '../../../../theme/AppColors';
import {PasswordRuleEntity} from '../../../domain/entity/login/PasswordRuleEntity';
import {AppTextMemoized} from '../appText/AppText';
import {getAppPasswordRulesStyles} from './styles/AppPasswordRules.styles';

type PropsAppPasswordRules = {
  colors: AppColors;
  rules: Array<PasswordRuleEntity>;
  title?: string;
  testID?: string;
};

const AppPasswordRules = ({
  colors,
  testID,
  rules,
  title = 'Password should',
}: PropsAppPasswordRules) => {
  const stylesToUse = getAppPasswordRulesStyles(colors);

  return (
    <View style={stylesToUse.container} testID={testID}>
      {/* Title */}
      <AppTextMemoized
        textString={title}
        textVariant="sm"
        extraTextStyle={stylesToUse.textStyle}
      />

      {/* Rules */}
      {rules.map((ruleEntity, index) => {
        return (
          <AppTextMemoized
            key={`rule-${index}`}
            textString={ruleEntity.textString}
            textColorVariant={ruleEntity.isSatisfied ? 'success' : 'error'}
            textVariant="sm"
            extraTextStyle={stylesToUse.textStyle}
          />
        );
      })}
    </View>
  );
};

export const AppPasswordRulesMemoized = memo(AppPasswordRules);
