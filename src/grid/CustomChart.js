import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Data } from '@/utils/tableData';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const MyChart = () => {
  const [selectedYear, setSelectedYear] = useState(2019); // Set default year to 2019

  // Filter data for the selected year and current month
  const filteredData = Data.filter(item => {
    const itemDate = new Date(item.Month);
    return itemDate.getFullYear() === selectedYear &&
      itemDate <= new Date(); // Only include data up to the current month
  });

  // Extracting month names and average power data
  const categories = filteredData.map(item => item.Month);
  const data = filteredData.map(item => item.Average_Power);

  const config = {
    chart: {
      type: 'line',
      title: 'Data Chart'
    },
    xAxis: {
      title: {
        text: 'Month'
      },
      categories: categories,
    },
    yAxis: {
      title: {
        text: 'AVG. POWER FACTOR (%)'
      }
    },
    series: [{
      name: 'AVG. POWER FACTOR (%)',
      data: data,
    }]
  };

  const years = Array.from(new Set(Data.map(item => new Date(item.Month).getFullYear()))); // Extract unique years

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedYear}
          label="Select Year"
          onChange={e => setSelectedYear(parseInt(e.target.value))}
        >
          {years.map(year => (
            <MenuItem key={year} value={year}>{year}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <HighchartsReact
        highcharts={Highcharts}
        options={config}
      />
    </div>
  );
}

export default MyChart;
