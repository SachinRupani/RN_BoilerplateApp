import {memo} from 'react';
import {View} from 'react-native';
import {AppColors} from '../../../../../../../theme/AppColors';
import {UserEntity} from '../../../../../../domain/entity/user/UserEntity';
import {AppImageMemoized} from '../../../../../common/appImage/AppImage';
import {AppTextMemoized} from '../../../../../common/appText/AppText';
import {getUserInfoStyles} from './styles/UserInfo.styles';

type PropsUserInfo = {
  user: UserEntity;
  colors: AppColors;
};

const UserInfo = ({user, colors}: PropsUserInfo) => {
  const stylesToUse = getUserInfoStyles(colors);

  const _renderUserInfo = () => {
    return (
      <View style={stylesToUse.infoContainer}>
        {/* Title */}
        <AppTextMemoized
          textString={`${user.firstName} ${user.lastName}`}
          textColorVariant={'text1'}
          textVariant={'xl'}
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
    <View style={stylesToUse.container}>
      {/* Avatar Image */}
      <AppImageMemoized
        imageObj={{
          imageKind: 'url',
          imageAssetUrl: `${user.avatarUrl}`,
        }}
        imageStyles={stylesToUse.imageStyle}
      />

      {/* User Info */}
      {_renderUserInfo()}
    </View>
  );
};

export const UserInfoMemoized = memo(UserInfo, (prevProps, nextProps) => {
  return (
    prevProps?.user?.id === nextProps?.user?.id &&
    prevProps?.user?.firstName === nextProps?.user?.firstName &&
    prevProps?.user?.lastName === nextProps?.user?.lastName &&
    prevProps?.user?.avatarUrl === nextProps?.user?.avatarUrl
  );
});
