async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  }
  
  function renderTableData(tableId, data, columns) {
    const tableBody = document.getElementById(tableId);
    tableBody.innerHTML = '';
    data.forEach(row => {
      const tr = document.createElement('tr');
      columns.forEach(column => {
        const td = document.createElement('td');
        td.textContent = row[column];
        tr.appendChild(td);
      });
      tableBody.appendChild(tr);
    });
  }
  
  async function showAllFbtIdMain() {

    console.log("check");
    try {
      const data = await fetchData('/api/v1/fbt/:id'); // Adjust endpoint if needed
      renderTableData('fbt-id-main-body', data, ['id', 'sender', 'receiver', 'items', 'amount', 'date_loaded']);
    } catch (error) {
      console.error('Error fetching fbt_id_main data:', error);
    }
  }
  
  async function showAllFbtTs() {
    try {
      const data = await fetchData('/api/v1/fbt/'); // Adjust endpoint if needed
      renderTableData('fbt-ts-body', data, ['id', 'reference_id', 'date_updated']);
    } catch (error) {
      console.error('Error fetching FBT_TS data:', error);
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.show-bar button:nth-child(1)').addEventListener('click', showAllFbtIdMain);
    document.querySelector('.show-bar button:nth-child(2)').addEventListener('click', showAllFbtTs);
  });
  