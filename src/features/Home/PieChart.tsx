import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(ArcElement, Tooltip, Legend);

export interface PieChartDataset {
    label : string;
    data: number[];
}
interface PieChartType{
    datas : PieChartDataset[];
    labels : string[];
    title : string;
}


export function PieChart({title, datas, labels} : PieChartType) {
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
            const backgroundColors : string[] = [];
            data.data.forEach(()=>{
                const r = faker.number.int({ min: 0, max: 255 });
                const g = faker.number.int({ min: 0, max: 255 });
                const b = faker.number.int({ min: 0, max: 255 });

                backgroundColors.push(`rgba(${r}, ${g}, ${b}, 0.7)`);
            });
            

            return {...data, backgroundColor: backgroundColors}
        })
    }
    return (
        <Pie options={options} data={data} />
    );
}