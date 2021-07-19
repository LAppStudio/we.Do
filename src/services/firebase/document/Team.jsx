import firebase from "firebase"


class Team {
    name = 'new team'
    leader = 'Inactive'
    manager = ''
    members = ['']
    backlog = ['']
    criationDate = ''
    updated = ''
    description = ''

    constructor(manager) {
        this.leader = 'Inactive'
        this.manager = manager
        this.criationDate = firebase.firestore.Timestamp.fromDate(new Date())
        this.updated = this.criationDate
    }

    asFirebaseData() {
        const data = {
            name: this.name,
            leader: this.leader,
            backlog: this.backlog,
            manager: this.manager,
            members: this.members,
            criationDate: this.criationDate,
            updated: this.updated,
            description: this.description,

        }
        return data
    }

    fromFirebaseData(data) {
        var team = new Team(data.manager)

        team.name = data.name
        team.backlog = data.backlog
        team.leader = data.leader
        team.manager = data.manager
        team.members = data.members
        team.criationDate = data.criationDate
        team.updated = data.updated
        team.description = data.description

        return team
    }
}

export default Team;