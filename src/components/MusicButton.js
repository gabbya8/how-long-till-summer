import React, { useState, useEffect, useRef } from 'react';
import soundIcon from '../assets/sound.svg';
import soundOffIcon from '../assets/sound-off.svg';
import '../css/MusicButton.css';
import songFile from '../assets/song.mp3';

const MusicButton = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio(songFile);
        audioRef.current.loop = true;
    }, []);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(error => {
                console.error("Audio playback failed:", error);
            });
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div onClick={togglePlayPause} className="button">
            <img src={isPlaying ? soundIcon : soundOffIcon} alt="Sound Icon" />
        </div>
    );
};

export default MusicButton;