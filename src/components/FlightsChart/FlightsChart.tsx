import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import useDashboardStore from "../../store/store";
import generateChartData from "../../helpers/generate-chart-data";
import { ChartDataSet } from "../../types";

const mockData: ChartDataSet[] = [
  {
    id: "Flights",
    color: "hsl(329, 70%, 50%)",
    data: [
      {
        x: "Jun 23, 2020",
        y: 3,
      },
      {
        x: "Jun 24, 2020",
        y: 5,
      },
      {
        x: "Jun 25, 2020",
        y: 2,
      },
    ],
  },
  {
    id: "Flight Hours",
    color: "hsl(149, 70%, 50%)",
    data: [
      {
        x: "Jun 23, 2020",
        y: 9,
      },
      {
        x: "Jun 24, 2020",
        y: 15,
      },
      {
        x: "Jun 25, 2020",
        y: 10,
      },
    ],
  },
];

interface LineChartProps {
  data: any;
}

const MyResponsiveLine = ({ data }: LineChartProps) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

const FlightsChart = () => {
  const activePortfolioId = useDashboardStore(
    (state) => state.activePortfolioId
  );
  const portfolios = useDashboardStore((state) => state.portfolios);
  const airplanes = useDashboardStore((state) => state.airplanes);

  const activePortfolio = activePortfolioId
    ? portfolios[activePortfolioId]
    : null;

  const [chartData, setChartData] = useState<ChartDataSet[]>();

  useEffect(() => {
    const airplanesInPortfolio =
      activePortfolio?.airplaneByRegistration.map(
        (registration) => airplanes[registration]
      ) || [];
    setChartData(generateChartData(airplanesInPortfolio));
  }, [activePortfolio, portfolios, airplanes]);

  return (
    <div style={{ height: "900px" }}>
      <MyResponsiveLine data={chartData} />
    </div>
  );
};

export default FlightsChart;
