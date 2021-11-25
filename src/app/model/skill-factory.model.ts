import { Skills } from "./skills-class.model";

export interface SkillFactory {
    constructSkill(skill:Array<Skills>,type:string) : Array<Skills>;
}
