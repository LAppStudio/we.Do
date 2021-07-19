import Team from "../document/Team";
import TeamListCollection from "../document/TeamListCollection";


async function NewTeam(teamName, manager, callback) {
    var newTeam = new Team(manager)
    newTeam.name = teamName
    console.log('asFireaseData: ', newTeam.asFirebaseData())

    const res = await TeamListCollection.doc(teamName).set(
        newTeam.asFirebaseData()
    ).finally(()=>{
        console.log("sent")
        callback()
    })

    
}

async function FromTeam(newTeam, callback) {
    console.log('asFireaseData: ', newTeam.asFirebaseData())

    const res = await TeamListCollection.doc(newTeam.name).set(
        newTeam.asFirebaseData()
    ).finally(()=>{
        console.log("sent")
        callback()
    })

    
}
const CreateTeam = {
    Create: (name, manager, callback) =>{
        NewTeam(name, manager, callback)
    },
    FromTeam: (team, callback) => {
        FromTeam(team, callback)
    }
}

export default CreateTeam;