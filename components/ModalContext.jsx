"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const ModalContext = createContext({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
  isLeadSubmitted: false,
  setIsLeadSubmitted: () => {},
});

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLeadSubmitted, setIsLeadSubmitted] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    // Auto-open logic
    if (typeof window !== "undefined" && localStorage.getItem("formSubmitted") === "true") {
      return;
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, isLeadSubmitted, setIsLeadSubmitted }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
