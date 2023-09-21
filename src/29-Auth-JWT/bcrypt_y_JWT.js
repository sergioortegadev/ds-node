import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Hash de password para almacenar en DB, No se almacenan Pass en testo plano, o sea sin encriptar.
let miPassword = "Sergio1234";

const salt = await bcrypt.genSaltSync(10);
const passwordHashed = await bcrypt.hash(miPassword, salt);

console.log(`El salt es ${salt}  El pass original es: ${miPassword} Y Hasheado: ${passwordHashed}`);

// Como esta encriptación es en un solo sentido, luego de hasheado no se puede volver atrás. Para autenticar la pass ingresada, con la hasheada almacenada en DB se utiliza el metodo .compare()
const compare1 = await bcrypt.compare("vsdfasdf", passwordHashed);
console.log(`Comparar pass "vsdfasdf" con el hasheado: ${compare1}`); // false

const compare2 = await bcrypt.compare("Sergio1234", passwordHashed);
console.log(`Comparar pass "Sergio1234" con el hasheado: ${compare2}`); // true

// Con JWS eviamos y recibimos datos encriptados, lo importante es la firma. Que nos garantiza que fue emitido por nosotros.
console.log(`   >>JWS el toquen encriptado:`);

const objetoQueQuieroEncriptar = {
  id: "sdkljh23sdfawl23948",
  admin: true,
  nombre: "Sergio",
  apellido: "Ortega",
};

const token = jwt.sign(objetoQueQuieroEncriptar, "miContrasenaSoloParaBack"); // no es la contraseña del usuario, es la password que utilizaré para firmar el token. Se recomienda utilizar variables de entorno para no escribirla en el código (.env)

console.log(token);

console.log("  >> Desencriptado: ");
jwt.verify(token, "miContrasenaSoloParaBack", (err, data) => {
  if (err) return err;
  console.log(data);
});
