let playlist = {
  Beatles: 'Yesterday',
  Queen: 'Radio Ga-Ga'
};

function updatePlaylist(playlist, artistName, songTitle) {
 return
  Object.assign({}, playlist, { [artistName]: songTitle})
}