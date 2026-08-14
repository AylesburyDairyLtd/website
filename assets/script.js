// assets/script.js — wire contact form to open user's email client via mailto
(function(){
  const form = document.getElementById('contactForm');
  const resetBtn = document.getElementById('resetBtn');
  const recipient = 'info@aylesburydairy.co.uk';

  function buildMailto(name, email, message){
    const subject = `Website contact from ${name || email || 'website visitor'}`;
    const bodyLines = [
      `Name: ${name || ''}`,
      `Email: ${email || ''}`,
      '',
      'Message:',
      message || ''
    ];
    const body = bodyLines.join('\n');
    return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = (document.getElementById('name')||{}).value.trim();
      const email = (document.getElementById('email')||{}).value.trim();
      const message = (document.getElementById('message')||{}).value.trim();

      if(!email && !name){
        alert('Please provide at least your name or email.');
        return;
      }
      if(!message){
        alert('Please enter a message or order details.');
        return;
      }

      const mailto = buildMailto(name, email, message);
      // Open mail client
      window.location.href = mailto;

      // Optionally give feedback and reset form after short delay
      setTimeout(()=>{
        try{ form.reset(); }catch(e){}
      }, 500);
    });
  }

  if(resetBtn){
    resetBtn.addEventListener('click', function(){
      if(form) form.reset();
    });
  }
})();
