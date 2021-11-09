export class Criteria {
    public searchName:string;
    public searchAssociateId:string;
    public searchSkillName:string;

     constructor(searchName: string, searchAssociateId: string,searchSkillName: string ){
        this.searchName = searchName;
        this.searchAssociateId = searchAssociateId;
        this.searchSkillName = searchSkillName;
    }

}
