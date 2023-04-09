import { Center, Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect } from "react";
import { UserCard } from "../organisms/user/userCard";
import { useAllusers } from "../../hooks/useAllusers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUsers } from "../../hooks/useSelectUsers ";
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManagement: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllusers();
  const { selectedUser, onSelectUser } = useSelectUsers();
  const { loginUser } = useLoginUser();

  useEffect(() => getUsers(), []);

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen });
    },
    [users, onSelectUser, onOpen]
  );

  return (
    <>
      /**ロードフラグがtrueの場合はチャクラUIのスピナーを設定 */
      {loading ? (
        <Center h={"100vh"}>
          <Spinner />
        </Center>
      ) : (
        /**ロードフラグがfalseの場合ユーザー一覧を表示
         */
        <Wrap p={{ base: "4", md: "10" }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx={"auto"}>
              <UserCard id={user.id} imageURL="https://source.unsplash.com/random" userName={user.username} name={user.name} onClick={onClickUser} />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} isAdmin={loginUser?.isAdmin} />
    </>
  );
});
