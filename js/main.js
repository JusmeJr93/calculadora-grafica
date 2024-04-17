
let parameters = {
    target: '#grafica',
    data: [
        {
            fn: 'sin(x)',
            color: 'red'
        }
    ],
    grid: true,
    yAxis: { domain: [-1, 1] },
    xAxis: { domain: [0, 2 * Math.PI] }
}



function plot() {
    const f = document.querySelector('#funcion').value;
    const xMin = parseFloat(document.querySelector('#xMin').value);
    const xMax = parseFloat(document.querySelector('#xMax').value);
    const yMin = parseFloat(document.querySelector('#yMin').value);
    const yMax = parseFloat(document.querySelector('#yMax').value);
    const color = document.querySelector('#color').value;

    // Asegurar que los valores mínimos y máximos sean números y sean coherentes (min < max)
    if (!isNaN(xMin) && !isNaN(xMax) && xMin < xMax && !isNaN(yMin) && !isNaN(yMax) && yMin < yMax) {
        parameters.data[0].fn = f;
        parameters.xAxis.domain = [xMin, xMax];
        parameters.yAxis.domain = [yMin, yMax];
        parameters.data[0].color = color;
    } else {
        if (isNaN(xMin) || isNaN(xMax) || xMin >= xMax) {
            document.getElementById('error-x').textContent = 'Los valores de x deben ser numéricos y (xMin < xMax).';
        }
        if (isNaN(yMin) || isNaN(yMax) || yMin >= yMax) {
            document.getElementById('error-y').textContent = 'Los valores de y deben ser numéricos y (yMin < yMax).';
        }
    }

    // Configurar el tamaño antes de dibujar la gráfica
    parameters.width = document.getElementById('grafica').clientWidth;
    parameters.height = document.getElementById('grafica').clientHeight;

    // Gráfica
    functionPlot(parameters);
}

// Redimensionamiento de la ventana
window.addEventListener('resize', plot);