import { Researcher } from "./researcher";

export class ResearchArea {

    id: number;
    name: string;
    researchers: Researcher[]

    constructor(id: number,
        name: string,
        researchers: Researcher[]) {

        this.id = id;
        this.name = name;
        this.researchers = researchers;

    }
}


