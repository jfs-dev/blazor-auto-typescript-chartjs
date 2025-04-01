import { Chart, ChartConfiguration, ChartData } from "chart.js";

let chartInstance: Chart | null = null;

function initializeChart(canvasId: string, config: ChartConfiguration): void {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) {
        console.error("Canvas não encontrado: " + canvasId);
        return;
    }

    chartInstance = new Chart(canvas, config);
}

function updateChartData(data: ChartData): void {
    if (chartInstance) {
        chartInstance.data = data;
        chartInstance.update();
    } else {
        console.error("Gráfico não inicializado!");
    }
}

function destroyChart(): void {
    if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
    } else {
        console.error("Gráfico não inicializado!");
    }
}
