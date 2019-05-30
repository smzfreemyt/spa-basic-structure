<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1"> 
<meta name="csrf-token" content="{{ csrf_token() }}" />
<link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
<title>APP_NAME</title>
</head>
<body>
    <noscript>
      <strong>Sorry, this website requires jvascript in order to work. </strong>
    </noscript>
	<div id="app"></div>
	<script type="text/javascript" src="{{ mix('js/app.js') }}"></script>
</body>
</html>