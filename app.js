console.log("Let's get this party started!");

//set up the form/button. 
const searchForm = document.getElementById('searchForm');
const promptBox = document.getElementById('promptBox');
const firstGif = document.querySelector('#firstGif');
const gifSpace = document.querySelector('#gifSpace')
const remover = document.getElementById('remover')

//when the form is submitted, get the gif based on the 'prompt box'
searchForm.addEventListener('submit', function(){
    event.preventDefault();
    console.log('submit was hit')
    getGif(promptBox.value)
})

//hard-coded llama GIF for testing
const llama = 'https://media4.giphy.com/media/RlH4gZYWOsAgg/giphy.gif?cid=482277c2arm71iqxxq3phpgnuicwjxe735ej6z5hj3obq8vf&rid=giphy.gif&ct=g';

remover.addEventListener('click', function(){
    for (let i of document.querySelectorAll('img')) {
        i.remove();
    }
});

async function getGif(prompt){
    const url = `http://api.giphy.com/v1/gifs/search?q=${prompt}
    &api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
    const res = await axios.get (url);
    console.log (res.data.data);
    // ^ just for testing

    // firstGif.src ="https://media4.giphy.com/media/RlH4gZYWOsAgg/giphy.gif?cid=482277c2kifbyh7zj4oh1zs95bvrrz08p1lsk4dbgbqa5d3w&rid=giphy.gif&ct=g"

    gifSpace.innerHTML += `<img src = '${res.data.data[0].images.downsized_medium.url}' class = 'giphyGif'>`

    firstGif.src = res.data.data[0].images.downsized_medium.url;
    // firstGif.src = llama 

}

// Leftover bits left so you can see them / my thought process, I guess?

// class GiphyGif {
//     constructor(url){

//     }
//     getGif(prompt)
// }