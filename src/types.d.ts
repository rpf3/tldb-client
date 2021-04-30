type Artist = {
	id: string;
	name: string;
};

type Remix = {
	name: string;
	artist: Artist;
};

type Track = {
	id: string;
	name: string;
	artist: Artist;
	remix: Remix;
};

type IndexedTrack = {
	index: number;
	track: Track;
};

type Tracklist = {
	id: string;
	name: string;
	date: Date;
	artists: Artist[];
	tracks: IndexedTrack[];
	tags: string[];
};
