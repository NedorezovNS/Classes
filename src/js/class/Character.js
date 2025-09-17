
export default class Character {
    
    constructor(name, type, health, level, attack, defence) {
        if (typeof name == 'number' || name.length < 2 || name.length > 10) {
            throw new Error("Кол-во символов в name от 2 до 10!")
        }
        if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
            throw new Error("Данные введены некорректно!")
        }
        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
    }
}
