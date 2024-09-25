const generateHtml = ({coverage}) => {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>index2</title>
  </head>
  <body>
    <div id="root"></div>
    <script>
   
  window.data = ${coverage};
</script>
  </body>
</html>
`
}

module.exports = {
  generateHtml
}
