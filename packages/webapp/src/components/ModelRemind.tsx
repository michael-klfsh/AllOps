import React, { Dispatch, SetStateAction, useState } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";

export interface IModalObject {
  open: Dispatch<SetStateAction<boolean>>;
  markup: React.ReactElement;
}

export interface IModalTemplate {
  close?: () => void;
  confirm?: (id?: number) => void;
}

const useModalRemind = ({ close, confirm }: IModalTemplate): IModalObject => {
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
      <ModalHeader closeButton>Send Payment Reminder</ModalHeader>
      <ModalBody>
        Upon confirmation, a payment reminder will be sent to the client's
        e-mail. The bill will be automatically generated and archived within the
        filesystem.
        <p>
          Are you sure you want to remind <strong>KORAIL</strong>'s bill (ID:
          365837215)?
        </p>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleConfirm}>
          Remind
        </Button>
        <Button color="secondary" onClick={handleClose}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );

  return { open: setIsOpen, markup };
};

export default useModalRemind;
