import { Center, Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect } from "react";
import { UserCard } from "../organisms/user/userCard";
import { useAllusers } from "../../hooks/useAllusers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUsers } from "../../hooks/useSelectUsers ";

export const UserManagement: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllusers();
  const { selectedUser, onSelectUser } = useSelectUsers();

  useEffect(() => getUsers(), []);

  const onClickUser = useCallback((id: number) => {
    console.log("user一覧");
    console.log(users);
    onSelectUser({ id, users, onOpen });
  }, []);

  return (
    <>
      {loading ? (
        <Center h={"100vh"}>
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: "4", md: "10" }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx={"auto"}>
              <UserCard id={user.id} imageURL="https://source.unsplash.com/random" userName={user.username} name={user.name} onClick={onClickUser} />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
});
