import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  imageURL: string;
  userName: string;
  name: string;
};

export const UserCard: FC<Props> = memo((props) => {
  const { imageURL, userName, name } = props;
  return (
    <Box w="260px" h="260px" bg="white" borderRadius="10px" shadow="md" p="4" _hover={{ cursor: "pointer", opacity: "0.8" }}>
      <Stack textAlign="center">
        <Image borderRadius="full" boxSize="160px" src={imageURL} alt={userName} m="auto" />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color={"gray"}>
          {name}
        </Text>
      </Stack>
    </Box>
  );
});
