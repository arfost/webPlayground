function showNotification(time){
    const title = 'time out';
    const options = {
      body: 'The time is over'
    };
    setTimeout(function(){
        self.registration.showNotification(title, options);
    }, time)
    
}

onmessage = function(e) {
    console.log('Message received from main script', e);
    showNotification(e)
  }