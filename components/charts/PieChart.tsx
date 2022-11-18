// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
import { linearGradientDef } from '@nivo/core';
import { ResponsivePie } from '@nivo/pie';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const PieChart = () => {
  const data = [
    {
      id: 'make',
      label: 'make',
      value: 265,
      color: 'hsl(211, 70%, 50%)',
    },
    {
      id: 'go',
      label: 'go',
      value: 514,
      color: 'hsl(112, 70%, 50%)',
    },
    {
      id: 'scala',
      label: 'scala',
      value: 75,
      color: 'hsl(128, 70%, 50%)',
    },
    {
      id: 'javascript',
      label: 'javascript',
      value: 54,
      color: 'hsl(89, 70%, 50%)',
    },
    {
      id: 'stylus',
      label: 'stylus',
      value: 142,
      color: 'hsl(144, 70%, 50%)',
    },
  ];

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#fff"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 2]],
      }}
      // fill={[{ match: '*', id: 'gradientA' }]}
      // defs={[
      //   linearGradientDef('gradientA', [
      //     { offset: 0, color: 'inherit', opacity: 1 },
      //     { offset: 20, color: 'inherit', opacity: 0.6 },
      //     { offset: 100, color: 'inherit', opacity: 0.1 },
      //   ]),
      // ]}
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
        legends: {
          ticks: {
            line: {
              stroke: '#fff',
              strokeWidth: 1,
            },
            text: {
              fontSize: 11,
              fill: '#fff',
            },
          },
        },
      }}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
              },
            },
          ],
        },
      ]}
    />
  );
};
