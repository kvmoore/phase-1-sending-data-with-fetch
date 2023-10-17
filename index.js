
/*The first two tests mirror the behavior of the JSON server. 
As you write your solution, keep the server running to test your code. 
Open index.html in a browser to gain access to your submitData function in console.*/

 function submitData(name,email) {

const configurationObject = {
   method: "POST",
   headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
   },
   body: JSON.stringify({
      name: name,
      email: email,
   }),
};
return fetch("http://localhost:3000/users",configurationObject)
      
         .then(function (response) {
            return response.json();
          })
          .then(function (object) {
            console.log(object.id)                //find the new ID and append to DOM
               document.body.innerHTML = object.id
          })
               .catch(function (error) {
                  console.log(error.message);
                  document.body.innerHTML = error.message
          });

         }

/*When writing the callback function for your catch(), expect to receive 
an object on error with a property, message, containing info about what went 
wrong. Write code to append this message to the DOM when catch() is called.*/




//Return Fetch chain
 