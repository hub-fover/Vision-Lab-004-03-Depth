import './app.js';
if(!new URLSearchParams(location.search).has('manual'))document.querySelector('[data-sample]').click();
