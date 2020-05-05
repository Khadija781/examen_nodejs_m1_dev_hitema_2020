const fs = require('fs');

module.exports = class PeopleService {
    constructor() {
        this.peoples = JSON.parse(fs.readFileSync(__dirname + '/people.json', 'utf8'));
    }


    updatePeople(id, people) {
        const e = -1;
        const peopleIndex = this.peoples.findIndex(
            people => people.id === id
        );
        if(peopleIndex === e)return Promise.reject('invalid');

        this.peoples[peopleIndex] = people;
        return {isModified: true};
    }
    
    getPeople(filters) {
        const a = 0;
        console.log(Object.keys(filters).length);
        if(Object.keys(filters).length === a)
        {
            return this.peoples;
        }
        else
        {
            const peopleIndex = this.peoples.filters(
                people => people[Object.keys(filters)[0]]===filters[Object.keys(filters)[0]]
            );
            return peopleIndex;
        }
    }
}
