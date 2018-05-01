export class Kingdom{
	id: number;
	name: string;
	places: Array<Place>
}

export class Place {
	id: number;
	name: string;
	kind: string;
}