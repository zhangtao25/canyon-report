const generateHtml = ({coverage}) => {
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Webpack App</title>
  <script>
    window.data = ${coverage};
  </script>
  <script defer="defer" src="asset/main.js"></script>
</head>
<body>
<div id="root"></div>
</body>
</html>
`
}

module.exports = {
  generateHtml
}
