function getPersons(name, age) {

    class MyObject {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
    }

    const obj2 = new MyObject(name, age);

    const obj3 = Object.create(Object.prototype);
    obj3.name = name;
    obj3.age = age;

    const obj4 = Object.assign({}, { name, age });

    return [
        {
            name,
            age
        },
        obj2,
        obj3,
        obj4
    ];
}

//Test
console.log(getPersons('alex', '10'));

