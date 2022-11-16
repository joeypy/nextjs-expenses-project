import React, { useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {
  Bar as BarChartJS,
  getDatasetAtEvent,
  getElementAtEvent,
} from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Ingresos',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(0, 209, 10, 0.5)',
    },
    {
      label: 'Egresos',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(235, 34, 34, 0.5)',
    },
    {
      label: 'Diferencia',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(252, 247, 0, 0.5)',
    },
  ],
};

export const CustomBarChart = () => {
  const chartRef = useRef<any>();

  const onClick = (event: any) => {
    console.log(getElementAtEvent(chartRef.current, event));
  };

  return (
    <BarChartJS
      ref={chartRef}
      options={options}
      data={data}
      onClick={onClick}
    />
  );
};
