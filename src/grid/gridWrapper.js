import React from 'react'
import styles from './grid.module.css'
import Container from '@mui/material/Container';
import CustomeTab from './cardTab'
import CardUi from './cardUI';
import YourHome from './yourHome';
const GridWrapper = () => {
  return (
    <section className={styles.gridWrapper}>
      <Container>
        <div className={styles.grid}>
             <div className={`${styles.grid_col} ${styles.grid_col_1}`}>
                <CardUi/>
                <CustomeTab />
             </div>
             <div className={`${styles.grid_col} ${styles.grid_col_2}`}>
                 <YourHome/>
             </div>
        </div>
      </Container>
    </section>
  )
}

export default GridWrapper