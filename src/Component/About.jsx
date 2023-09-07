import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './About.css'


function About() {
  const [count, setCount] = useState(0)

  return (
    <div id='about'>
      <h2>About Naruto</h2>
      <p>Naruto Uzumaki is a young boy from the Hidden Leaf Village and
         the biggest problem child at the ninja academy.
         He causes mischief every day and is constantly being scolded by his teacher, 
         Iruka Umino. He has fallen so far behind in his studies that 
         his graduation is uncertain, but Naruto actually dreams of 
         becoming the leader of the village, known as the Hokage, and vows to one day become the No. 1 ninja.
        However, all the adults in the village treat Naruto with disdain due to a secret surrounding his birth. 
        12 years ago, when Naruto was just a baby, the Nine-Tailed Fox attacked the village, and 
        the only way to stop it was to seal it inside of him. This fact is first revealed to him by 
        Mizuki, an instructor at the academy who uses Naruto to steal the Scroll of Sealing from the current Hokage. 
        Once the deed is done, he appears before the young ninja and discloses the shocking truth behind his birth. 
        Naruto manages to defeat Mizuki with Iruka’s help, who despite knowing about Naruto’s past, 
        has always believed in him. After learning Iruka’s true feelings, Naruto gains a renewed determination to pursue his dream.
        After successfully graduating from the academy alongside fellow students Sasuke Uchiha and Sakura Haruno, 
        Naruto finally takes the first steps on his journey as a real ninja!</p>
    </div>
  )
}

export default About
