
(function(){
  const form=document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      const name=document.getElementById('name').value.trim();
      const email=document.getElementById('email').value.trim();
      const message=document.getElementById('message').value.trim();
      const subject=encodeURIComponent('Anfrage über dynoforce.ch');
      const body=encodeURIComponent('Name: '+name+'\n'+'E-Mail: '+email+'\n\n'+'Nachricht:\n'+message);
      window.location.href='mailto:info@dynoforce.ch?subject='+subject+'&body='+body;
    });
  }
})();
