const countOutput = document.querySelector('#count');
const message = document.querySelector('#message');
let count = Number.parseInt(localStorage.getItem('test-app-count') || '0', 10);

function render() {
  countOutput.value = count;
  countOutput.textContent = count;
  localStorage.setItem('test-app-count', String(count));
  message.textContent = count === 0 ? 'Ready when you are.' : `${count} ${count === 1 ? 'step' : 'steps'} so far.`;
}

document.querySelector('#increment').addEventListener('click', () => { count += 1; render(); });
document.querySelector('#decrement').addEventListener('click', () => { count = Math.max(0, count - 1); render(); });
document.querySelector('#reset').addEventListener('click', () => { count = 0; render(); });
render();
