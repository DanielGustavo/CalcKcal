export default function runElementAnimation(element) {
  element.classList.remove('animation');

  setTimeout(() => {
    element.classList.add('animation');
  }, 10);
}
