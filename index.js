
const data = document.getElementById('inputdata');

let text= null;
const getInfo = () => {
 
    text = data.value;
           //Total Vowels
        let  vowels = text.match(/[aeiou]/gi).length;
         document.getElementById('vowel').innerHTML = vowels;
  
         //Total Consunant
       let  consonents = text.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
         document.getElementById('consonent').innerHTML = consonents;
        
         // Total Secentence

          let sentence = text.match(/\056/gi).length;
          document.getElementById('sent').innerHTML = sentence;
        //Total Words

       let words = text.match(/[A-Za-z]+/gi).length;
         document.getElementById('word').innerHTML = words;
        
         //Total Digits 

         let digits = text.match(/\d/g).length;
          document.getElementById('digit').innerHTML = digits;
        //Total Upper Case

        let   upperCase =   text.match(/[A-Z]/g).length;
        document.getElementById('uCase').innerHTML = upperCase;
        
        // Total Lowe Case

        let lowerCase =   text.match(/[a-z]/g).length
        document.getElementById('lCase').innerHTML = lowerCase;
        
        //Total Spaces

        let  spaces = text.match(/\s/g).length;
        document.getElementById('space').innerHTML = spaces;

    
}
