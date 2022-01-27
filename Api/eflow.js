window.TrelloPowerUp.initialize({
  'board-buttons': function (t, opts) {
    return [{
      icon: {
        dark: WHITE_ICON,
        light: BLACK_ICON
      },
      text: 'Callback',
      callback: onBtnClick,

    }
  }
});


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

  var myList = 'INSERT YOUR IDLIST HERE';

  var creationSuccess = function (data) {
    console.log('Card created successfully.');
    console.log(JSON.stringify(data, null, 2));
  };
  
  var newCard = {
    name: 'aasdasdsadsa',
    desc: 'This is the description of our new card.',
    // Place this card at the top of our list
    idList: myList,
    pos: 'top'
  };
  
  window.Trello.post('/cards/', newCard, creationSuccess);

console.log("Hello World");