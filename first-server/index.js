const express = require('express')
const fs = require('fs')
const app = express()

app.get('/', function (req, res) {
    res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>first-server</title>
  </head>

  <body>
    <form id="ourForm" name="authorization" method="post">
      <button id="submitButton" type="submit" name="authorized" value="yes">
        Go to second-server
      </button>
    </form>

    <script>
      function submitMe(event) {
          event.preventDefault();
          document.getElementById("ourForm").submit();
      }

      document.getElementById("submitButton").addEventListener("click", submitMe)
    </script>
  </body>
</html>
`)
})

app.post('/', function (req, res) {
    res.set('Location', "http://localhost:3000");
    res.status(302)
    res.end()
})

app.get('/SecondServerFinished', function(req, res) {
    res.send("first-server received the message from second-server");
});

let port = 3001
app.listen(port)
console.log(`first-server listening on ${port}`)
