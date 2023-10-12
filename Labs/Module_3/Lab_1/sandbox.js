let Person = (name, age, gender) => {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.toString = () => {
        return `name: ${this.name} age: ${this.age} gender: ${this.gender}`
    }
}
let person1 = Person('James Brown', 73, 'male');
console.log('person1: '+person1); 