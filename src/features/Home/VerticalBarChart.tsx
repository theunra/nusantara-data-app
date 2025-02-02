import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export interface VerticalBarChartDataset {
    label : string;
    data: number[];
}
interface VerticalBarChartType{
    title : string;
    datas : VerticalBarChartDataset[];
    labels : string[];
}

export function VerticalBarChart({title, datas, labels} : VerticalBarChartType) {
    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: title,
            },
        },
    };

    const data = {
        labels,
        datasets: datas.map((data) => {
            const r = faker.number.int({ min: 0, max: 255 });
            const g = faker.number.int({ min: 0, max: 255 });
            const b = faker.number.int({ min: 0, max: 255 });

            return {...data, backgroundColor: `rgba(${r}, ${g}, ${b}, 0.7)`}
        })
    }
    return (
        <Bar options={options} data={data} />
    );
}