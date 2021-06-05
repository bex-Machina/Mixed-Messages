const rand = arr =>{
    const temp = Math.floor(Math.random()*arr.length);
    return arr[temp];
}

const collectiveWisdom = {
    _starSign: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius','Pisces'],
    _fortune: ['good','bad','unknown',],
    _advice: ["is you step on a crak you will break your moma's back!!", "dont buy it", "dont trust console gamers","go for a walk"],
    randomMessage(){
            const starSign = rand(this._starSign)
            const fortune = rand(this._fortune)
            const advice = rand(this._advice)
            console.log(`your star sign is ${starSign} and you will have ${fortune} luck.\nAdvice of the day ${advice}!`)
    }
  }
  
  collectiveWisdom.randomMessage();