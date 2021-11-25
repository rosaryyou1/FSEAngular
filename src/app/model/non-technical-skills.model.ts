import { skillsInterface } from "./skillsInterface.model";

export class NonTechnicalSkills implements skillsInterface{
    Skill: string;
     Level: number;
     Type:string;
    
    constructor(Skill: string, Level: number,Type:string){
        this.Skill = Skill;
        this.Level = Level;
        this.Type = Type;
    }
}
