export function renderLayout({ title, content }) {
  return `
<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<title>${title}</title>

<link rel="stylesheet" href="/css/main.css">

</head>

<body>

<div id="app">
${content}
</div>

<script type="module" src="/js/main.js"></script>

</body>
</html>
`;
}
