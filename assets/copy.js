// Кнопки «Скопировать» у готовых текстов
document.querySelectorAll('[data-copy]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var src = document.getElementById(btn.getAttribute('data-copy'));
    if (!src) return;
    var label = btn.querySelector('span');
    var done = function () {
      var old = label.textContent;
      label.textContent = 'Скопировано';
      setTimeout(function () { label.textContent = old; }, 1600);
    };
    if (navigator.clipboard) {
      navigator.clipboard.writeText(src.innerText).then(done);
    } else {
      var r = document.createRange();
      r.selectNodeContents(src);
      var s = window.getSelection();
      s.removeAllRanges();
      s.addRange(r);
      document.execCommand('copy');
      s.removeAllRanges();
      done();
    }
  });
});
