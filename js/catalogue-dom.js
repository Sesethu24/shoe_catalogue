var selectBrandElem = document.querySelector(".selectBrand");
var selectColorElem = document.querySelector(".selectColor");
var selectSizeElem = document.querySelector(".selectSize");
var searchBtnElem = document.querySelector(".searchBtn");
var addBtnElem = document.querySelector(".addBtn");
var deleteBtnElem = document.querySelector(".deleteBtn");

var allShoes = document.querySelector('.shoeTemplate').innerHTML;
var shoeTemplate = Handlebars.compile(allShoes);

var searchShoes = document.querySelector('.search-results-template').innerHTML;
var searchTemplate = Handlebars.compile(searchShoes);



var myData = document.querySelector(".shoeDisplay");
var searchData = document.querySelector(".searchDisplay");

var instance = shoeCatalogue();

var stock = [];

window.addEventListener('load', getShoes);

function getShoes() {

 var temp = shoeTemplate({shoes : instance.getShoes()})
  myData.innerHTML = temp;
};



function addItems() {
  let params ={
    brand: selectBrandElem.value,
    color: selectColorElem.value,
    size: selectSizeElem.value,
    price: addBtnElem.value

  } 
 instance.addShoe(params)
}
function deleteItems() {

}

function searchForItems(){
  myData.innerHTML = '';
  let params ={
    brand: selectBrandElem.value,
    color: selectColorElem.value,
    size: Number(selectSizeElem.value)
  } 
  

 var temp = searchTemplate({searchedShoes : instance.searchForItems(params)})
 searchData.innerHTML = temp;
}

searchBtnElem.addEventListener('click', searchForItems)
addBtnElem.addEventListener('click', addItems)
deleteBtnElem.addEventListener('click', deleteItems)
