
export default class Character {
    
    constructor(name, type) {
        const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        
        if (typeof name == 'number' || name.length < 2 || name.length > 10) {
            throw new Error("Кол-во символов в name от 2 до 10!")
        }
        if (!types.includes(type)) {
            throw new Error("Данные введены некорректно!")
        }
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = undefined;
        this.defence = undefined;
    }
}
