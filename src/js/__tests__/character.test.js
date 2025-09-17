import Character from "../class/Character";


test('should throw an error if name length is less than 2', () => {
    expect(() => {
        new Character('B', 'Bowman', 100, 1, 25, 25);
    }).toThrow('Кол-во символов в name от 2 до 10!');
});

test('should throw an error if name length is more than 10', () => {
    expect(() => {
        new Character('RobertoPistruni', 'Bowman', 100, 1, 25, 25);
    }).toThrow('Кол-во символов в name от 2 до 10!');
});

test('should throw an error if type is not valid', () => {
    expect(() => {
        new Character('Basil', 'Warrior', 100, 1, 25, 25);
    }).toThrow('Данные введены некорректно!');
});
