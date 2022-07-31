const worker = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>send help</title>
    <link rel="stylesheet" href="https://unpkg.com/modern-css-reset/dist/reset.min.css" />
    <style>
    // styling for the new web page.
      body {
        background: #eee;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        font-family: sans-serif;
      }
      div.container {
        background: #fff;
        border-radius: 1rem;
        padding: 4rem;
      }
    </style>
  </head>
  <body>
    <button id="movingbutton" onclick="move()">Click Me!</button>
    <script>
    function move() {
      elem=document.getElementById("movingbutton");
      yshift=Math.floor(Math.random() * window.innerHeight);
      xshift=Math.floor(Math.random() * window.innerWidth);
      elem.style.position = 'absolute';
      elem.style.left = xshift.toString() + 'px';
      elem.style.top = yshift.toString() + 'px';
      }
    </script>
  </body>
</html> `

//This grants access to index.js file when the user calls the worker function.
export default worker
