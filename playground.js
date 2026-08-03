document.getElementById('run-btn').addEventListener('click', () => {
  const code = document.getElementById('code').value;
  const output = document.getElementById('output');
  output.srcdoc = code;
});
