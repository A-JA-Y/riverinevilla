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
    // Auto-open logic. Storage can throw when the browser blocks site data;
    // treat that as "not submitted" rather than breaking the page.
    let submitted = false;
    try {
      submitted = localStorage.getItem("formSubmitted") === "true";
    } catch {}
    if (submitted) return;

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
