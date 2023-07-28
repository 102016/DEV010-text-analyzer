import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const textarea = document.querySelector("[name='user-input']")  
*/const textarea = document.getElementById("test1");*/

textarea.addEventListener( "keyup", ( ) => {

  const text = textarea.value;

  const wordCountContainer = document.querySelector( "[data-testid='word-count']" )
  const wordCount = analyzer.getWordCount( text );
  wordCountContainer.innerHTML = "Palabras: " + wordCount

  const characterwordContainer = document.querySelector( "[data-testid='character-count']" )
  const characterCount = analyzer.getCharacterCount( text );
  characterwordContainer.innerHTML = "contador de caracteres: " + characterCount

  const Charactersinespacio = document.querySelector( "[data-testid='character-no-spaces-count']" )
  const CharactersinespacioCount = analyzer.getCharacterCountExcludingSpaces (text);
  Charactersinespacio .innerHTML = "contador de caracteres sin espacio: " + CharactersinespacioCount

  const NumberContiner = document.querySelector( "[data-testid='number-count']" )
  const Numbercount= analyzer.getNumberCount( text );
  NumberContiner.innerHTML = "contador de numeros: " + Numbercount

  const NumberSumar = document.querySelector( "[data-testid='number-sum']" )
  const Numbersuma= analyzer.getNumberSum( text );
  NumberSumar.innerHTML = "suma: " + Numbersuma

  const WordAverage = document.querySelector( "[data-testid='word-length-average']" )
  const wordlengthaverage= analyzer.getAverageWordLength( text );
  WordAverage.innerHTML = "Longitud: " + wordlengthaverage
  
} ) 

const cleaner = document.querySelector("#reset-button")

cleaner.addEventListener("click", () => {

  const wordCountContainer = document. querySelector ("[data-testid='word-count']")
  wordCountContainer.innerHTML = "Palabras:";
  
  const characterwordContainer = document. querySelector ("[data-testid='character-count']")
  characterwordContainer.innerHTML = "contador de caracteres:";

  const Charactersinespacio  = document. querySelector ("[data-testid='character-no-spaces-count']")
  Charactersinespacio .innerHTML = "contador de caracteres sin espacio:";

  const NumberContiner = document. querySelector ("[data-testid='number-count']")
  NumberContiner.innerHTML = "contador de numeros:";

  const NumberSumar = document. querySelector ("[data-testid='number-sum']")
  NumberSumar.innerHTML = "suma:";

  const WordAverage = document. querySelector ("[data-testid='word-length-average']")
  WordAverage .innerHTML = "Longitud:";

  textarea.value = "";

})



