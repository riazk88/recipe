const searchForm=document.querySelector('form');
const searchResultDiv=document.querySelector('.search-result');
const container=document.querySelector('.container');
let searchQuery='';
const APP_ID='14ed0ad9';
const APP_key='ebb1f6f6e4aa0f8e89227b170bd47a1e';


searchForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    searchQuery=e.target.querySelector('input').value;
    fetchAPI();
});

async function fetchAPI(){
    const baseURL=`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_key}`;
    const response=await fetch(baseURL);
    const data=await response.json();
    console.log(data);
}