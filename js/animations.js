/** @format */
let i = 0;
const txt =
  "Zulu people have always strongly believed in ancestral spirits referred to as 'amadlozi or abaphansi'. The tribe also believes in the existence of a higher being(human) who they refer to as 'UMveliqangi', meaning one who came first. This highest being is believed to be far removed from people's lives and that no one has ever set eyes on him. They believe that there is some meditation between the spirits of the dead and 'the one who came first' for the people alive on Earth.";
speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
