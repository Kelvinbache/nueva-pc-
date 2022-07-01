export const todo = async ()=>{
   const datos = await fetch(`https://dog.ceo/api/breeds/image/random/3`);
   const Jsonn  = await datos.json()
   .then(muetra => console.log(muetra.message));
}

/* cosas para resolver

1)conectar la api
2)Json como utilizarlo
3)forma visual con dom
4)usar codigo asincrono
5)fetch reforzar
*/