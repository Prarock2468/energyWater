import React from 'react'
import { Data } from '@/utils/tableData';
import * as XLSX from 'xlsx'
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
const DataToExcel = () => {
  const exportToExcel = () => {
    if (Data) {
      const worksheet = XLSX.utils.json_to_sheet(Data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Table Data');
      XLSX.writeFile(workbook, 'table_data.xlsx');
    } else {
      console.error("No data available to export to Excel.");
    }
  };
  return (
    <Button onClick={exportToExcel} sx={{ mt: 1.5, mb:2.5, fontSize: '12px', fontWeight: '700' }}>
      <DownloadIcon sx={{ fontSize: '15px', fontWeight: '700', mr: '6px' }} /> Export To Excel
    </Button>
  )
}

export default DataToExcel