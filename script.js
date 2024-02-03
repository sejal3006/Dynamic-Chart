const charts = document.getElementById('timeChart').getContext('2d');
let chart;
const initialData = {
    labels: [],
    datasets: [{
        label: 'Value',
        data: [],
        borderColor: 'red',
        borderWidth: 1,
        fill: false,
    }],
};

const chartConfig = {
    type: 'line',
    data: initialData,
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                title: {
                    display: true,
                    text: 'Time',
                },
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Value',
                },
            },
        },
        animation: false,
    },
};
chart = new Chart(charts, chartConfig);


function addData() {
    const newData = Math.random() * 100; 
    chart.data.labels.push(chart.data.labels.length);
    chart.data.datasets[0].data.push(newData);
    chart.update(); 
}

setInterval(addData, 1000);
