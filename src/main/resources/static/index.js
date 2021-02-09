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
var table = new Tabulator('#tabulator-table', {
  ajaxURL: 'http://localhost:9876/users/', //ajax URL
  height: '311px',
  columns: [
    { title: 'Nome', field: 'firstName' },
    { title: 'Cognome', field: 'lastName' },
    { title: 'Presente', field: 'deleted' },
  ],
});
