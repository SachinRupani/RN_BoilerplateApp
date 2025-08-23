import {memo, useRef} from "react";
import {KeyboardTypeOptions, TextInput, View} from "react-native";
import {AppDefaults} from "../../../../config/AppDefaults";
import {AppColors} from "../../../../theme/AppColors";
import {getSafeString} from "../../../../utils/GeneralUtils";
import {AppTextMemoized} from "../appText/AppText";
import {getAppTextInputStyles} from "./styles/AppTextInput.styles";

export type PropsAppTextInput = {
  colors: AppColors;
  keyboardType?: KeyboardTypeOptions;
  characterLimit?: number;
  label?: string;
  initialValue?: string;
  isSecureEntry?: boolean;
  placeholderText?: string;
  onChangeText?: (text: string) => void;
};

const AppTextInput = ({
  colors,
  keyboardType,
  characterLimit,
  placeholderText = "",
  initialValue = "",
  isSecureEntry = false,
  label,
  onChangeText,
}: PropsAppTextInput) => {
  const valueRef = useRef<string>(initialValue ?? "");

  const textInputStyles = getAppTextInputStyles(colors);

  const strLabel: string = getSafeString(label);

  return (
    <View style={textInputStyles.container}>
      {/* Label */}
      {strLabel.length > 0 && (
        <AppTextMemoized
          textString={strLabel}
          textColorVariant="text2"
          textVariant="sm"
        />
      )}

      {/* Text Input */}

      <TextInput
        style={textInputStyles.textInputStyle}
        placeholderTextColor={colors.text4}
        keyboardType={keyboardType}
        maxLength={characterLimit ?? AppDefaults.CHARACTER_LIMITS.EMAIL}
        defaultValue={initialValue}
        placeholder={placeholderText}
        secureTextEntry={isSecureEntry}
        onChangeText={(newText: string) => {
          valueRef.current = newText;
          onChangeText?.(newText);
        }}
      />
    </View>
  );
};

export const AppTextInputMemoized = memo(AppTextInput);
