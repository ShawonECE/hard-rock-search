function display(song) {
    const results_container = document.getElementById('results_container');
    results_container.innerHTML = '';
    song.forEach(element => {
        const result = document.createElement('div');
        result.className = 'single-result row align-items-center my-3 p-3';
        result.innerHTML = `<div class="col-md-9">
                                <h3 class="lyrics-name">${element.title}</h3>
                                <p class="author lead">Album by <span>${element.artist.name}</span></p>
                            </div>
                            <div class="col-md-3 text-md-right text-center">
                                <button class="btn btn-success">Get Lyrics</button>
                            </div>
                            <audio controls>
                                <source src="${element.preview}" type="audio/mpeg">
                            </audio>`
        results_container.appendChild(result);
    });
}

function searchSong() {
    const searchText = document.getElementById('search').value;
    document.getElementById('search').value = '';
    search_url = `https://api.lyrics.ovh/suggest/${searchText}`;
    fetch(search_url)
    .then(res => res.json())
    .then(res => display(res.data));
}

document.getElementById('search_btn').addEventListener('click', function() {
    searchSong();
});