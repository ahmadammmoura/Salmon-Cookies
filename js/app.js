


let timeAndLocation = ['Location','6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','8 pm','Total'];
const dayTotal = [];
let done =[];

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


const Locations = function(minNumber,maxNumber,avg,cityName){
  this.minNumber = minNumber;
  this.maxNumber = maxNumber;
  this.avg = avg;
  this.cookeisHour = [cityName];
  this.timeByHours = timeAndLocation;
  dayTotal.push(this);
  document.getElementById('minNumber').value='';
  document.getElementById('maxNumber').value='';
  document.getElementById('Average').value='';
  document.getElementById('cityName').value='';
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
  // dayTotal.push(Math.floor(numOfCookies));
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
  done.push(sum);
  return sum;
};
let Seattle= new Locations(23,65,6.3,'Seattle');
let Tokyo= new Locations(3,24,1.2,'Tokyo',timeAndLocation);
let Dubai= new Locations(11,38,3.7,'Dubai',timeAndLocation);
let Paris= new Locations(20,38,2.3,'Paris',timeAndLocation);
let Lima= new Locations(2,16,4.6,'Lima',timeAndLocation);

let form = document.getElementById('form');
form.addEventListener('submit',addNewLocation);

function addNewLocation(event){
  event.preventDefault();
  let minNumber = event.target.minNumber.value;
  let maxNumber = event.target.maxNumber.value;
  let Average = event.target.Average.value;
  let cityName = event.target.cityName.value;

  let addLocation = new Locations(minNumber,maxNumber,Average,cityName);
  deleteElement();
  addLocation.renderRows();
  footer1();
}

Seattle.renderRows();
Tokyo.renderRows();
Dubai.renderRows();
Paris.renderRows();
Lima.renderRows();

footer1();
function deleteElement(){
  let el = document.getElementById('delete');
  el.remove();
}
//footer total

function footer1(){
  let totalOfCookeis = 0;
  const table = document.getElementById('table');
  const tr = document.createElement('tr');
  tr.setAttribute('id','delete');
  table.appendChild(tr);
  let td = document.createElement('td');
  tr.appendChild(td).textContent= 'Total';

  for (let i = 1; i < 16; i++){
    let sum = 0;
    for(let j = 0;j<dayTotal.length;j++){
      sum = sum + dayTotal[j].cookeisHour[i] ;
    }

    let td = document.createElement('td');
    tr.appendChild(td).textContent = sum ;
    totalOfCookeis = totalOfCookeis + sum;

  }
  const totalTd = document.createElement('td');
  tr.appendChild(totalTd).textContent = totalOfCookeis ;
}


