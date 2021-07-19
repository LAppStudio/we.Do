import Task from "../document/Task"
import TaskCollection from "../document/TaskCollection"

var tasks = []
async function AddTaksToList(params) {
    tasks.push(params)
}

async function GetTasks() {
    const snapshot = await TaskCollection.get()
    snapshot.forEach( doc => {
        var task = new Task(doc.data().creator).fromFirebaseData(doc.data())
        console.log(doc.id, '=>', task)
        AddTaksToList(task)
    })

    return tasks
}

const GetTask = {
    GetTasks: () => {
        tasks = []
        GetTasks()
    },
    Tasks: () => {
        return tasks
    }
}

export default GetTask;