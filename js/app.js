


let timeAndLocation = ['Location','6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm','Total'];
const dayTotal = [];

const tableHeader = function(){
  const table = document.getElementById('table');
  const tr = document.createElement('tr');
  table.appendChild(tr);
  for(let i = 0; i < timeAndLocation.length;i++){
    const th = document.createElement('th');
    tr.appendChild(th).textContent = timeAndLocation[i];
  }
};
tableHeader();


const Locations = function(minNumber,maxNumber,avg,cityName,time){
  this.minNumber = minNumber;
  this.maxNumber = maxNumber;
  this.avg = avg;
  this.cookeisHour = [cityName];
  this.timeByHours = time;
};



Locations.prototype.tableHeader = function(){
  const table = document.getElementById('table');
  const tr = document.createElement('tr');
  table.appendChild(tr);
  for(let i = 0; i < timeAndLocation.length;i++){
    const th = document.createElement('th');
    tr.appendChild(th).textContent = this.timeByHours[i];
  }
};


Locations.prototype.renderRows = function(){
  this.addNumberToArrayCookies();
  const table = document.getElementById('table');
  const tr = document.createElement('tr');
  table.appendChild(tr);
  for(let i = 0 ; i< this.cookeisHour.length ;i++){
    // console.log(this.cookeisHour[i]);
    const td = document.createElement('td');
    tr.appendChild(td).textContent = this.cookeisHour[i];
  }
  const td = document.createElement('td');
  tr.appendChild(td).textContent = this.total();
};


Locations.prototype.randomNum = function (min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  const Num = Math.floor(Math.random() * (max - min) + min);
  const numOfCookies = this.avg * Num;
  const randomnum=this.cookeisHour.push(Math.floor(numOfCookies));
  dayTotal.push(Math.floor(numOfCookies));
  return randomnum;
};

Locations.prototype.addNumberToArrayCookies = function(){
  for(let i = 1 ; i<this.timeByHours.length - 1;i++){
    this.randomNum(this.minNumber,this.maxNumber);
  }
};

Locations.prototype.total = function(){
  let sum = 0;
  for(let i = 1;i < this.cookeisHour.length;i++){
    sum+=this.cookeisHour[i];
  }

  return sum;
};
let Seattle= new Locations(23,65,6.3,'Seattle',timeAndLocation);
let Tokyo= new Locations(3,24,1.2,'Tokyo',timeAndLocation);
let Dubai= new Locations(11,38,3.7,'Dubai',timeAndLocation);
let Paris= new Locations(20,38,2.3,'Paris',timeAndLocation);
let Lima= new Locations(2,16,4.6,'Lima',timeAndLocation);



Seattle.renderRows();
Tokyo.renderRows();
Dubai.renderRows();
Paris.renderRows();
Lima.renderRows();







// function splitToChunks(array, parts){
//   let result = [];
//   for (let i = parts; i > 0; i--) {
//     result.push(array.splice(0, Math.ceil(array.length / i)));
//   }
//   return result;
// }
// let array1 = splitToChunks(dayTotal,5)[0];
// let array2 = splitToChunks(dayTotal,5)[1];
// let array3 = splitToChunks(dayTotal,5)[2];
// let array4 = splitToChunks(dayTotal,5)[3];
// let array5 = splitToChunks(dayTotal,5)[4];
// console.log(array1);

// let sum = 0;
// let nums = [];

// for(let i = 0; i < array1.length; i++){
//   sum = array1[i] + array2[i]+array3[i] + array4[i] + array5[i];
//   nums.push(sum);
// }

// console.log(nums);




