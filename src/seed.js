// ./seed.js

const axios = require("axios");
const faker = require('faker');
const tasksurl = 'https://fairtasker-4f03c.firebaseio.com/tasks.json';
const tasks = Array(50).fill(0);

const TASK_STATUS = {
    ASSIGNED: 'Assigned',
    COMPLETED: 'Completed',
    DRAFT: 'Draft',
    OPEN: 'Open',
}

const getStatus = (status) => {
    switch (status) {
        case 0: return TASK_STATUS.OPEN;
        case 1: return TASK_STATUS.ASSIGNED;
        default: return TASK_STATUS.COMPLETED
    }
}

const getTime = (times) => {
    let time = [];
    switch (times) { 
        case 4: time.unshift('Night');
        case 3: time.unshift('Afternoon');
        case 2: time.unshift('Lunch');
        case 1: time.unshift('Morning'); break;
        default: time = 'Anytime'; break;
    }

    return time;
}

function iterateSeries(collection, iteratorCallback) {

    var stoppingPoint = collection.length;

    function iterate(index) {

        if (index === stoppingPoint) {
            console.log('Database has been seeded');
            return;
        }

        iteratorCallback(index, () => {
            iterate(index + 1)
        })

    }

    iterate(0)
}

iterateSeries(tasks, (i, callback) => {
    
        axios.post(tasksurl, {
            title: `Task ${i}`,
            description: faker.lorem.sentences(3),
            budget: faker.random.number({min:5, max:2000}),
            postedBy: {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName()
            },
            date: faker.date.future(),
            time: getTime(faker.random.number(4)),
            location: {
                city: faker.address.city(),
                state: faker.address.stateAbbr()
            },
            status: getStatus(i % 3),
            createdAt: Date.now()
        }).then(() => { callback() }).catch((err) => {console.log(err)})
})
