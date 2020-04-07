console.log('Hello from Shows.js');
const addShowButton = document.getElementById('addShow');
const deleteButtons = document.getElementsByClassName('delete');

const addShowHandler = (event) => {
    const title = document.getElementById('title').value;
    const numSeasons = document.getElementById('numSeasons').value;
    const desc = document.getElementById('desc').value;
    const data = {
        title,
        numSeasons,
        desc
    };
    fetch('/api/shows', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(() => window.location.replace('/shows'));
}
const deleteHandler = (event) => {
    console.log(event.target.id);
    fetch(`/api/shows/${event.target.id}`, {
        method: 'DELETE'
    }).then(() => window.location.replace('/shows'));
}

addShowButton.addEventListener('click', addShowHandler);
for(let i = 0; i < deleteButtons.length; i++){
    deleteButtons[i].addEventListener('click', deleteHandler)
}

fetch('/api/shows')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });
