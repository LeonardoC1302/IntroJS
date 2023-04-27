// Property Methods
const musicPlayer = {
    play: function(id){
        console.log(`Playing Song with ID: {id}`);
    },
    pause: function(id){
        console.log(`Pausing Song with ID: {id}`);
    },
    createPlaylist: function(name){
        console.log(`Creating Playlist: {name}`);
    },
    playPlaylist: function(name){
        console.log(`Playing Playlist: {name}`);
    }
}

musicPlayer.delete = function(id){
    console.log(`Deleting Song with ID: {id}`);
}

musicPlayer.play(30);
musicPlayer.pause(30);
musicPlayer.delete(30);
musicPlayer.createPlaylist('My Favourites');
musicPlayer.playPlaylist('My Favourites');