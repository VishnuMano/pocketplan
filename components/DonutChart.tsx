"use client"

import { Doughnut } from 'react-chartjs-2';

const DonutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
        {
            label: 'Banks',
            data: [1250, 2500, 3750],
            backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
        }
    ]
  }
  return (
    <Doughnut data={[]}/>
  )
}

export default DonutChart