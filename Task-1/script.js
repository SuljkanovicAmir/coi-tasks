function toggleParagraphs() {
    const paragraph1 = document.querySelector('.paragraph-1');
    const paragraph2 = document.querySelector('.paragraph-2');
    const button = document.querySelector('.learn-more');
  
    if (paragraph1.classList.contains('hidden')) {
      paragraph1.classList.remove('hidden');
      paragraph2.classList.add('hidden');
    } else {
      paragraph1.classList.add('hidden');
      paragraph2.classList.remove('hidden');
    }
  }