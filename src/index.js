import './styles.css';
const buttonGet = document.querySelector('.btn-get-json');
const posts = document.getElementById('json-info');

buttonGet.addEventListener('click', () =>{
    let options = {
        // Будем использовать метод GET
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }
    // Делаем запрос за данными
    fetch('http://127.0.0.1:3000/posts/', options)
        .then(response => response.json())
        .then(json => putPostIntoHTML(json))
        .catch((error) => {
            console.log(error)
        });
})

function putPostIntoHTML(json) {
    let innerHTML = '<table class=\'table\'>' +
        '<thead>' +
            '<td>Author</td>' +
            '<td>Title</td>' +
        '</thead>';
    json.forEach(function(element, i, arr) {
        innerHTML += '<tr><td>'+element.author+'</td><td>'+element.title+'</td></tr>';
        console.log(element);
    })
    posts.innerHTML = innerHTML+'</table>';
    // document.location.reload();
    console.log(posts);
}