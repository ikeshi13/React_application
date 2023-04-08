import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import { FC, memo, useEffect } from "react";
import { UserCard } from "../organisms/user/userCard";
import { useAllusers } from "../../hooks/useAllusers";

export const UserManagement: FC = memo(() => {
  const { getUsers, users, loading } = useAllusers();
  useEffect(() => getUsers(), []);
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
              <UserCard imageURL="https://source.unsplash.com/random" userName={user.username} name={user.name} />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
});
