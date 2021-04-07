type Artist = {
	id: string;
	name: string;
};

type Tracklist = {
	id: string;
	name: string;
	artists: Artist[];
};
