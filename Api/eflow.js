




  window.TrelloPowerUp.initialize({
    "board-buttons": function (t, opts) {
      return t.board("all").then(function (board) {
        console.log(JSON.stringify(board, null, 2));
      });
    },
  });

console.log("Hello World");