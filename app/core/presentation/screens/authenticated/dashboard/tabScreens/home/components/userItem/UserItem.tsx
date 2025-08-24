import React, {memo} from 'react';
import {View} from 'react-native';
import {AppColors} from '../../../../../../../../../theme/AppColors';
import {UserEntity} from '../../../../../../../../domain/entity/user/UserEntity';
import {AppImageMemoized} from '../../../../../../../common/appImage/AppImage';
import {AppTextMemoized} from '../../../../../../../common/appText/AppText';
import {AppTouchableSection} from '../../../../../../../common/appTouchableSection/AppTouchableSection';
import {getUserItemStyles} from './styles/UserItem.styles';

type PropsUserItem = {
  user: UserEntity;
  colors: AppColors;
  onClickItem?: (userId: number) => void;
};

const UserItem = ({user, colors, onClickItem}: PropsUserItem) => {
  const stylesToUse = getUserItemStyles(colors);

  const _handleClick = () => {
    onClickItem?.(user.id);
  };

  const _renderUserInfo = () => {
    return (
      <View style={stylesToUse.infoContainer}>
        {/* Title */}
        <AppTextMemoized
          textString={`${user.firstName} ${user.lastName}`}
          textColorVariant={'text1'}
          textVariant={'large'}
        />

        {/* Email */}
        <AppTextMemoized
          textString={`${user.email}`}
          textColorVariant={'text2'}
          textVariant={'sm'}
        />
      </View>
    );
  };

  return (
    <AppTouchableSection
      testID={`idUserItem${user.id}`}
      styles={stylesToUse.container}
      onPressAction={_handleClick}>
      {/* Avatar Image */}
      <AppImageMemoized
        imageObj={{
          imageKind: 'url',
          imageAssetUrl: `${user.avatarUrl}`,
        }}
        imageStyles={stylesToUse.imageStyle}
      />

      {/* Name and Email Info */}
      {_renderUserInfo()}
    </AppTouchableSection>
  );
};

export const UserItemMemoized = memo(UserItem, (prevProps, nextProps) => {
  return (
    prevProps?.user?.id === nextProps?.user?.id &&
    prevProps?.user?.firstName === nextProps?.user?.firstName &&
    prevProps?.user?.lastName === nextProps?.user?.lastName &&
    prevProps?.user?.avatarUrl === nextProps?.user?.avatarUrl
  );
});
