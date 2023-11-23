import React, { Dispatch, SetStateAction, useState } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";

export interface IModalObject {
  open: Dispatch<SetStateAction<boolean>>;
  markup: React.ReactElement;
}

export interface IModalTemplate {
  close: () => void;
  confirm: (id?: number) => void;
}

const useModalDelete = ({ close, confirm }: IModalTemplate): IModalObject => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => {
    close();
    setIsOpen(false);
  };
  const handleConfirm = () => {
    confirm();
    setIsOpen(false);
  };

  const markup: React.ReactElement = (
    <Modal isOpen={isOpen} toggle={handleClose}>
      <ModalHeader closeButton>Confirm Deletion</ModalHeader>
      <ModalBody>
        Are you sure that you want to delete the selected item(s) permanently?
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleClose}>
          Delete Entry
        </Button>{" "}
        <Button color="secondary" onClick={handleConfirm}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );

  return { open: setIsOpen, markup };
};

export default useModalDelete;
