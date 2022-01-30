





    window.TrelloPowerUp.initialize({
      'show-settings': function(t, options){
         
        return t.popup({
        title: 'Custom Fields Settings',
         url: './login.html',
          height: 184 // we can always resize later
       });
      },
      'authorization-status': function(t, options){
        // return a promise that resolves to the object with
        // a property 'authorized' being true/false
        // you can also return the object synchronously if you know
        // the answer synchronously
        return new TrelloPowerUp.Promise((resolve) => resolve({ authorized: true }));
      },
     'show-authorization': function(t, options){
      // return what to do when a user clicks the 'Authorize Account' link
      // from the Power-Up gear icon which shows when 'authorization-status'
      // returns { authorized: false }
      // in this case we would open a popup
      return t.popup({
        title: 'E-Flow',
        url: './login.html',
        height: 500,
      });
    }
    });

