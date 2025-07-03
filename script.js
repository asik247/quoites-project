
function generate(){
    var quoites = {
        "khan chanda":'"I am no bird; and no net ensnares me: I am a free human being with an independent will"',
        "Charlotte Bronte":'"he most courageous act is still to think for yourself. Aloud"',
         "asik":'"They who can give up essential liberty to obtain a little temporary safety deserve neither liberty nor safety"'
    }
    var authors = Object.keys(quoites)
    var author = authors[Math.floor(Math.random()*authors.length)]
    var quoite = quoites[author];
    
   document.getElementById("quote").innerHTML = quoite;
   document.getElementById("name").innerHTML = author;
}
      