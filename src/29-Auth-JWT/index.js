import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

let miPassword = "Sergio1234";

const salt = await bcrypt.genSaltSync(10);
const passwordHashed = await bcrypt.hash(miPassword, salt);

console.log(`El salt es ${salt}  El pass original es: ${miPassword} Y Hasheado: ${passwordHashed}`);

const compare1 = await bcrypt.compare("vsdfasdf", passwordHashed);
console.log(`Comparar pass "vsdfasdf" con el hasheado: ${compare1}`);

const compare2 = await bcrypt.compare("Sergio1234", passwordHashed);
console.log(`Comparar pass "Sergio1234" con el hasheado: ${compare2}`);

const objetoQueQuieroEncriptar = {
  id: "sdkljh23sdfawl23948",
  admin: true,
  nombre: "Sergio",
  apellido: "Ortega",
};

const token = jwt.sign(objetoQueQuieroEncriptar, "miContrasenaSoloParaBack");

console.log(`   >>JWS el toquen encriptado:`);
console.log(token);

console.log("  >> Desencriptado: ");
jwt.verify(token, "miContrasenaSoloParaBack", (err, data) => {
  if (err) return err;
  console.log(data);
});
