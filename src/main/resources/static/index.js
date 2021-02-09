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
    { title: 'Nome', field: 'firstName', editor: 'input' },
    { title: 'Cognome', field: 'lastName', editor: 'input' },
    { title: 'Presente', field: 'deleted', sorter: 'boolean', editor: true },
  ],
});

document.getElementById('save').addEventListener('click', update());

function update(id, data) {
  const id = ;
  fetch(`http://localhost:9876/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      data,
    }),
  })
    .then((response) => {
      response.json().then((response) => {
        console.log(response);
      });
    })
    .catch((err) => {
      console.error(err);
    });
}
