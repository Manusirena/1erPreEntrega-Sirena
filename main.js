const comprarProductos = () => {
let producto = '';
let precio = 0;
let cuotas = 0;
let cantidad = 0;
let seguirComprando = true;


do {

    do {
        alert('Por favor ingrese un producto es stock');
        producto = prompt('celular, computadora, tablet');

    switch(producto) {
        case 'celular':
        precio = 30000;
        alert('el precio es de $30.000');
        seguirComprando = false;
        break;

        case 'computadora':
        precio = 300000;
        alert('el precio es de $300.000');
        seguirComprando = false;
        break;

        case 'tablet':
            precio = 60000;
            alert('el precio es de $60.000');
            seguirComprando = false;
            break;

        default:
            alert('porfavor seleccione un producto existente');    
    }


}while(seguirComprando);

cantidad = prompt('cuantos productos desea llevar?');

if( cantidad === '') {
    alert('seria un total de: $' + Number(precio));
}else {
alert('seria un total de: $'+ precio * cantidad);
}

do {
    alert('que plan de cuotas prefiere');
    cuotas =prompt(' 3 , 6 , 12 o ninguno ?');

    switch(cuotas) {
       case '3':

       if (cantidad === '') {
        alert ('tendra que pagar 3 cuotas de: $' + precio / 3);

       }else {
         alert ('tendra que pagar 3 cuotas de: $' + precio * cantidad / 3);
         seguirComprando = false;
       }
         break;
       
         case '6':

         if (cantidad === '') {
            alert ('tendra que pagar 3 cuotas de: $' + precio / 6);

         }else {
           alert('tendra que pagar 6 cuotas de: $' + precio * cantidad  / 6);
           seguirComprando = false;
         }
           break;

         case '12':

         
         if (cantidad === '') {
            alert ('tendra que pagar 3 cuotas de: $' + precio / 12);
            
         }else {
           alert('tendra que pagar 12 cuotas de: $' + precio * cantidad  / 12);
           seguirComprando = false;
         }
           break;
           
        case 'ninguno':
           alert('tendra que pagar una cuota de: $' + precio);
           seguirComprando = false;
           break;
           

       default:
           alert('por favor elegir un plan de cuotas');  
           seguirComprando = true; 
}


}while (seguirComprando);

if (cantidad === '') {
alert('el total es de: $'+ precio +' por compra de ' + producto );

}else {
    alert('el total es de: $'+ precio * cantidad   +' compra de ' + producto+' '+' x'+ cantidad );
}

seguirComprando = confirm('¿Desea seguir comprando?');

}while(seguirComprando);




}
comprarProductos();