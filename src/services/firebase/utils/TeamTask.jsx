import Task from "../document/Task"
import TaskCollection from "../document/TaskCollection"

var tasks = []
async function AddTaksToList(params) {
    tasks.push(params)
}

async function GetTasksByTeam(team) {
    const snapshot = await TaskCollection.where('team', '==', team).get()
    snapshot.forEach( doc => {
        var task = new Task(doc.data.creator).fromFirebaseData(doc.data)
        console.log(doc.id, '=>', task)
        AddTaksToList(task)
    })

    return tasks
}

const getTasksByTeam = async (teamId) => {
    const foundTasks = [];
    const snapshot = await TaskCollection.where('team', '==', teamId).get()

    snapshot.forEach( doc => {
        var task = new Task(doc.data().creator).fromFirebaseData(doc.data())
        console.log(doc.id, '=>', task)
        foundTasks.push({id: doc.id,...task})
    })

    return foundTasks;
}

const TeamTask = {
    GetTasksByTeam: (team) => {
        tasks = []
        GetTasksByTeam(team)
    },
    TeamTasks: () => {
        return tasks
    },
    getTasksByTeam
}

export default TeamTask;