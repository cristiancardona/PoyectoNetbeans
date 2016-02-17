/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function validar(f){
    var ok = true;
    var msg = "Es oblicatorio llenar todos los campos:\n";
   if(f.elements[0].value == "")
   {
       msg += "- Nombre\n";
       ok = false;
   } 
     if(f.elements["apellido"].value == "")
   {
       msg += "- Apellido\n";
       ok = false;
   } 
    if(f.num1.value == "")
   {
       msg += "- indicativo\n";
       ok = false;
   } 
    if(f.num2.value == "")
   {
       msg += "- codigo de area\n";
       ok = false;
   }
    if(f.num3.value == "")
   {
       msg += "- diferencial\n";
       ok = false;
   }
    if(f.criadero.value == "")
   {
       msg += "- Nombre Criadero\n";
       ok = false;
   }
    if(f.direccion.value == "")
   {
       msg += "- Direccion\n";
       ok = false;
   }
    if(f.correo.value == "")
   {
       msg += "- Correo Electronico\n";
       ok = false;
   }
    if(f.linea.value == "")
   {
       msg += "- Linea Cria\n";
       ok = false;
   }
    if(f.codigo.value == "")
   {
       msg += "- Codigo Usario\n";
       ok = false;
   }
   if(ok == false){
       alert(msg);
       return ok;
   }
 }
    
function limitar(l){
    if(nombre.value.length < 5)
    {
       alert("debes de ingresar un ususarion con mas caracteres");
       return false;
    }
    if(num1.value.length <= 2)
    {
        alert("debes de ingresar un indicativo de tres digitos");
       return false;
    }
    if(num2.value.length <= 2)
    {
       alert("debes de ingresar un codigo de area de tres digitos");
       return false;
    }
}
    
    

