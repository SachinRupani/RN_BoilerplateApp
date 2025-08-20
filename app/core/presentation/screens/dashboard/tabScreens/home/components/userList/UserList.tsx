import {FlatList, ListRenderItem} from "react-native";
import {AppColors} from "../../../../../../../../theme/AppColors";
import {UserEntity} from "../../../../../../../domain/entity/user/UserEntity";
import {UserItemMemoized} from "../userItem/UserItem";

type PropsUserList = {
  listData: Array<UserEntity>;
  colors: AppColors;
};

export const UserList = ({listData, colors}: PropsUserList) => {
  const _renderItem: ListRenderItem<UserEntity> = ({item}) => {
    return <UserItemMemoized colors={colors} user={item} />;
  };

  return (
    <FlatList
      data={listData}
      keyExtractor={item => String(item.id)}
      renderItem={_renderItem}
    />
  );
};
