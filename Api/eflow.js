





    window.TrelloPowerUp.initialize({
      'show-settings': function(t, options){
         
        return t.popup({
        title: 'Custom Fields Settings',
         url: './login.html',
          height: 184 // we can always resize later
       });
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

