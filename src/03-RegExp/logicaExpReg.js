let reg1 = /^(?=.*[0-9])(?=.*[a-zA-ZñÑ])[a-zA-Z0-9\s_+*@#ñÑáéíóúÁÉÍÓÚ]+$/;
let reg2 =
  /^(?=.*[0-9])(?=.*[a-zñ])(?=.*[A-ZÑ])(?=.*[A-ZÑ])[\w\s_\-+*@#ñÑáéíóúÁÉÍÓÚ]+$/;
let reg3 =
  /^(?=.*[0-9])(?=.*[a-zñ])(?=.*[A-ZÑ])(?=.*[A-ZÑ])(?=.*[_\-+*@#])[\w\s_\-+*@#ñÑáéíóúÁÉÍÓÚ]+$/;

export function check(texto, verificado) {
  /* console.log("Para la exp reg: " + reg);
  console.log(`El texto: "` + texto + `", nos da: ` + reg.test(texto)); */
  if (reg3.test(texto)) {
    return console.log("- - Contraseña Alta - - "), verificado(3);
  }
  if (reg2.test(texto)) {
    return console.log("- - Contraseña Media - - "), verificado(2);
  }
  if (reg1.test(texto)) {
    return console.log("- - Contraseña Simple - - "), verificado(1);
  }
  return console.log("- - Contraseña no valida - - "), verificado(0);
}

//let regForm = new RegExp("1-9");
//check(reg1, "asw 3 ord  l ñ");
//check(reg2, "aassword8 Ñandú");
//check(reg3, "aassw#ord8 Ñandú");
