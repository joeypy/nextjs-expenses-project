import React, { useState } from 'react';
import { BarDatum, ResponsiveBar } from '@nivo/bar';
import { Box, Typography } from '@mui/material';
import { linearGradientDef } from '@nivo/core';

interface Props {
  isLabelsVisible?: boolean;
}

interface ITable extends BarDatum {
  date: string;
  year: number;
  Gastos: number;
  Ingresos: number;
  Beneficio: number;
  Perdidas: number;
}

export const BarChart = ({ isLabelsVisible = false }: Props) => {
  const data: ITable[] = [
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
      Beneficio: 0,
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
    {
      date: 'Julio',
      year: 2022,
      Gastos: 132.25,
      Ingresos: 155,
      Beneficio: 25,
      Perdidas: 0,
    },
    {
      date: 'Agosto',
      year: 2022,
      Gastos: 10,
      Ingresos: 58,
      Beneficio: 48,
      Perdidas: 0,
    },
    {
      date: 'Septiembre',
      year: 2022,
      Gastos: 10,
      Ingresos: 58,
      Beneficio: 48,
      Perdidas: 0,
    },
    {
      date: 'Octubre',
      year: 2022,
      Gastos: 132.25,
      Ingresos: 155,
      Beneficio: 25,
      Perdidas: 0,
    },
    {
      date: 'Noviembre',
      year: 2022,
      Gastos: 10,
      Ingresos: 58,
      Beneficio: 48,
      Perdidas: 0,
    },
    {
      date: 'Diciembre',
      year: 2022,
      Gastos: 10,
      Ingresos: 58,
      Beneficio: 48,
      Perdidas: 0,
    },
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
          { offset: 20, color: 'inherit', opacity: 0.8 },
          { offset: 100, color: 'inherit', opacity: 0.4 },
        ]),
      ]}
      colors={getColor}
      keys={['Beneficio', 'Ingresos', 'Gastos', 'Perdidas']}
      indexBy="date"
      margin={{ top: 20, right: 20, bottom: 70, left: 80 }}
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
      enableGridX={false}
      enableGridY={true}
      enableLabel={isLabelsVisible}
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
          domain: {
            line: {
              stroke: '#ffffffb4',
              strokeWidth: 2,
            },
          },
          legend: {
            text: {
              fontSize: 20,
              fill: '#fff',
            },
          },
        },
        grid: {
          line: {
            stroke: '#96969634',
            strokeWidth: 1,
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
