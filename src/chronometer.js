class Chronometer {
  constructor() {
    //increment by one by each second
    this.currentTime = 0 
    this.intervalId = null
    // ... your code goes here
  }

  //function when start button is pressed. prints the time to the page
  start(printTimeCallback) {

      //Interval that runs the function once per second
    this.intervalId = setInterval(()=>{

    // Increment the current time by 1
    this.currentTime+=1

    // If the callback function is passed as an argument, call it
    if(printTimeCallback){
     
      printTimeCallback()
    }
    // If the callback function is not passed as an argument, do nothing
      }, 1000)    
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    const valueString = value.toString()
    if(valueString.length === 1) {
     return "0" + valueString.slice()
    }
    return valueString
  }

  stop() {
    clearInterval(this.intervalId)
    }

  reset() {
   return this.currentTime = 0
   
  }

  split() {
    // ... your code goes here
  }
}
