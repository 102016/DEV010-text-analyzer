const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const arrWords = text.split(" ");
    return arrWords.length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    return text.replace(/[^a-z0-9]/gi,'').length;
  },

  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const eliminarNumero = text.replace(/\d+/g, ''); // hace que remplace = remplaza los numeros, quita los numeros 
    const contar=eliminarNumero.replace(/\s/g, '').length; // cuenta los caracteres sin espacio solo las letras
    const palabras=eliminarNumero.trim().split(/\s+/) // divide el texto en palabras sin numeros 
    const contarPalabra= palabras.length;
    if(contarPalabra===0){ 
      return 0;
    }
    const promedio= contar/contarPalabra;
    return parseFloat(promedio.toFixed(2)); //parseFloat es para asegurar un resultado numero y toFixed para que solo sea 2 decimales
    /*cambio de codigo
    let suma = 0;
    for (let i = 0; i < text.length; i++) {
      const char = text[i].length;
      suma = suma + char;
      // if (!isNaN(char) && char !== " " )suma= suma +(char*1);
    }
    // console.log(suma, text.split(" ").length);

    Math.round(suma / text.split(" ").length);
    const roundout = Math.round(suma / text.split(" ").length);

    return Number(roundout);*/
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const dividir = text.split(' ')   
    let count = 0;
    for (let i = 0; i < dividir.length; i++) {
      if(Number(dividir[i])){
        count++;
      }
    }
    return count;
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const dividir = text.split(' ')
    let suma = 0;
    for (let i = 0; i < dividir.length; i++) {
      if(Number(dividir[i])){
        suma=suma+Number(dividir[i])
      }
    }
    return suma;
  },
};

export default analyzer;
