'use client'
import React, { useState } from 'react';
import styles from './nav.module.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Link from 'next/link';
const Dropdown = () => {
  const [status, setStatus] = useState(false)
  const handleClick = () => {
    setStatus(!status)
  }
  const handleClose = () => {
    setStatus(false)
  }
  return (
    <>
      <div className={styles.user_dropdown}>
        <div className={styles.dropdown_header} on onClick={handleClick}>
          <AccountCircleIcon className={styles.user_icon} />
          <span className={styles.drop_title}>Pradeep</span>
          <KeyboardArrowDownIcon className={`${styles.arrow}`} />
        </div>
        <div className={`${styles.dropDwopList_wrapper} ${status ? styles.show_dropdown : ''}`}>
          <ul>
            <li  onClick={handleClose}>
              <Link href={'/'} className={styles.itemLink}>
                <PhoneInTalkIcon />
                <span>+91-9935990927</span>
              </Link>
            </li>
            <li onClick={handleClose}>
              <Link href={'/'} className={styles.itemLink}>
                <MarkEmailReadIcon />
                <span>Prarock2468@gmail</span>
              </Link>
            </li>
            <li onClick={handleClose}>
              <Link href={'/'} className={styles.itemLink}>
                <BusinessCenterIcon />
                <span>
                  Portfolio
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div >
    </>
  )
}

export default Dropdown


