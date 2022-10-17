import { Researcher } from "./researcher";

export class Research {
    id : number;
    title : string;
    description: string;
    tag : number;
    members : number[];

    constructor(id : number, title: string, description : string, tag : number, members: number[]){
        this.id = id,
        this.title = title,
        this.description = description,
        this.tag = tag,
        this.members = members
    }
}
