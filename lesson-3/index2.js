function getPersons(name, age) {

    class MyObject {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
    }

    const obj2 = new MyObject('name', age);

    const obj3 = Object.create(Object.prototype);
    obj3.name = name;
    obj3.age = age;

    const obj4 = Object.assign({}, { name, age });

    const obj5 = { ...obj2 }

    const obj6 = structuredClone(obj2)

    const obj7 = JSON.parse(JSON.stringify(obj2))

    return [
        {
            name,
            age
        },
        obj2,
        obj3,
        obj4,
        obj5,
        obj6,
        obj7
    ];
}

//Test
console.log(getPersons('alex', '10'));

