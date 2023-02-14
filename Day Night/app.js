const btn_off = document.getElementById('.img-on-off');
btn_off.addEventListener('click', turn_off);

function turn_off() {
  if (btn_off.classList[0] === 'img-on') {
    btn_off.src = 'on.png';
    btn_off.classList.remove('img-on');
    btn_off.classList.add('img-off');
  } else {
    btn_off.src = 'off.png';
    btn_off.classList.remove('img-off');
    btn_off.classList.add('img-on');
  }
}

const style = document.getElementById('.styles');
const imgCellphone = document.getElementById('img-ligth');

function changueMode() {
  if (style.classList[0] === 'styles-dark') {
    style.href = 'dark.css';
    style.classList.remove('styles-dark');
    style.classList.add('styles-ligth')
  }
};