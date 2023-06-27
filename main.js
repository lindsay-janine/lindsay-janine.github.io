let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 

typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #683e67;">Desarrollo sitios web, me gusta la ingeniería y la programación.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();



  