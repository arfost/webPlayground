function showNotification(time){
    const title = 'time out';
    const options = {
      body: 'The time is over'
    };
    setTimeout(function(){
        console.log('Time is over from SW');
        self.registration.showNotification(title, options);
    }, time)
    
}

onmessage = function(e) {
    console.log('Message received from main script', e);
    showNotification(e.data)
  }