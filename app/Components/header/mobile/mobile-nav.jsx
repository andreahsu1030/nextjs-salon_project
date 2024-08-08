"use client";
import styles from "./mobile-nav.module.sass";
import Modal from '@/Components/header/mobile/modal'
import Menu from "./menu";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";


export default function MobileNav({ routes }) {
  const [navVisible, setNavVisible] = useState(false);
  
  const handleMenuOpen = () => {
    setNavVisible(true);
  };

  const handleMenuClose = () =>{
    setNavVisible(false)
  }

  return (
    <>
      <div className={styles.burger} onClick={handleMenuOpen}>
          <IoMenu  size={30} />
      </div>

      {navVisible && (
        <Modal onClose={handleMenuClose} >
          <Menu routes={routes} />
        </Modal>
      )

      }
    </>
  );
}
