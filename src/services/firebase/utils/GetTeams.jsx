import Team from "../document/Team"
import TeamListCollection from "../document/TeamListCollection"

var teams = []
async function AddTaksToList(params) {
    teams.push(params)
}

async function GetTeams() {
    const snapshot = await TeamListCollection.get()
    snapshot.forEach( doc => {
        var team = new Team(doc.data.manager).fromFirebaseData(doc.data)
        console.log(doc.id, '=>', team)
        AddTaksToList(team)
    })

    return teams
}

const getTeams = async () => {
    const foundTeams = [];

    const snapshot = await TeamListCollection.get()
    snapshot.forEach( doc => {
        var team = new Team(doc.data().manager).fromFirebaseData(doc.data())
        console.log(doc.id, '=>', team)
        foundTeams.push({id: doc.id,...team})
    })

    return foundTeams
}

const GetTeam = {
    GetTeams: () => {
        teams = []
        return GetTeams()
    },
    Teams: () => {
        return teams
    },
    getTeams
}

export default GetTeam;