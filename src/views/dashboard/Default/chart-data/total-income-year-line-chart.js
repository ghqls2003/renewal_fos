// ===========================|| DASHBOARD - TOTAL ORDER YEAR CHART ||=========================== //

const chartData = {
  type: 'line',
  height: 90,
  options: {
    chart: {
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#fff'],
    fill: {
      type: 'solid',
      opacity: 1
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    yaxis: {
      min: 0,
      max: 300000
    },
    tooltip: {
      theme: 'dark',
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: 'Total Order'
      },
      marker: {
        show: false
      }
    }
  },
  series: [
    {
      name: '월...여기 해야한다',
      labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      data: [90000, 210000, 30000, 30000, 20000, 40000, 110000, 0, 0, 0, 0, 0]
    }
  ]
};

export default chartData;
