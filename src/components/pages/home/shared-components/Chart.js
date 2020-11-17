import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import _ from 'lodash';
import { useRecoilValueLoadable } from 'recoil';
import { payoutsSelector } from '../store/Selectors';

function Chart() {
  const [data, setData] = useState(null);
  const payouts = useRecoilValueLoadable(payoutsSelector);

  useEffect(() => {
    if (payouts.state === 'hasValue') {
      console.log(payouts.contents.data.data.results);
      const dataset = _.map(
        _.orderBy(payouts.contents.data.data.results, ['arrivalDate'], ['asc']),
        (payout) => ({
          t: new Date(payout.arrivalDate).toLocaleDateString(),
          y: payout.amount,
        })
      );
      setData(dataset);
    }
  }, [payouts]);

  return (
    <div className="h-64">
      <Line
        data={{
          datasets: [
            {
              label: 'Payouts',
              fill: false,
              borderColor: '#48bb78',
              borderWidth: 2,
              pointBorderColor: '#ffffff',
              pointBackgroundColor: '#48bb78',
              pointBorderWidth: 2,
              pointHoverRadius: 10,
              pointHoverBackgroundColor: '#48bb78',
              pointHoverBorderColor: '#ffffff',
              pointHoverBorderWidth: 3,
              pointRadius: 3,
              pointHitRadius: 10,
              data,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  callback(value) {
                    return `$${value.toLocaleString()}`;
                  },
                  fontColor: 'rgba(0, 0, 0, 0.85)',
                  fontSize: 10,
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                },
              },
            ],
            xAxes: [
              {
                type: 'time',
                time: {
                  unit: 'day',
                },
                distribution: 'linear',
                gridLines: {
                  display: false,
                },
                ticks: {
                  fontColor: 'rgba(0, 0, 0, 0.85)',
                  fontSize: 10,
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                },
              },
            ],
          },
        }}
        legend={{
          display: false,
        }}
      />
    </div>
  );
}

export default Chart;
