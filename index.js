const questions = [
  {query: "Cand a aparut JS?", 
    variants: {
      variant1: "2000", 
      variant2: "1995", 
      variant3: "1992", 
      variant4: "1989"}
  }
]

const question1 = document.querySelector('.q1');
const q1Answer1 = document.querySelector('#a_text');
const q1Answer2 = document.querySelector('#b_text');
const q1Answer3 = document.querySelector('#c_text');
const q1Answer4 = document.querySelector('#d_text');

question1.innerText = questions[0].query;
q1Answer1.innerText = questions[0].variants.variant1;
q1Answer2.innerText = questions[0].variants.variant2;
q1Answer3.innerText = questions[0].variants.variant3;
q1Answer4.innerText = questions[0].variants.variant4;

