import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { BarChart, LineChart } from 'react-native-chart-kit';

const BarChartKit = () => {
  return (
    <View>
      <BarChart
        data={{
          labels: ["January", "February"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
              ]
            }
          ]
        }}
        width={Dimensions.get("window").width - 24 * 2} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#fff",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </View>
  );
};

export default BarChartKit;