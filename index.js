const data = [
  {question: "Când a aparut JS?", 
    variants: {
      variant1: "2000", 
      variant2: "1995", 
      variant3: "1992", 
      variant4: "1989"}
  },
  {question: "Cate luni are anul?", 
    variants: {
      variant1: "9", 
      variant2: "13", 
      variant3: "12", 
      variant4: "10"}
  },
  {question: "un ou fierbe in 10 minute, dar 5 oua in cit timp vor fierbe?", 
    variants: {
      variant1: "10 minute", 
      variant2: "50 minute", 
      variant3: "15 minute", 
      variant4: "30 minute"}
  },
  {question: "Care este fondatorul Microsoft?", 
    variants: {
      variant1: "Lary Page", 
      variant2: "Elon Musk", 
      variant3: "Steve Jobs", 
      variant4: "Bill Gates"}
  },
  {question: "Cate ore are ziua?", 
    variants: {
      variant1: "24", 
      variant2: "30", 
      variant3: "33", 
      variant4: "8"}
  },
]

const question = document.getElementsByClassName("q1");
const variants = document.querySelectorAll('.quiz__box label');

function showNextQuestion(numarIntrebarii = 0) {

  for (let i = 0; i <= 4; i+) {
    question[0].innerText = data[i].question;

    for (let j = 1; j < 5; j++) {
      variants[j - 1].innerText = data[i].variants['variant' + j];
    }

    if (numarIntrebarii === i) {
      break;
    }
  }
}