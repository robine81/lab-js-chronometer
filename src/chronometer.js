class Chronometer {
  constructor() {
    //increment by one by each second
    this.currentTime = 0 
    this.intervalId = null
    // ... your code goes here
  }

  //function when start button is pressed. prints the time to the page
  start(printTimeCallback) {
    // if(!printTimeCallback) return
    
    
    this.intervalId = setInterval(()=>{
      
    this.currentTime+=1
    if(printTimeCallback){
     
      printTimeCallback()
    }
      }, 1000)    
  }

  getMinutes() {
    // ... your code goes here
  }

  getSeconds() {
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
