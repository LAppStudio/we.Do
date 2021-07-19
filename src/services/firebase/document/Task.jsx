import firebase from "firebase"


class Task {
    name = 'New Task'
    assignee = 'Inactive'
    team = ''
    creator = ''
    tags = ['']
    targetDate = ''
    criationDate = ''
    updated = ''
    description = ''
    sprint = ''
    fixed = false

    constructor(creator) {
        this.assignee = 'Inactive'
        this.creator = creator
        this.criationDate = firebase.firestore.Timestamp.fromDate(new Date())
        this.updated = this.criationDate
    }

    asFirebaseData() {
        const data = {
            name: this.name,
            team: this.team,
            assignee: this.assignee,
            creator: this.creator,
            tags: this.tags,
            targetDate: this.targetDate,
            criationDate: this.criationDate,
            updated: this.updated,
            description: this.description,
            sprint: this.sprint,
            fixed: this.fixed
        }
        return data
    }

    fromFirebaseData(data) {
        var task = new Task(data.creator)

        console.log(data);

        task.name = data.name
        task.team = data.team
        task.assignee = data.assignee
        task.creator = data.creator
        task.tags = data.tags
        task.targetDate = data.targetDate
        task.criationDate = data.criationDate
        task.updated = data.updated
        task.description = data.description
        task.sprint = data.sprint
        task.fixed = data.fixed

        return task
    }
}

export default Task;