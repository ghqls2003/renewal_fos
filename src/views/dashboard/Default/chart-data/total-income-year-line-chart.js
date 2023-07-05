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
        formatter: undefined,
        title: {
          formatter: (seriesName) => seriesName
        }
      },
      marker: {
        show: false
      }
    }
  },
  series: [
    {
      name: '',
      data: [90029, 210038, 30044, 30048, 20020, 40969, 110000, 0, 0, 0, 0, 0]
    }
  ]
};

export default chartData;
