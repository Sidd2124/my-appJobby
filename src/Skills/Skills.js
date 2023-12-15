const Skills=(props)=>{
const{Skillinfo}=props;
const{SkillLogo,SkillName}=Skillinfo
return(
    <div>
<img src={SkillLogo} alt={SkillName}/>
<p>{SkillName}</p>
    </div>
)

}

export default Skills