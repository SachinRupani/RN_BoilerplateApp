import {memo} from "react";
import FastImage from "react-native-fast-image";

type PropsAppImage = {
  imageUrl: string;
  resizeMode?: "center" | "contain" | "cover" | "stretch";
  imageStyles?: any;
};

const AppImage = ({imageUrl, resizeMode, imageStyles}: PropsAppImage) => {
  return (
    <FastImage
      resizeMode={resizeMode ?? `cover`}
      style={{width: 48, height: 48, ...imageStyles}}
      source={{
        uri: imageUrl,
        priority: FastImage.priority.normal,
      }}
    />
  );
};

export const AppImageMemoized = memo(AppImage);
