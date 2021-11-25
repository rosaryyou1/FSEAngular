import { skillsInterface } from "./skillsInterface.model";

export class Skills implements skillsInterface {
    Skill: string;
    Level: number;
    Type:string;
   
   constructor(skill: string, level: number, type:string){
       this.Skill = skill;
       this.Level = level;
       this.Type=type;
   }
}
