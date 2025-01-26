// Java script :-
 document.querySelectorAll('.product a').forEach(a => {
    a.addEventListener('click', (e) => {
      alert('You are being redirected to the product page.');
    });
  });