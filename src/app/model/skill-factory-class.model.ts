import { NonTechnicalSkills } from "./non-technical-skills.model";
import { Skills } from "./skills-class.model";
import { TechnicalSkills } from "./technical-skills.model";

export class SkillFactoryClass {
    static constructTechSkill(skill:Skills[],type:string) : TechnicalSkills[]{
        var returnSkills:TechnicalSkills[] = [];
        for(var i=0;i<skill.length;i=i+1){
          if(type=='Tech' && skill[i].Type==type ){
             var techSkill : TechnicalSkills = new TechnicalSkills(skill[i].Skill,skill[i].Level,skill[i].Type);
             returnSkills.push(techSkill); 
        }
     }
        return returnSkills;
     }

    static constructNonTechSkill(skill:Skills[],type:string) : NonTechnicalSkills[]{
        var returnSkills:NonTechnicalSkills[] = [];
        for(var i=0;i<skill.length;i=i+1){
          if(type=='Non-Tech' && skill[i].Type==type ){
             var nonTechSkill : NonTechnicalSkills = new NonTechnicalSkills(skill[i].Skill,skill[i].Level,skill[i].Type);
             returnSkills.push(nonTechSkill); 
        }
     }
        return returnSkills;
     }
}
