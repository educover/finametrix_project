
var funcion = function(e){
    $('.ext').empty();
    //console.log(e.target.value)
    
    //console.log(e.target.value.length)
    
    let a=[];
    for (let i = e.target.value.length-1; i > 0; i--) {
        a.push(e.target.value[i])
        
    }
    //console.log(a)
    let index = a.indexOf('.');
    //console.log(index)
    let b=[];
    for (let x = index-1; x > -1; x--) {
        b.push(a[x])
        
    }
    console.log(b)
    b=b.toString();
    console.log(typeof(b))
    console.log(b)
    if(!(b.toUpperCase()==='C,S,V' || b.toLowerCase()==='c,s,v')){
    //let file = file1.substr(index);
    //$('.ext').append('<p>Extension del archivo subido: '+b+'</p>');
    $('.ext').append('La extension debe ser : CSV');
    $('.file').val('');
    } 
}

$("input[name='file']").change(funcion);

$(document).ready(function() {    
    $('.but').on('click', function(){       
        //Añadimos la imagen de carga en el contenedor
        $('#content').html('<div class="loading"><img src="images/ajax-loader.gif" alt="loading" /><br/>Un momento, por favor...</div>');       
    });  
});    