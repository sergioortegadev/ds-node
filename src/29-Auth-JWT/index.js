import bcrypt from "bcrypt";
//import jwt from "jsonwebtoken";

let miPassword = "Dani123";

const salt = await bcrypt.genSaltSync(10);
const passwordHashed = await bcrypt.hash(miPassword, salt);

console.log(`El salt es ${salt}  El pass original es: ${miPassword}   Y Hasheado: ${passwordHashed}`);
/*
const compare1 = await bcrypt.compare("vsdfasdf", passwordHashed);
console.log(compare1);
const compare2 = await bcrypt.compare("Dani123", passwordHashed);
console.log(compare2);

const objetoQueQuieroEncriptar = {
  id: "sdkljh23sdfawl23948",
  admin: true,
  nombre: "Dani",
  apellido: "Sego",
};

const token = jwt.sign(objetoQueQuieroEncriptar, "miContrasenaSoloParaBack");

console.log(token);

jwt.verify(token, "miContrasenaSoloParaBack", (err, data) => {
  if (err) return err;
  console.log(data);
});
*/
