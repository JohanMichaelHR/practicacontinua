const saludar = require('./index');

test('debería retornar "Hola Mundo"', () => {
    expect(saludar()).toBe("Hola Mundo");
});
