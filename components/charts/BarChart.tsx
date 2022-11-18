import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { Box, Typography } from '@mui/material';
import { linearGradientDef } from '@nivo/core';

interface Props {}

export const BarChart = (props: Props) => {
  const data = [
    {
      date: 'Enero',
      year: 2022,
      Gastos: 92,
      Ingresos: 50,
      Beneficio: 42,
      Perdidas: 25,
    },
    {
      date: 'Febrero',
      year: 2022,
      Gastos: 152,
      Ingresos: 15,
      Beneficio: 137,
      Perdidas: 25,
    },
    {
      date: 'Marzo',
      year: 2022,
      Gastos: 10,
      Ingresos: 58,
      Beneficio: 48,
      Perdidas: 25,
    },
    {
      date: 'Abril',
      year: 2022,
      Gastos: 132.25,
      Ingresos: 155,
      Beneficio: 48,
      Perdidas: 25,
    },
    {
      date: 'Mayo',
      year: 2022,
      Gastos: 10,
      Ingresos: 58,
      Beneficio: 48,
      Perdidas: 25,
    },
    {
      date: 'Junio',
      year: 2022,
      Gastos: 10,
      Ingresos: 58,
      Beneficio: 48,
      Perdidas: 0,
    },
    // {
    //   date: 'Julio',
    //   Gastos: 132.25,
    //   Ingresos: 155,
    //   Beneficio: 25,
    // },
    // {
    //   date: 'Agosto',
    //   Gastos: 10,
    //   Ingresos: 58,
    //   Beneficio: 48,
    // },
    // {
    //   date: 'Septiembre',
    //   Gastos: 10,
    //   Ingresos: 58,
    //   Beneficio: 48,
    // },
    // {
    //   date: 'Octubre',
    //   Gastos: 132.25,
    //   Ingresos: 155,
    //   Beneficio: 25,
    // },
    // {
    //   date: 'Noviembre',
    //   Gastos: 10,
    //   Ingresos: 58,
    //   Beneficio: 48,
    // },
    // {
    //   date: 'Diciembre',
    //   Gastos: 10,
    //   Ingresos: 58,
    //   Beneficio: 48,
    // },
  ];

  const colors = {
    Ingresos: '#00ee00',
    Gastos: '#ffee00',
    Perdidas: 'red',
    Beneficio: '#0059ff',
  };
  const getColor = (bar: any) => (colors as any)[bar.id];

  return (
    <ResponsiveBar
      data={data}
      fill={[{ match: '*', id: 'gradientA' }]}
      defs={[
        linearGradientDef('gradientA', [
          { offset: 0, color: 'inherit', opacity: 1 },
          { offset: 20, color: 'inherit', opacity: 0.6 },
          { offset: 100, color: 'inherit', opacity: 0.1 },
        ]),
      ]}
      colors={getColor}
      keys={['Ingresos', 'Gastos', 'Beneficio', 'Perdidas']}
      indexBy="date"
      margin={{ top: 20, right: 20, bottom: 65, left: 80 }}
      padding={0.2}
      innerPadding={4}
      groupMode="grouped"
      valueScale={{ type: 'linear' }}
      borderRadius={5}
      valueFormat=">-$"
      borderColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      enableGridX={true}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Monto',
        legendPosition: 'middle',
        legendOffset: -60,
      }}
      borderWidth={2}
      theme={{
        background: 'transparent',
        textColor: '#ffffff',
        fontSize: 14,
        tooltip: {
          container: {
            background: '#ffffff',
            color: '#333333',
            fontSize: 14,
          },
        },
        axis: {
          legend: {
            text: {
              fontSize: 20,
              fill: '#fff',
            },
          },
        },
      }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 20,
          translateY: 60,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      onClick={console.log}
    />
  );
};
