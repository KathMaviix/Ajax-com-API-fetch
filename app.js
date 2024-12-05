
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

function fetchData() {
    fetch(apiUrl)
        .then(response => response.json()) 
        .then(data => {
            
            let output = '<ul>';
            data.forEach(post => {
                output += `<li><strong>${post.title}</strong>: ${post.body}</li>`;
            });
            output += '</ul>';
            document.getElementById('resultado').innerHTML = output;
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
        });
}


fetchData();
