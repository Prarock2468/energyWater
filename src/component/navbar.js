"use client"
import * as React from 'react';
import Container from '@mui/material/Container';
import Link from 'next/link';
import styles from './nav.module.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import Dropdown from './dropdown';
export default function OffsetGrid() {
  return (
    <>

      <header className={styles.header}>
        <Container maxWidth="lg">
          <nav className={styles.nav_contianer}>
            <Link href={'/'} className={styles.logo} aria-level={'logo'}>
              <span>Pradeep K.</span>
            </Link>
            <ul className={styles.menu_container}>
              <li>
                <Dropdown />
              </li>
              <li>
                <div className={styles.notification}>
                  <NotificationsIcon />
                  <span className={styles.count}>4</span>
                </div>
              </li>
              <li>
                <div className={styles.menu_dropdown}>
                  <div className={styles.dropdown_header}>
                    <AppsIcon />
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </Container>
      </header>
      <div className={styles.vvp_container}>
        <Container maxWidth="lg">
          <h4 className={styles.vpp_overview}>VPP Overview</h4>
        </Container>
      </div>
    </>

  );
}