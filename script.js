console.log("Welcome to Spotify");
let songIndex = 1;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songs = [
  { songName: "Salam-e-Ishq", filePath: "C:UsersUSEROneDriveDesktopspotify projectsong\1.mp3" },
  { songName: "Salam-e-Ishq", filePath: "C:UsersUSEROneDriveDesktopspotify projectsong\1.mp3" },
  { songName: "Salam-e-Ishq", filePath: "C:UsersUSEROneDriveDesktopspotify projectsong\1.mp3" },
  { songName: "Salam-e-Ishq", filePath: "C:UsersUSEROneDriveDesktopspotify projectsong\1.mp3" },
  { songName: "Salam-e-Ishq", filePath: "C:UsersUSEROneDriveDesktopspotify projectsong\1.mp3" },
  { songName: "Salam-e-Ishq", filePath: "C:UsersUSEROneDriveDesktopspotify projectsong\1.mp3" },
  { songName: "Salam-e-Ishq", filePath: "C:UsersUSEROneDriveDesktopspotify projectsong\1.mp3" },
  { songName: "Salam-e-Ishq", filePath: "C:UsersUSEROneDriveDesktopspotify projectsong\1.mp3" },
  { songName: "Salam-e-Ishq", filePath: "C:UsersUSEROneDriveDesktopspotify projectsong\1.mp3" },
  { songName: "Salam-e-Ishq", filePath: "C:UsersUSEROneDriveDesktopspotify projectsong\1.mp3" },
  { songName: "Salam-e-Ishq", filePath: "C:UsersUSEROneDriveDesktopspotify projectsong\1.mp3" },
];

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log(progress);
})