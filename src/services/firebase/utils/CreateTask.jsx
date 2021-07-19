import TaskCollection from "../document/TaskCollection";
import Task from "../document/Task"

async function CreateTaskInBacklog(user, taskName, teamName, callback) {
    var newTask = new Task(user)
    newTask.team = teamName;
    newTask.name = taskName;

    console.log('asFireaseData: ', newTask.asFirebaseData())

    const res = await TaskCollection.doc(taskName).set(
        newTask.asFirebaseData()
    ).finally(()=>{
        console.log("sent")
        callback()
    })
}


async function CreateTaskFromTask(newTask, callback) {

    console.log('asFireaseData: ', newTask.asFirebaseData())

    const res = await TaskCollection.doc(newTask.name).set(
        newTask.asFirebaseData()
    ).finally(()=>{
        console.log("sent")
        callback()
    })
}

const CreateTask = {
    CreateTask: (user, taskName, teamName, callback) => {
        CreateTaskInBacklog(user, taskName, teamName, callback)
    },
    FromTask: (task, callback) => {
        CreateTaskFromTask(task, callback)
    }
}

export default CreateTask;