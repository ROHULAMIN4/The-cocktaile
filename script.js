const dataLoad=()=>{
    const input=document.getElementById('inputId');
    const inputText=input.value;
    input.value='';
    const url=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputText}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>dataDisplay(data.drinks))

}

const dataDisplay=data=>{
  const container1=document.getElementById('container');
  container1.textContent=''; 
 for(const juice of data){
    // console.log(juice);
  
  
    const div=document.createElement('div');
    div.classList.add('col');
    div.innerHTML=`
    <div onclick='cardDisplay(${juice.idDrink})' class="card">
    <img src="${juice.strDrinkThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${juice.strDrink}</h5>
      <p class="card-text">${juice.strInstructions.slice(0,50)}</p>
    </div>
  </div> 
    `;
    container1.appendChild(div)
 
 }

}
const cardDisplay=(iddisplay)=>{
  // console.log(iddisplay)
  const url=`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${iddisplay}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>cardShow(data.drinks[0]))
}
const cardShow=card=>{
  const cardContainer=document.getElementById('cardID');
  cardContainer.textContent='';
  const div=document.createElement('div');
  div.classList.add('card');
  div.innerHTML=`
  <img src="${card.strDrinkThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${card.strDrink}</h5>
    <p class="card-text">${card.strInstructions.slice(0,50)}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  
  `;
  cardContainer.appendChild(div)
// console.log(card)
}

