function searchFbtIdMain() {
    const id = document.getElementById('search-id').value;
    fetch(`/api/v1/fbt/${id}`)
        .then(response => response.json())
        .then(data => {
            const fbtIdMainBody = document.getElementById('fbt-id-main-body');
            fbtIdMainBody.innerHTML = '';
            if (data.length) {
                const tr = document.createElement('tr');
                tr.innerHTML = `<td>${data[0].id}</td><td>${data[0].sender}</td><td>${data[0].receiver}</td><td>${data[0].items}</td><td>${data[0].amount}</td><td>${data[0].date_loaded}</td>`;
                fbtIdMainBody.appendChild(tr);
            } else {
                fbtIdMainBody.innerHTML = '<tr><td colspan="6">No data found</td></tr>';
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

function searchFbtTs() {
    const id = document.getElementById('search-id').value;
    fetch(`/api/v1/fbt/tracking/${id}`)
        .then(response => response.json())
        .then(data => {
            const fbtTsBody = document.getElementById('fbt-ts-body');
            fbtTsBody.innerHTML = '';
            if (data.length) {
                const tr = document.createElement('tr');
                tr.innerHTML = `<td>${data[0].id}</td><td>${data[0].reference_id}</td><td>${data[0].date_updated}</td>`;
                fbtTsBody.appendChild(tr);
            } else {
                fbtTsBody.innerHTML = '<tr><td colspan="3">No data found</td></tr>';
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

function showAllFbtIdMain() {
    fetch('/api/v1/fbt')
        .then(response => response.json())
        .then(data => {
            const fbtIdMainBody = document.getElementById('fbt-id-main-body');
            fbtIdMainBody.innerHTML = '';
            data.forEach(row => {
                const tr = document.createElement('tr');
                tr.innerHTML = `<td>${row.id}</td><td>${row.sender}</td><td>${row.receiver}</td><td>${row.items}</td><td>${row.amount}</td><td>${row.date_loaded}</td>`;
                fbtIdMainBody.appendChild(tr);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

function showAllFbtTs() {
    fetch('/api/v1/fbt/tracking')
        .then(response => response.json())
        .then(data => {
            const fbtTsBody = document.getElementById('fbt-ts-body');
            fbtTsBody.innerHTML = '';
            data.forEach(row => {
                const tr = document.createElement('tr');
                tr.innerHTML = `<td>${row.id}</td><td>${row.reference_id}</td><td>${row.date_updated}</td>`;
                fbtTsBody.appendChild(tr);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}
