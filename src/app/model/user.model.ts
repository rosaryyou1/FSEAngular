import { NonTechnicalSkills } from "./non-technical-skills.model";
import { SkillFactoryClass } from "./skill-factory-class.model";
import { Skills } from "./skills-class.model";
import { TechnicalSkills } from "./technical-skills.model";

export class User {
     UserId: number;
     AssociateId: string;
     AssociateName: string;
     Email: string;
     Mobile: string;
     Skills:Array<Skills>;
     TechnicalSkills: Array<TechnicalSkills>;
     NonTechnicalSkills: Array<NonTechnicalSkills>;    

    constructor(userId: number,assoicateId: string, name: string,email: string,
        mobile: string,skills:Array<Skills>){
            this.UserId = userId;
            this.AssociateId=assoicateId;
            this.AssociateName=name;
            this.Email=email;
            this.Mobile=mobile;
            this.Skills = skills;
            this.TechnicalSkills=[];
            this.NonTechnicalSkills=[];
        }
}
