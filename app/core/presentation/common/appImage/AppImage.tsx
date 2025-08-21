import {memo} from "react";
import FastImage from "react-native-fast-image";
import {Images} from "../../../../../assets/images";

type PropsAppImage = {
  imageObj: ImageObject;
  resizeMode?: "center" | "contain" | "cover" | "stretch";
  imageStyles?: any;
  fallbackPlaceholder?: any;
};

const AppImage = ({
  imageObj,
  resizeMode,
  fallbackPlaceholder = Images.USER_PLACEHOLDER,
  imageStyles,
}: PropsAppImage) => {
  // Image
  const _renderImage = () => {
    const _getImageSource = () => {
      // URL
      if (
        imageObj.imageKind === `url` &&
        String(imageObj.imageAssetUrl).trim().length > 0
      ) {
        return {
          uri: imageObj.imageAssetUrl,
          priority: FastImage.priority.normal,
        };
      }

      // Local asset
      if (imageObj.imageKind === "asset" && imageObj.imageAssetUrl) {
        return imageObj.imageAssetUrl;
      }

      return fallbackPlaceholder;
    };

    return (
      <FastImage
        resizeMode={resizeMode ?? `cover`}
        style={{width: 48, height: 48, ...imageStyles}}
        source={_getImageSource()}
      />
    );
  };

  return _renderImage();
};

export const AppImageMemoized = memo(AppImage);
