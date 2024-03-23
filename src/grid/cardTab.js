'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TableChartIcon from '@mui/icons-material/TableChart';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import CustomPaginationActionsTable from './customeTable';
import MyChart from './CustomChart';
import DataToExcel from './dataToExcel';
function CustomTab(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Card variant="outlined" sx={{ width: '100%', mt: '20px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab icon={<InsertChartIcon />} sx={{ minWidth: 'fit-content' }} />
          <Tab icon={<TableChartIcon />} sx={{ minWidth: 'fit-content' }} />
        </Tabs>
        <Typography sx={{ fontSize: 12, paddingRight: 1.5 }} color="text.secondary">
          Period: Dec 2018 To Nov 2019
        </Typography>
      </Box>
      <CustomTab value={value} index={0}>
        <MyChart/>
      </CustomTab>
      <CustomTab value={value} index={1}>
        <CustomPaginationActionsTable />
      </CustomTab>
      <DataToExcel />
    </Card>
  );
}