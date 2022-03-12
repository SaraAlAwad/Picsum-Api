
let output = document.getElementById('container');

fetch('https://picsum.photos/v2/list')
    .then(response => response.json())
    .then(json => {
        console.log(json)
        json.forEach(element => {
            output.innerHTML += `
            <figure>
            <img src="${element.download_url}">
            <figcaption>${element.author}</figcaption>
            <p><a href="${element.url}">see more</a></p>
        </figure>`

        });
    })

