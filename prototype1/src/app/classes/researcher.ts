import { Research } from "./research";

export class Researcher {
   id : number;
   firstName : string;
   lastName : string;
   interests : number[];
   faculty : number;
   research : Research[]

   constructor(id : number,
    firstName : string,
    lastName : string,
    interests : number[],
    faculty : number,
    research : Research[]){

        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.interests = interests;
        this.faculty = faculty;
        this.research = research;

   }
}
