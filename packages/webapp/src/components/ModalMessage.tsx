import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

export interface IModalObject {
  open: Dispatch<SetStateAction<boolean>>;
  markup: React.ReactElement;
}

export interface IModalTemplate {
  close?: () => void;
  confirm?: (id?: number) => void;
}

const useModalMessage = ({ close, confirm }: IModalTemplate): IModalObject => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => {
    if (close) close();
    setIsOpen(false);
  };
  const handleConfirm = () => {
    if (confirm) confirm();
    setIsOpen(false);
  };

  const markup: React.ReactElement = (
    <Modal isOpen={isOpen} toggle={handleClose}>
      <ModalHeader closeButton>
        Send a message to <span className={"fw-bold"}>Michael</span>!
      </ModalHeader>
      <ModalBody>
        The message you are composing will be sent to Slack.
        <FormGroup>
          <Label for="exampleText">You Message</Label>
          <Input id="exampleText" name="text" type="textarea" />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleConfirm}>
          Message
        </Button>
        <Button color="secondary" onClick={handleClose}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );

  return { open: setIsOpen, markup };
};

export default useModalMessage;
