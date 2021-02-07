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

function createUser(user) {
  fetch('http://localhost:9876/users/', {
    method: 'POST',
    body: JSON.stringify(user),
  }).then(function (response) {
    return response.json();
  });
}

function submitUser() {
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('first-name').value;
  const deleted = document.getElementById('true', 'false').value;

  if (content) {
    createUser({
      description: 'Fetch API Post example',
      public: true,
      files: {
        user: {
          content: content,
        },
      },
    });
  } else {
    console.log('error');
    console.log(content);
  }
}

function openForm() {
  document.getElementById('inputForm').style.display = 'block';
}

function closeForm() {
  document.getElementById('inputForm').style.display = 'none';
}
