import { TaskInterface } from "../interfaces/task.interface"

export const tasks: TaskInterface[] = [
    { id: 1, title: 'Finish project documentation', isCompleted: false },
    { id: 2, title: 'Create wireframe for the new feature that we plan to release next quarter as it will include significant updates to the user interface and backend logic based on feedback from our current users and stakeholders.', isCompleted: true },
    { id: 3, title: 'Fix bugs in the login module', isCompleted: false },
    { id: 4, title: 'Write unit tests for components to ensure they are working as expected and handle edge cases that could potentially break the application in production or during further development when new features are added.', isCompleted: true },
    { id: 5, title: 'Update dependencies in package.json', isCompleted: false }
]