//import { Chart } from "chart.js";

let chartInstance = null;

function initializeChart(canvasId, config) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error("Canvas não encontrado: " + canvasId);
        return;
    }
    chartInstance = new Chart(canvas, config);
}

function updateChartData(data) {
    if (chartInstance) {
        chartInstance.data = data;
        chartInstance.update();
    }
    else {
        console.error("Gráfico não inicializado!");
    }
}

function destroyChart() {
    if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
    }
    else {
        console.error("Gráfico não inicializado!");
    }
}
