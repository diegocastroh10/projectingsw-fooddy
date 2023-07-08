'use client';

import React, { useState,  useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = () => {
    const [chartData, setChartData] = useState({
        datasets: [],   
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ['Lunes','Martes','Mércoles','Jueves','Viernes','Sábado','Domingo'],
            datasets: [
                {
                    label: 'Ventas diarias',
                    data: [90380, 25690, 101360, 120990, 53550, 37890, 180590],
                    borderColor: 'rgb(53, 162, 235, 0.4',
                    backgroundColor: 'rgb(53, 162, 235, 0.4',
                },
            ],
        })
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Ingreso diario'
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, []);

    return (
        <>
            <div className='w-full md:col-span-2 relative lg:h.[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
                <Bar data={chartData} options={chartOptions}  />
            </div>
        </>
    );
};

export default BarChart;