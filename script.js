async function logMovies() {
    const response = await fetch("https://api.disneyapi.dev/character");
    const movies = await response.json();
    console.log(movies);

    const container = document.querySelector("#container");  

    for (const value of movies.data) {
    
        container.innerHTML += `
        <div id="helesinine">

        <p class="name">${value.name}</p>
        <img src="${value.imageUrl}"></p>
    </div>`;
    
    }
   

}

logMovies();
