

var userObj = null;
async function apiCall() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let value = await response.json();

  userObj = value;
  for (var i = 0; i < value.length; i++) {
  document.getElementById("table").innerHTML += `



    <table class="center" ; style="width:50%">
       <tr >
         
          <td id="name">${value[i].name}</td>
          <td id="email">${value[i].email}</td>      
          <td id="address">${value[i].address.street} ${value[i].address.city} ${value[i].address.zipcode}</td>
 
       </tr>
    </table>

  </div>`
  }
}

