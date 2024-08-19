interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Mess',
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

/* const { song, audioVolume } = audioPlayer;
const { details: { author } } = audioPlayer;
console.log('Song: ', song);
console.log('Adio: ', audioVolume);
console.log('Author: ', author); */
const dbz: string[] = ['Goku', 'Vegeta'];

const [, , p3 = 'Not Found'   ] = dbz;

console.log('Personaje 3: ', p3 || 'No hay personaje');