require('dotenv').config();

module.exports = {
    SUPPORT_SERVER: '',
    CLIENT_ID: '928000104378548224',
    PERMISSIONS: '521871941441',
    BOT_PRESENCE: {
        ENABLED: true, 
        STATUS: "idle", 
        TYPE: 2, 
        MESSAGE: "Waifuz💕", 
    },
    MUSIC: {
        IDLE_TIME: 5
    },
    NODES: [
    {
        host: "ssl.horizxon.studio", 
        port: 443,
        password: "horizxon.studio",
        identifier: "main",
        retryDelay: 60000, 
        secure: true, 

    },

    ],
    SPOTIFY:{
        CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
        CLIENT_SECRET: process.env.SPOTIFY_CLIENT_ID_SECRET,
        ALBUM_LIMIT: 1,
        PLAYLIST_LIMIT: 1,

    },
    DEEZER:{
        ALBUM_LIMIT: 1,
        PLAYLIST_LIMIT: 1,

    },

    EMBED_COLORS:{
        PLAY: '#00B330',
        SKIP: '#0095B3',  
        STOP: '#B30003',
        QUEUE_END: '#400001',
        QUEUE_ADD: '#144000',
        QUEUE_CLEARED: '#001E9A',
        ERROR: '#FF0000',
        SUCCESS: '#3CFF00',
        BLUE: '#b5fdff',

    },
};
