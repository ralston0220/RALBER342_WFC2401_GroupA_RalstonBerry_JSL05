// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Added 5 new songs for the playlists
    { title: "Billie Jean", artist: "Michael Jackson", genre: "Pop" },
    { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock" },
    { title: "Umbrella", artist: "Rihanna", genre: "Pop" },
    { title: "All Of Me", artist: "John Legend", genre: "R&B" },
    { title: "Let Me Love You", artist: "Mario", genre: "R&B" },
    // Feel free to add even more songs
];

// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    // added the preferences for Drax, Rocket and Groot
    "Drax": "Rock",
    "Rocket": "Pop",
    "Groot": "Rock",
    
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here

// this code converts guardian object into an array and map iterates over each entry
const playlists = Object.entries(guardians).map(([guardian, genre]) => {
 // This line filters the songs array to only include songs that match the genre of the current guardian.
         const playlistSongs = songs.filter(song => song.genre === genre);
            // this line creates the playlist div and displays ` guardians name + playlist`
            const playlistElement = document.createElement("div");
            playlistElement.classList.add("playlist");
            playlistElement.innerHTML = `<h2>${guardian}'s Playlist</h2>`;                                     
 // here a div is created for each song and inside the artist name and song title is displayed
            playlistSongs.forEach(song => {
                const songElement = document.createElement("div");
                songElement.classList.add("song");
                songElement.innerHTML = `<span class="song-title">${song.title}</span> by ${song.artist}`;
                playlistElement.appendChild(songElement);
