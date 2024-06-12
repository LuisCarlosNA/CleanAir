document.addEventListener('DOMContentLoaded', function() {
    const sensorIP = 'http://192.168.1.100'; // Reemplaza con la IP real del sensor
    const co2Element = document.getElementById('co2');
    const pm25Element = document.getElementById('pm25');
    const humidityElement = document.getElementById('humidity');
    const temperatureElement = document.getElementById('temperature');

    async function fetchSensorData() {
        try {
            const response = await fetch(`${sensorIP}/data`); // Ajusta el endpoint según sea necesario
            const data = await response.json();
            
            co2Element.textContent = data.co2 || 'N/A';
            pm25Element.textContent = data.pm25 || 'N/A';
            humidityElement.textContent = data.humidity || 'N/A';
            temperatureElement.textContent = data.temperature || 'N/A';
        } catch (error) {
            console.error('Error fetching sensor data:', error);
            co2Element.textContent = 'Error';
            pm25Element.textContent = 'Error';
            humidityElement.textContent = 'Error';
            temperatureElement.textContent = 'Error';
        }
    }

    // Fetch data initially and then every 10 seconds
    fetchSensorData();
    setInterval(fetchSensorData, 10000);
});