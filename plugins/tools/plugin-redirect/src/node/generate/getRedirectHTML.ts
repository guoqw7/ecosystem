export const getRedirectHTML = (redirectUrl: string): string => `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="robots" content="noindex">
  <meta http-equiv="refresh" content="0; url=${redirectUrl}">
  <link rel="canonical" href="${redirectUrl}">
  <title>Redirecting...</title>
  <script>
    const anchor = window.location.hash.slice(1);
    window.location.replace(\`${redirectUrl}\${anchor? \`#\${anchor}\`: ""}\`);
  </script>
</head>
<body>
  <p>Redirecting...</p>
</body>
</html>
`
