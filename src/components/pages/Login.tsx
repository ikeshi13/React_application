import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { PrimaryButtom } from "../atoms/buttom/PrimaruButtom";

export const Login: FC = memo(() => {
  const [userId, setUserId] = useState("");
  const { login, loading } = useAuth();

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);

  const onClickLogin = () => login(userId);
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        /**ログイン画面ヘッダー */
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        /**ログイン機能 */
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId} />
          <PrimaryButtom disabled={userId === ""} loading={loading} onClick={onClickLogin}>
            ログイン
          </PrimaryButtom>
        </Stack>
      </Box>
    </Flex>
  );
});
