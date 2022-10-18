// Algo que no puede ser cambiado desde su creacion.


// ¿porque es importante?
// Redux no indicara a la UI que debe renderizar nuevamente, si su estado inicial y el estado
// retornado son exactamente iguales. 

// ¿como trabajar la inmutabilidad con JS?
// -object.assign
// -Spread operator


// desventajas
// -generacion constante de objetos
// -propenso a errores humanos
// -menos trazabilidad


//mutable
// const updateAge = (userInfo) => {
//     userInfo.age = userInfo.age + 1;
//     return userInfo;
// };

//inmutable: object.assign
// const updateAge = (userInfo) =>{
//     return Object.assign({}, userInfo, {age: userInfo.age + 1})
// }

//inmutable: spread Operator
const updateAge = (userInfo)=>{
    return{...userInfo, age: userInfo.age + 1}
}


const userInfo = {
    name: 'eddie',
    age: 22,
    email: 'ed@gmail.com'
};

console.log('userInfo BEFORE', userInfo)

const updateUserInfo = updateAge(userInfo);

console.log('userInfo After', userInfo);
console.log('updateUser', updateUserInfo);