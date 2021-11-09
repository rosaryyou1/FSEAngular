import { NonTechnicalSkills } from "./non-technical-skills.model";
import { TechnicalSkills } from "./technical-skills.model";

export class User {
     userId: number;
     assoicateId: string;
     name: string;
     email: string;
     mobile: string;
     technicalSkills: Array<TechnicalSkills>;
     nonTechnicalSkills: Array<NonTechnicalSkills>;    

    constructor(userId: number,assoicateId: string, name: string,email: string,
        mobile: string,technicalSkills: Array<TechnicalSkills>,nonTechnicalSkills: Array<NonTechnicalSkills>){
            this.userId = userId;
            this.assoicateId=assoicateId;
            this.name=name;
            this.email=email;
            this.mobile=mobile;
            this.technicalSkills=technicalSkills;
            this.nonTechnicalSkills=nonTechnicalSkills;
        }
}
