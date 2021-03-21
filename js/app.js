const Seattle = {
  minNumber : 23,
  maxNumber : 65,
  avg : 6.3,
  cookeisHour : [],
  timeByHours : ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm'],
  randomNum : function (min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    const Num = Math.floor(Math.random() * (max - min) + min);
    const numOfCookies = this.avg * Num;
    return this.cookeisHour.push(Math.floor(numOfCookies));
  },
  addNumberToArrayCookies : function(){
    for(let i = 0 ; i<this.timeByHours.length;i++){
      this.randomNum(this.minNumber,this.maxNumber);
      console.log(this.cookeisHour);
    }
  },
  total : function(){
    let sum = 0;
    for(let i = 0;i < this.cookeisHour.length;i++){
      sum+=this.cookeisHour[i];
      console.log(sum);
    }
    return sum;
  },
  render:function(){
    const Ulel = document.getElementById('seattle-list');
    this.addNumberToArrayCookies();
    for(let i = 0;i <this.timeByHours.length;i++){
      const liEl = document.createElement('li');
      Ulel.appendChild(liEl);
      liEl.textContent = `${this.timeByHours[i]}: ${this.cookeisHour[i]} cookies`;
    }
    const liEl = document.createElement('li');
    Ulel.appendChild(liEl);
    liEl.textContent =`Total :${this.total()}`;
  }
};

const Tokyo = {
  minNumber : 3,
  maxNumber : 24,
  avg : 1.2,
  cookeisHour : [],
  timeByHours : ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm'],
  randomNum : function (min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    const Num = Math.floor(Math.random() * (max - min) + min);
    const numOfCookies = this.avg * Num;
    return this.cookeisHour.push(Math.floor(numOfCookies));
  },
  addNumberToArrayCookies : function(){
    for(let i = 0 ; i<this.timeByHours.length;i++){
      this.randomNum(this.minNumber,this.maxNumber);
      console.log(this.cookeisHour);
    }
  },
  total : function(){
    let sum = 0;
    for(let i = 0;i < this.cookeisHour.length;i++){
      sum+=this.cookeisHour[i];
      console.log(sum);
    }
    return sum;
  },
  render:function(){
    const Ulel = document.getElementById('Tokyo-list');
    this.addNumberToArrayCookies();
    for(let i = 0;i <this.timeByHours.length;i++){
      const liEl = document.createElement('li');
      Ulel.appendChild(liEl);
      liEl.textContent = `${this.timeByHours[i]}: ${this.cookeisHour[i]} cookies`;
    }
    const liEl = document.createElement('li');
    Ulel.appendChild(liEl);
    liEl.textContent =`Total :${this.total()}`;
  }
};

const Dubai = {
  minNumber : 3,
  maxNumber : 24,
  avg : 3.7,
  cookeisHour : [],
  timeByHours : ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm'],
  randomNum : function (min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    const Num = Math.floor(Math.random() * (max - min) + min);
    const numOfCookies = this.avg * Num;
    return this.cookeisHour.push(Math.floor(numOfCookies));
  },
  addNumberToArrayCookies : function(){
    for(let i = 0 ; i<this.timeByHours.length;i++){
      this.randomNum(this.minNumber,this.maxNumber);
      console.log(this.cookeisHour);
    }
  },
  total : function(){
    let sum = 0;
    for(let i = 0;i < this.cookeisHour.length;i++){
      sum+=this.cookeisHour[i];
      console.log(sum);
    }
    return sum;
  },
  render:function(){
    const Ulel = document.getElementById('Dubai-list');
    this.addNumberToArrayCookies();
    for(let i = 0;i <this.timeByHours.length;i++){
      const liEl = document.createElement('li');
      Ulel.appendChild(liEl);
      liEl.textContent = `${this.timeByHours[i]}: ${this.cookeisHour[i]} cookies`;
    }
    const liEl = document.createElement('li');
    Ulel.appendChild(liEl);
    liEl.textContent =`Total :${this.total()}`;
  }
};

const Paris = {
  minNumber : 20,
  maxNumber : 38,
  avg : 2.3,
  cookeisHour : [],
  timeByHours : ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm'],
  randomNum : function (min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    const Num = Math.floor(Math.random() * (max - min) + min);
    const numOfCookies = this.avg * Num;
    return this.cookeisHour.push(Math.floor(numOfCookies));
  },
  addNumberToArrayCookies : function(){
    for(let i = 0 ; i<this.timeByHours.length;i++){
      this.randomNum(this.minNumber,this.maxNumber);
      console.log(this.cookeisHour);
    }
  },
  total : function(){
    let sum = 0;
    for(let i = 0;i < this.cookeisHour.length;i++){
      sum+=this.cookeisHour[i];
      console.log(sum);
    }
    return sum;
  },
  render:function(){
    const Ulel = document.getElementById('Paris-list');
    this.addNumberToArrayCookies();
    for(let i = 0;i <this.timeByHours.length;i++){
      const liEl = document.createElement('li');
      Ulel.appendChild(liEl);
      liEl.textContent = `${this.timeByHours[i]}: ${this.cookeisHour[i]} cookies`;
    }
    const liEl = document.createElement('li');
    Ulel.appendChild(liEl);
    liEl.textContent =`Total :${this.total()}`;
  }
};

const Lima = {
  minNumber : 2,
  maxNumber : 16,
  avg : 4.6,
  cookeisHour : [],
  timeByHours : ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm'],
  randomNum : function (min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    const Num = Math.floor(Math.random() * (max - min) + min);
    const numOfCookies = this.avg * Num;
    return this.cookeisHour.push(Math.floor(numOfCookies));
  },
  addNumberToArrayCookies : function(){
    for(let i = 0 ; i<this.timeByHours.length;i++){
      this.randomNum(this.minNumber,this.maxNumber);
      console.log(this.cookeisHour);
    }
  },
  total : function(){
    let sum = 0;
    for(let i = 0;i < this.cookeisHour.length;i++){
      sum+=this.cookeisHour[i];
      console.log(sum);
    }
    return sum;
  },
  render:function(){
    const Ulel = document.getElementById('Lima-list');
    this.addNumberToArrayCookies();
    for(let i = 0;i <this.timeByHours.length;i++){
      const liEl = document.createElement('li');
      Ulel.appendChild(liEl);
      liEl.textContent = `${this.timeByHours[i]}: ${this.cookeisHour[i]} cookies`;
    }
    const liEl = document.createElement('li');
    Ulel.appendChild(liEl);
    liEl.textContent =`Total :${this.total()}`;
  }
};


Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();

