import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import styles from './grid.module.css';

const YourHome = () => {
  return (
    <Card variant="outlined" className={styles.card_box} sx={{ padding: '15px' }}>
      <div className={styles.card_header}>
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 0 0 20px' }}>
          <div>
            <Typography variant="h6" component="div" sx={{ fontSize: '20px', fontWeight: '600', mb: '5px' }}>
              YOUR HOME
            </Typography>
            <Typography variant="p" component="div" sx={{ fontSize: '13px', fontWeight: '400' }}>
              Account : 224456443353434
            </Typography>
          </div>
          <CardMedia
            className={styles.card_image}
            component="img"
            sx={{ width: 80 }}
            image='./home.png'
            alt="Live from space album cover"
          />
        </CardContent>
      </div>
      <CardContent sx={{ padding: '0'}} className={styles.card_home}>
        <ul className={styles.home_li} style={{ padding: '0', listStyle: 'none' }}>
          <li className={styles.li_item} >
            <Typography variant="b" component="div" sx={{ fontSize: '13px', fontWeight: '600' }}>
              Electric Mete
            </Typography>
            <Typography variant="p" component="div" sx={{ fontSize: '13px', fontWeight: '400' }}>
              67493459649
            </Typography>
          </li>
          <li className={styles.li_item} >
            <Typography variant="b" component="div" sx={{ fontSize: '13px', fontWeight: '600' }}>
              Electric Mete
            </Typography>
            <Typography variant="p" component="div" sx={{ fontSize: '13px', fontWeight: '400' }}>
              67493459649
            </Typography>
          </li>
          <li className={styles.li_item} >
            <Typography variant="b" component="div" sx={{ fontSize: '13px', fontWeight: '600' }}>
              Electric Mete
            </Typography>
            <Typography variant="p" component="div" sx={{ fontSize: '13px', fontWeight: '400' }}>
              67493459649
            </Typography>
          </li>
          <li className={styles.li_item} >
            <Typography variant="b" component="div" sx={{ fontSize: '13px', fontWeight: '600' }}>
              Electric Mete
            </Typography>
            <Typography variant="p" component="div" sx={{ fontSize: '13px', fontWeight: '400' }}>
              67493459649
            </Typography>
          </li>
          <li className={styles.li_item} >
            <Typography variant="b" component="div" sx={{ fontSize: '13px', fontWeight: '600' }}>
              Electric Mete
            </Typography>
            <Typography variant="p" component="div" sx={{ fontSize: '13px', fontWeight: '400' }}>
              67493459649
            </Typography>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}

export default YourHome;
