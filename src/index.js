import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const textarea = document.querySelector("[name='user-input']")  

textarea.addEventListener( "keyup", ( ) => {

  const text = textarea.value;

  const wordCountContainer = document.querySelector( "[data-testid='word-count']" )
  const wordCount = analyzer.getWordCount( text );
  wordCountContainer.innerHTML = "Palabras: " + wordCount

  const characterwordContainer = document.querySelector( "[data-testid='character-count']" )
  const characterCount = analyzer.getCharacterCount( text );
  characterwordContainer.innerHTML = "Caracteres: " + characterCount

  const Charactersinespacio = document.querySelector( "[data-testid='character-no-spaces-count']" )
  const CharactersinespacioCount = analyzer.getCharacterCountExcludingSpaces (text);
  Charactersinespacio .innerHTML = "Caracteres Sin Espacios: " + CharactersinespacioCount

  const NumberContiner = document.querySelector( "[data-testid='number-count']" )
  const Numbercount= analyzer.getNumberCount( text );
  NumberContiner.innerHTML = "Números: " + Numbercount

  const NumberSumar = document.querySelector( "[data-testid='number-sum']" )
  const Numbersuma= analyzer.getNumberSum( text );
  NumberSumar.innerHTML = "Suma números: " + Numbersuma

  const WordAverage = document.querySelector( "[data-testid='word-length-average']" )
  const wordlengthaverage= analyzer.getAverageWordLength( text );
  WordAverage.innerHTML = "Longitud promedio palabra: " + wordlengthaverage
  
} ) 

const cleaner = document.getElementById("reset-button")

cleaner.addEventListener("click", () => {

  const wordCountContainer = document. querySelector ("[data-testid='word-count']")
  wordCountContainer.innerHTML = "Palabras";
  
  const characterwordContainer = document. querySelector ("[data-testid='character-count']")
  characterwordContainer.innerHTML = "Caracteres";

  const Charactersinespacio  = document. querySelector ("[data-testid='character-no-spaces-count']")
  Charactersinespacio .innerHTML = "Caracteres Sin Espacios";

  const NumberContiner = document. querySelector ("[data-testid='number-count']")
  NumberContiner.innerHTML = "Números";

  const NumberSumar = document. querySelector ("[data-testid='number-sum']")
  NumberSumar.innerHTML = "Suma números";

  const WordAverage = document. querySelector ("[data-testid='word-length-average']")
  WordAverage .innerHTML = "Longitud promedio palabra";

  textarea.value = "";

})



