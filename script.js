document.getElementById('submitButton').addEventListener('click', function() {
    const data = {
        value1: document.getElementById('input1').value,
        value2: document.getElementById('input2').value,
        value3: document.getElementById('input3').value,
        value4: document.getElementById('input4').value,
    };

    // Замените 'YOUR_API_TOKEN' на ваш API токен Pipedrive
    const apiToken = 'YOUR_API_TOKEN';

    // Здесь укажите URL для API Pipedrive
    const url = `https://api.pipedrive.com/v1/deals?api_token=${apiToken}`;

    // Пример отправки данных в Pipedrive
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Data successfully submitted to Pipedrive!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Failed to submit data. See console for details.');
    });
});
