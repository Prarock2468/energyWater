import styles from './grid.module.css'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
const CardUi = () => {
  return (
    <div className={styles.card_wrapper}>
      <Card variant="outlined" className={styles.card_box} sx={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', padding: 1.5, gap: 1.5 }}>
        <CardContent className={styles.card_left} sx={{ padding: '0' }}>
          <Typography variant="h6" component="div" sx={{ mb: 1, fontSize: 16 }}>
            AI-Powered Connected
          </Typography>
          <Typography sx={{ mb: 1.5, fontSize: 12 }} color="text.secondary">
            Customer CX and Workforce WX Experience
            Industry Cloud Platforms
            Customer CX and Workforce WX Experience
            Industry Cloud Platforms
          </Typography>
          <Button size="small" sx={{ textTransform: 'capitalize', fontWeight: "500" }}>
            See Why this is happing
          </Button>
        </CardContent>
        <CardMedia
          className={styles.card_image}
          component="img"
          sx={{ width: 120 }}
          image='./chart.png'
          alt="Live from space album cover"
        />
      </Card>

      <Card variant="outlined" className={styles.card_box} sx={{ mt: '20px', display: 'flex', justifyContent: 'space-between', padding: 1.5, gap: 1.5, alignItems: 'center' }}>
        <CardContent className={styles.card_left} sx={{ padding: '0' }}>
          <Typography variant="h6" component="div" sx={{ mb: 1, fontSize: 16 }}>
            AI-Powered Connected
          </Typography>
          <Typography sx={{ mb: 1.5, fontSize: 12 }} color="text.secondary">
            Customer CX and Workforce WX Experience
            Industry Cloud Platforms
            Customer CX and Workforce WX Experience
            Industry Cloud Platforms
          </Typography>
          <Button size="small" sx={{ textTransform: 'capitalize', fontWeight: "500" }}>Learn More</Button>
        </CardContent>
        <CardContent>
          <Typography variant="p" component="div" sx={{ mb: .8, fontSize: 11, fontWeight: '700', textTransform: 'uppercase' }}>
            Electricity Bill
          </Typography>
          <Typography variant="p" color="text.secondary" component="div" sx={{ fontSize: 20, fontWeight: '700', textTransform: 'uppercase' }}>
            $90.00
          </Typography>
        </CardContent>
      </Card>
    </div>

  )
}

export default CardUi