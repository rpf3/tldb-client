export const getTrackName = function (track: Track) {
	let displayName = track.name;

	if (track.remix) {
		displayName = `${displayName} (${track.remix.artist.name} ${track.remix.name})`;
	}

	return displayName;
};
