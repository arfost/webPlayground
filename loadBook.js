javascript:(function(){
    _my_script=document.createElement('SCRIPT');
    _my_script.type='text/javascript';
    _my_script.src='https://mysite.com/script.js?';
    document.getElementsByTagName('head')[0].appendChild(_my_script);
  })();