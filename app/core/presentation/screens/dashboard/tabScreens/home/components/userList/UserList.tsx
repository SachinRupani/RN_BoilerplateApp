import {FlatList, ListRenderItem} from "react-native";
import {AppColors} from "../../../../../../../../theme/AppColors";
import {UserEntity} from "../../../../../../../domain/entity/user/UserEntity";
import {UserItemMemoized} from "../userItem/UserItem";
import {getUserListStyles} from "./styles/UserList.styles";

type PropsUserList = {
  listData: Array<UserEntity>;
  colors: AppColors;
  onLoadNextPage: () => void;
};

export const UserList = ({listData, colors, onLoadNextPage}: PropsUserList) => {
  const stylesToUse = getUserListStyles(colors);

  const _renderItem: ListRenderItem<UserEntity> = ({item}) => {
    return <UserItemMemoized colors={colors} user={item} />;
  };

  return (
    <FlatList
      style={stylesToUse.listStyle}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={stylesToUse.listContentContainerStyle}
      data={listData}
      keyExtractor={(item, index) => `${String(item.id)}-${index}`}
      renderItem={_renderItem}
      onEndReachedThreshold={0.2}
      onEndReached={onLoadNextPage}
    />
  );
};
