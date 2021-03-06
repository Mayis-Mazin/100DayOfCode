document.addEventListener('pointerup', e => {
    const selection = window.getSelection();
  
    if (selection.type === 'Range') {
      for (let i = 0; i < selection.rangeCount; i++) {
        const range = selection.getRangeAt(i);
        playAnimation(range.commonAncestorContainer);
      }
    }
  });
  
  function playAnimation(el) {
    if (el.nodeType === Node.TEXT_NODE) {
      el = el.parentNode;
    }
  
    el.classList.remove('highlight');
    setTimeout(() => {
      el.classList.add('highlight');
    }, 0);
  }