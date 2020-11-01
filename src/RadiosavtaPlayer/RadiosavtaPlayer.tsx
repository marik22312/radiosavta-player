import React, { useState, useEffect } from "react";
import AudioPlayer from "react-sound";
import { STREAM_URL } from "../config";

import Logo from "../assets/logo.png";

import "./RadiosavtaPlayer.scss";
import { getSongTitle } from "../api/fetchSongTitle";

export const RadiosavtaPlayer: React.FC = (props) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [isStreamLoading, setIsStreamLoading] = useState(true);
	const [streamTitle, setstreamTitle] = useState("Press the play button!");

	useEffect(() => {
		let interval: NodeJS.Timeout;
		if (isPlaying) {
			interval = setInterval(async () => {
				const title = await getSongTitle();
				setstreamTitle(title.StreamTitle);
			}, 10000);
		}
		return () => {
			interval && clearInterval(interval);
		};
	}, [isPlaying]);

	const togglePlayer = () => {
		setIsPlaying(!isPlaying);
	};

	return (
		<div id="radiosavta-player-container">
			<div className="radiosavta-player-image-container">
				<div className="radiosavta-player-image">
					<img src={Logo} alt="Radiosavta Player" />
				</div>
			</div>
			<div className="radiosavta-player-details">
				<div className="radiosavta-player-song-info">{streamTitle}</div>
				<div className="radiosavta-player-buttons-container">
					<button onClick={togglePlayer}>{isPlaying ? "Pause" : "Play"}</button>
				</div>
			</div>
			<AudioPlayer
				url={isPlaying ? STREAM_URL : null}
				playStatus={isPlaying ? "PLAYING" : "STOPPED"}
				onPlaying={() => {
					setIsStreamLoading(false);
				}}
				volume={100}
			/>
		</div>
	);
};
