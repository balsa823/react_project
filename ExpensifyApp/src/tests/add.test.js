const add = (a,b) => a + b ;
const genGre = (name) => `Hello ${name}!`;
test('Should add two numbers',()=>{
    const result = add(3,4);
    expect(result).toBe(7);
    

}); 

test('Should greet', () => {
    const result = genGre("Ana");
    expect(result).toBe("Hello Ana!");


}); 

test('Should greet 2', () => {
    const result = genGre("");
    expect(result).toBe("Hello !");
}); 