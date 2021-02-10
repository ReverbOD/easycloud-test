/*
function retrieveUser() {
  fetch('http://localhost:9876/users/')
    .then((response) => response.json())
    .then((retrieveUsers) => {
      const usersList = retrieveUsers;
      let output = ' ';
      usersList.forEach(function (user) {
        output += `
        <tr class = "user-element">
            <td class="first-name">${user.firstName}</td>
            <td class="last-name">${user.lastName}</td>
            <td class="deleted">${user.deleted}</td>
        </tr>
          `;
      });
      document.getElementById('user-list').innerHTML = output;
      window.onload = retrieveUser();
    })
    .catch(function (err) {
      output = `
          <tr>
              <td> errore: </td>
              <td>${err.toString()}</td>
              <td></td>
          </tr>
          `;
      document.getElementById('user-list').innerHTML = output;
    });
}
*/

var table = new Tabulator('#tabulator', {
  ajaxURL: 'http://localhost:9876/users/', //ajax URL
  cellEdited: function (cell) {
    const newRow = cell._cell.row.data;
    console.log(newRow);
    fetch(`http://localhost:9876/users/${newRow.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8', // Indicates the content
      },
      body: JSON.stringify(newRow),
    })
      .then((response) => {
        response.text().then((response) => {
          console.log(response);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  },
  layout: 'fitColumns',
  tooltips: true,
  addRowPos: 'top',
  history: true,
  pagination: 'local',
  paginationSize: 7,
  movableColumns: true,
  resizableRows: true,
  height: '311px',
  columns: [
    {
      formatter: 'rowSelection',
      titleFormatter: 'rowSelection',
      hozAlign: 'center',
      headerSort: false,
      cellClick: function (e, cell) {
        cell.getRow().toggleSelect();
      },
    },
    { title: 'id', field: 'id' },
    { title: 'Nome', field: 'firstName', editor: 'input' },
    { title: 'Cognome', field: 'lastName', editor: 'input' },
    { title: 'Presente', field: 'deleted', sorter: 'boolean', editor: true },
  ],
});