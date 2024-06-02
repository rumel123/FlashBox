

function findData() {
    var inputId = document.getElementById('trackingId').value;
    fetch(`http://localhost:3000/api/v1/fbt/${inputId}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('No data found');
        }
        return response.json();
    })
    .then(records => {
        const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
        table.innerHTML = ""; // Clear previous entries
        console.log(records); // Debugging output
        
        const dataArray = Array.isArray(records) ? records : [records];
        
        dataArray.forEach(data => {
            var row = table.insertRow();
            
            Object.keys(data).forEach(key => {
                var cell = row.insertCell();
                if (key === 'date_ordered' && data[key]) {
                    cell.textContent = formatDate(data[key]);
                } else {
                    cell.textContent = data[key] ? data[key].toString() : 'Not Available';
                }
            });
        });
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('errorMessage').textContent = 'Failed to fetch data: ' + error.message;
    });
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}
