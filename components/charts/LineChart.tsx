import { ResponsiveLine } from '@nivo/line';

interface Props {}

export const LineChart = () => {
  const data = [
    {
      id: 'japan',
      color: 'hsl(227, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 21,
        },
        {
          x: 'helicopter',
          y: 19,
        },
        {
          x: 'boat',
          y: 290,
        },
        {
          x: 'train',
          y: 121,
        },
        {
          x: 'subway',
          y: 163,
        },
        {
          x: 'bus',
          y: 112,
        },
        {
          x: 'car',
          y: 135,
        },
        {
          x: 'moto',
          y: 193,
        },
        {
          x: 'bicycle',
          y: 197,
        },
        {
          x: 'horse',
          y: 59,
        },
        {
          x: 'skateboard',
          y: 188,
        },
        {
          x: 'others',
          y: 147,
        },
      ],
    },
    {
      id: 'france',
      color: 'hsl(336, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 201,
        },
        {
          x: 'helicopter',
          y: 147,
        },
        {
          x: 'boat',
          y: 265,
        },
        {
          x: 'train',
          y: 131,
        },
        {
          x: 'subway',
          y: 102,
        },
        {
          x: 'bus',
          y: 281,
        },
        {
          x: 'car',
          y: 199,
        },
        {
          x: 'moto',
          y: 230,
        },
        {
          x: 'bicycle',
          y: 30,
        },
        {
          x: 'horse',
          y: 14,
        },
        {
          x: 'skateboard',
          y: 84,
        },
        {
          x: 'others',
          y: 2,
        },
      ],
    },
    {
      id: 'us',
      color: 'hsl(355, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 256,
        },
        {
          x: 'helicopter',
          y: 218,
        },
        {
          x: 'boat',
          y: 242,
        },
        {
          x: 'train',
          y: 86,
        },
        {
          x: 'subway',
          y: 89,
        },
        {
          x: 'bus',
          y: 262,
        },
        {
          x: 'car',
          y: 208,
        },
        {
          x: 'moto',
          y: 92,
        },
        {
          x: 'bicycle',
          y: 142,
        },
        {
          x: 'horse',
          y: 172,
        },
        {
          x: 'skateboard',
          y: 107,
        },
        {
          x: 'others',
          y: 105,
        },
      ],
    },
    {
      id: 'germany',
      color: 'hsl(128, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 59,
        },
        {
          x: 'helicopter',
          y: 271,
        },
        {
          x: 'boat',
          y: 277,
        },
        {
          x: 'train',
          y: 209,
        },
        {
          x: 'subway',
          y: 65,
        },
        {
          x: 'bus',
          y: 153,
        },
        {
          x: 'car',
          y: 240,
        },
        {
          x: 'moto',
          y: 26,
        },
        {
          x: 'bicycle',
          y: 194,
        },
        {
          x: 'horse',
          y: 105,
        },
        {
          x: 'skateboard',
          y: 106,
        },
        {
          x: 'others',
          y: 247,
        },
      ],
    },
    {
      id: 'norway',
      color: 'hsl(108, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 234,
        },
        {
          x: 'helicopter',
          y: 167,
        },
        {
          x: 'boat',
          y: 24,
        },
        {
          x: 'train',
          y: 174,
        },
        {
          x: 'subway',
          y: 1,
        },
        {
          x: 'bus',
          y: 285,
        },
        {
          x: 'car',
          y: 6,
        },
        {
          x: 'moto',
          y: 170,
        },
        {
          x: 'bicycle',
          y: 21,
        },
        {
          x: 'horse',
          y: 121,
        },
        {
          x: 'skateboard',
          y: 119,
        },
        {
          x: 'others',
          y: 110,
        },
      ],
    },
  ];
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      xFormat=" >-"
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        // orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'transportation',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        // orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'count',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={4}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      // enablePointLabel={true}
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
        crosshair: {
          line: {
            stroke: '#fff',
            strokeWidth: 2,
            strokeOpacity: 0.7,
          },
        },
        axis: {
          domain: {
            line: {
              stroke: '#ffffffb4',
              strokeWidth: 2,
            },
          },
        },
        grid: {
          line: {
            stroke: '#96969634',
            strokeWidth: 1,
          },
        },
        legends: {
          ticks: {
            line: {
              stroke: '#ffffff',
              strokeWidth: 1,
            },
            text: {
              fontSize: 11,
              fill: '#fff',
            },
          },
        },
      }}
    />
  );
};
