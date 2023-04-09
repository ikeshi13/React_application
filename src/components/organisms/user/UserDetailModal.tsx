import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack } from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useEffect, useState } from "react";
import { User } from "../../../types/api/user";
import { PrimaryButtom } from "../../atoms/buttom/PrimaruButtom";

type Props = {
  user: User | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};

export const UserDetailModal: FC<Props> = memo((props) => {
  const { user, isOpen, isAdmin = false, onClose } = props;

  const [username, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setUserName(user?.username ?? "");
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
  }, [user]);

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const onClickUpdate = () => alert("更新ボタン");

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
      <ModalOverlay>
        <ModalContent pb={2}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton></ModalCloseButton>
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input value={username} onChange={onChangeUserName} isReadOnly={!isAdmin} />
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input value={name} onChange={onChangeName} isReadOnly={!isAdmin} />
              </FormControl>
              <FormControl>
                <FormLabel>mail</FormLabel>
                <Input value={email} onChange={onChangeEmail} isReadOnly={!isAdmin} />
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input value={phone} onChange={onChangePhone} isReadOnly={!isAdmin} />
              </FormControl>
            </Stack>
          </ModalBody>
          {/* 管理者権限（isAdmin = 10の場合表示... */}
          {isAdmin && (
            <ModalFooter>
              <PrimaryButtom onClick={onClickUpdate}>更新</PrimaryButtom>
            </ModalFooter>
          )}
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
});
