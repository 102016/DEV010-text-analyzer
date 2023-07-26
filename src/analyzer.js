const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const arrWords = text.split( " " );
    return arrWords.length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    return text.replace( /\s/g, '' ).length
    
  }, 
  
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let suma = 0;
    for (let i = 0; i <text.length ; i++){
      const char = text[i].length;
      suma = suma + char
      // if (!isNaN(char) && char !== " " )suma= suma +(char*1);
    }
    // console.log(suma, text.split(" ").length);

    Math.round(suma/ text.split(" ").length)
    const roundout = Math.round(suma/ text.split(" ").length)

    return roundout
    

  },
  getNumberCount: (text) =>{
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    let count = 0;
    for( let i = 0; i < text.length ; i++){
      const char = text[i]
      if(!isNaN(char) && char !== " " )
        count++; 
    }  
    return count;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let suma = 0;
    for( let i = 0; i < text.length ; i++){
      const char = text[i];
      if(!isNaN(char) && char !== " " )
        suma= suma + (char*1); 
    }  
    return suma;
  },
}

export default analyzer;

