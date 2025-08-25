import {useCallback} from 'react';
import {FlatList, ListRenderItem, RefreshControl} from 'react-native';
import {useAppNavigation} from '../../../../../../../../../navigation/hooks/useAppNavigation';
import {AppColors} from '../../../../../../../../../theme/AppColors';
import {UserEntity} from '../../../../../../../../domain/entity/user/UserEntity';
import {UserItemMemoized} from '../userItem/UserItem';
import {getUserListStyles} from './styles/UserList.styles';

type PropsUserList = {
  listData: Array<UserEntity>;
  colors: AppColors;
  isRefreshing: boolean;
  isLoading: boolean;
  onLoadNextPage: () => void;
  onRefresh?: () => void;
};

export const UserList = ({
  listData,
  colors,
  isRefreshing,
  onLoadNextPage,
  onRefresh,
}: PropsUserList) => {
  const stylesToUse = getUserListStyles(colors);

  const {navigateToUserDetails} = useAppNavigation();

  const _handleUserItemClick = useCallback(
    (userId: number) => {
      navigateToUserDetails(String(userId));
    },
    [navigateToUserDetails],
  );

  const _renderItem: ListRenderItem<UserEntity> = ({item}) => {
    return (
      <UserItemMemoized
        colors={colors}
        user={item}
        onClickItem={_handleUserItemClick}
      />
    );
  };

  return (
    <FlatList
      testID={'idUserList'}
      style={stylesToUse.listStyle}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={stylesToUse.listContentContainerStyle}
      data={listData}
      keyExtractor={(item, index) => `${String(item.id)}-${index}`}
      renderItem={_renderItem}
      onEndReachedThreshold={0.2}
      onEndReached={onLoadNextPage}
      removeClippedSubviews={false}
      refreshControl={
        <RefreshControl
          tintColor={colors.primary}
          refreshing={isRefreshing}
          onRefresh={onRefresh}
        />
      }
    />
  );
};
