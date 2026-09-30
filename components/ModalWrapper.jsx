"use client";

import { useModal } from "./ModalContext";
import InvestmentModal from "./InvestmentModal";

export default function ModalWrapper() {
  const { isOpen, closeModal, setIsLeadSubmitted } = useModal();

  return (
    <InvestmentModal 
      onClose={closeModal} 
      isOpen={isOpen} 
      setIsSubmitted={setIsLeadSubmitted}
    />
  );
}
