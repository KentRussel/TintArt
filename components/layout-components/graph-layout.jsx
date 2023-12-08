import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  LinearScale,
  LineElement,
  Filler,
  BarElement,
} from 'chart.js'
import { Bar } from 'react-chartjs-2';
import moment from 'moment'
import DATA from '../../utils/DATA'
ChartJS.register(
  CategoryScale,
  Filler,
  PointElement,
  LineElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement
)

export default function ChartData({ label, data, sort }) {
  const formattedSalesData = () => {
    let temp = {}
    switch (sort) {
      case 'Daily':
        let sortedKeys1 = Object.keys(data).sort()
        sortedKeys1.forEach(key => {
          temp[moment(key).format('ddd (MM-DD)')] = data[key]
        })
        break
      case 'Weekly':
        function weeksInYearToMonthWeeks(yearWeeks) {
          const monthsInYear = 12
          const weeksPerMonth = Math.floor(yearWeeks / monthsInYear)
          const extraWeeks = yearWeeks % monthsInYear

          const monthWeeks = Array.from({ length: monthsInYear }, (_, i) => {
            const weekNum = weeksPerMonth + (i < extraWeeks ? 1 : 0)
            return Array.from({ length: weekNum }, (_, j) => {
              const weekLabel = j === 0 ? '1st' : j === 1 ? '2nd' : j === 2 ? '3rd' : `${j + 1}th`
              return `${moment().month(i).format('MMMM')} ${weekLabel} week`
            })
          }).flat()

          return monthWeeks.reduce((acc, label, index) => {
            acc[moment().month(index).format('MMMM')] = label
            return acc
          }, {})
        }

        let sortedKeys2 = Object.keys(data).sort()
        sortedKeys2.forEach(key => {
          const weekLabel = weeksInYearToMonthWeeks(key)[moment(key).format('MMMM')]
          temp[weekLabel] = data[key]
        })
        break
      case 'Yearly':
        temp = Object.fromEntries(Object.entries(data).reverse())
    }
    return temp
  }
  const formattedOrderData = () => {
    let temp = {}
    switch (sort) {
      case 'Daily':
        let sortedKeys1 = Object.keys(data).sort()
        sortedKeys1.forEach(key => {
          temp[moment(key).format('ddd (MM-DD)')] = data[key]
        })
        break
      case 'Weekly':
        function weeksInYearToMonthWeeks(yearWeeks) {
          const monthsInYear = 12
          const weeksPerMonth = Math.floor(yearWeeks / monthsInYear)
          const extraWeeks = yearWeeks % monthsInYear

          const monthWeeks = Array.from({ length: monthsInYear }, (_, i) => {
            const weekNum = weeksPerMonth + (i < extraWeeks ? 1 : 0)
            return Array.from({ length: weekNum }, (_, j) => {
              const weekLabel = j === 0 ? '1st' : j === 1 ? '2nd' : j === 2 ? '3rd' : `${j + 1}th`
              return `${moment().month(i).format('MMMM')} ${weekLabel} week`
            })
          }).flat()

          return monthWeeks.reduce((acc, label, index) => {
            acc[moment().month(index).format('MMMM')] = label
            return acc
          }, {})
        }

        let sortedKeys2 = Object.keys(data).sort()
        sortedKeys2.forEach(key => {
          const weekLabel = weeksInYearToMonthWeeks(key)[moment(key).format('MMMM')]
          temp[weekLabel] = data[key]
        })
        break
      case 'Yearly':
        temp = Object.fromEntries(Object.entries(data).reverse())
    }
    return temp
  }

  const sumValuesByStatus = status => {
    const result = {}
    const data = formattedOrderData()
    for (const date in data) {
      result[date] = data[date][status] || 0
    }

    return result
  }

  return (
    <Bar
      data={
        label === 'Sales'
          ? {
              labels: Object.keys(formattedSalesData()),
              datasets: [
                {
                  label,
                  data: formattedSalesData(),
                  backgroundColor: 'rgba(123, 51, 239, 0.3)',
                  borderColor: 'rgb(123, 51, 239)',
                  borderWidth: 1,
                },
              ],
            }
          : {
              labels: Object.keys(sumValuesByStatus('COMPLETED')),
              datasets: [
                {
                  label: 'Completed',
                  data: sumValuesByStatus('COMPLETED'),
                  backgroundColor: 'rgba(34,197,94, 0.3)',
                  borderColor: 'rgb(34,197,94)',
                  borderWidth: 1,
                },
                {
                  label: 'Pending Payment',
                  data: sumValuesByStatus('PENDING PAYMENT'),
                  backgroundColor: 'rgba(63,63,70, 0.3)',
                  borderColor: 'rgb(63,63,70)',
                  borderWidth: 1,
                },
                {
                  label: 'Preparing Order',
                  data: sumValuesByStatus('PREPARING ORDER'),
                  backgroundColor: 'rgba(234,179,8, 0.3)',
                  borderColor: 'rgb(234,179,8)',
                  borderWidth: 1,
                },
                {
                  label: 'Out of Delivery',
                  data: sumValuesByStatus('OUT OF DELIVERY'),
                  backgroundColor: 'rgba(6, 182, 212, 0.3)',
                  borderColor: 'rgb(6, 182, 212)',
                  borderWidth: 1,
                },
                {
                  label: 'Cancelled',
                  data: sumValuesByStatus('CANCELLED'),
                  backgroundColor: 'rgba(123, 51, 239, 0.3)',
                  borderColor: 'rgb(123, 51, 239)',
                  borderWidth: 1,
                },
              ],
            }
      }
      height={200}
      options={{
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              font: {
                family: 'Poppins',
              },
            },
          },
        },
        scales: {
          y: {
            min: 0,
            ticks: {
              precision: 0,
              callback: function (value, index, values) {
                return label === 'Sales' ? '₱ ' + value : value;
              },
            },
          },
          x: {
            ticks: {
              beginAtZero: true,
              precision: 0,
            },
          },
        },
        interaction: {
          intersect: false,
        },
      }}
    />
  );
}