





  window.TrelloPowerUp.initialize({
    'show-settings': function(t, options){
      // when a user clicks the gear icon by your Power-Up in the Power-Ups menu
      // what should Trello show. We highly recommend the popup in this case as
      // it is the least disruptive, and fits in well with the rest of Trello's UX
      return t.popup({
        title: 'Custom Fields Settings',
        url: './login.html',
        height: 184 // we can always resize later
      });
    },
    'authorization-status': function(t, options){


var Data = {
  "companyID":0,
  "username":"admin",
  "password":"admin"
}
var Url = "http://localhost:15055/Api/User/Login";

jQuery.ajax({
  url:Url,
  type:"POST",
   data:Data
})
      // return a promise that resolves to the object with
      // a property 'authorized' being true/false
      // you can also return the object synchronously if you know
      // the answer synchronously
      return new TrelloPowerUp.Promise((resolve) => resolve({ authorized: true }));
    }
  });

