const songs = [
    "Aveh.mp3",
    "Battle Theme.mp3",
    "Bonds of Sea and Fire.mp3",
    "Boss Battle Theme.mp3",
    "Dazil Theme.mp3",
    "Ethos Theme.mp3",
    "Faraway Promise.mp3",
    "Flight.mp3",
    "Fuse.mp3",
    "Grahf, Emperor of Darkness.mp3",
    "Lahan Village Theme.mp3",
    "Maria's Theme.mp3",
    "Nisan Theme.mp3",
    "Pray for the People's Joy.mp3",
    "Shattering Egg of Dreams.mp3",
    "Shevat.mp3",
    "Steel Giant.mp3",
    "Tears of the Stars.mp3",
    "The Wounded Shall Advance Into the Light.mp3",
    "World Map Theme.mp3",
    "Yggdrasil Theme.mp3"
]

const createSongList = () => {
    const list = document.createElement('ol');

    for(let i = 0; i<songs.length; i++){
        const item = document.createElement('li');
        item.appendChild(document.createTextNode(songs[i]));

        list.appendChild(item);
    }
    return list;
}

document.getElementById("songList").appendChild(createSongList());