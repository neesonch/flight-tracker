import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import useDashboardStore from "../../store/store";
import generateChartData from "../../helpers/generate-chart-data";
import { ChartDataSet } from "../../types";

interface LineChartProps {
  data: any;
}

const LineChart = ({ data }: LineChartProps) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    useMesh
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 90,
        itemHeight: 30,
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
      activePortfolio?.airplanesByRegistration.map(
        (registration) => airplanes[registration]
      ) || [];
    setChartData(generateChartData(airplanesInPortfolio));
  }, [activePortfolio, portfolios, airplanes]);

  return (
    <div style={{ height: "90vh" }}>
      <LineChart data={chartData} />
    </div>
  );
};

export default FlightsChart;
