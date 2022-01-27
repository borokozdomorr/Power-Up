


window.Trello.authorize({
    type: 'popup',
    name: 'Getting Started Application',
    scope: {
      read: 'true',
      write: 'true' },
    expiration: 'never',
    success: authenticationSuccess,
    error: authenticationFailure
  });

  var authenticationSuccess = function() {
    console.log('Successful authentication');
  };
  
  var authenticationFailure = function() {
    console.log('Failed authentication');
  };

  window.TrelloPowerUp.initialize({
    "board-buttons": function (t, opts) {
      return t.board("all").then(function (board) {
        console.log(JSON.stringify(board, null, 2));
      });
    },
  });

console.log("Hello World");