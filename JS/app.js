const searchButtonFunc = () => {
  const searchButton = document.getElementById('searchButton');
  const inputField = document.getElementById('inputField');
  const displayAllFoods = document.getElementById('displayAllFoods');

  searchButton.addEventListener('click', function(){
    let countNumber = 0;
    for(let i = 0; i <= displayAllFoods.childNodes.length; i++){
      countNumber = countNumber + 1;
      console.log(i)
    }
    console.log(countNumber);
    for(let i = 0; i <= countNumber; i++){
      
    displayAllFoods.removeChild(displayAllFoods.firstChild)
    console.log(i)
  }
    inputField.value = '';
    return inputField.value = inputField.value
  })
}
// searchButtonFunc()
const allFoods = () => {
  // inputField.value = '';
  searchButtonFunc()
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputField.value}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayFoods(data))
}

allFoods()
const displayFoods = (inputTypesFoods) => {
  console.log(inputTypesFoods.meals);
  const displayAllFoods = document.getElementById('displayAllFoods');
  const displayFoodsDiv = document.getElementById('displayFoodsDiv');
  inputTypesFoods.meals.forEach(elementsFood => {
    const makeNewFood = document.createElement('div');
    makeNewFood.classList.add('make-flex-column');
    makeNewFood.innerHTML = `<div id="displayFoodsDiv">
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${elementsFood.strMealThumb}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-lg-8">
          <div class="card-body">
            <h5 id="displayFoodTitle" class="card-title">${elementsFood.strMeal}</h5>
            <p class="card-text text-success">${elementsFood.strCategory}</p>
            <p class="card-text"><span class="detailsButton" title="see-details"><i class="fa-solid fa-square-info"></i></span><small class="text-muted">${elementsFood.strInstructions}</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  displayAllFoods.appendChild(makeNewFood);
  })

  displayAllFoods.style = 'display: grid; grid-template-columns: repeat(3, 1fr); grid-gap: 1rem; width: 70%; margin: auto;'

  const allDetailsButton = document.getElementsByClassName('detailsButton');

  for(const allDetailsButtonMin of allDetailsButton){
    allDetailsButtonMin.addEventListener('click', function(
      
    ){
      const displayDetailsParDiv = document.getElementById('displayDetailsParDiv');
      const detailsImg = document.getElementById('detailsImg');
      const detailsFoodTitle = document.getElementById('detailsFoodTitle');
      const detailsFoodText = document.getElementById('detailsFoodText');

      // window.open('food-details.html', '_blank');
      console.log(this.parentNode.parentNode.childNodes[5].childNodes[1].innerText);
      console.log(this.parentNode.parentNode.parentNode.parentNode.firstChild.nextElementSibling.firstChild.nextSibling.src);
      const storeUrl = this.parentNode.parentNode.parentNode.parentNode.firstChild.nextElementSibling.firstChild.nextSibling.src;
      console.log(storeUrl)
      detailsImg.setAttribute('src', `${storeUrl}`);
      detailsFoodTitle.innerText = this.parentNode.parentNode.firstChild.nextSibling.innerText;
      detailsFoodText.innerText = this.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
      displayDetailsParDiv.style.display = 'block';


      
      
    })
  }
};
