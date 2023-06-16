const data = [
  {
    question: "Când a aparut JS?", 
    variants: {
      variant1: "2000", 
      variant2: "1995",
      variant3: "1992", 
      variant4: "1989",
      correct: "variant2"
    } 
  },

  {
    question: "Cîte luni are anul?", 
    variants: {
      variant1: "9", 
      variant2: "13",
      variant3: "12",
      variant4: "10",
      correct: "variant3"
    }
  },
  {
    question: "un ou fierbe in 10 minute, dar 5 oua in cit timp vor fierbe?", 
    variants: {
      variant1: "10 minute",
      variant2: "50 minute", 
      variant3: "15 minute", 
      variant4: "30 minute",
      correct: "variant1"
    }
  },
  {
    question: "Care este fondatorul Microsoft?", 
    variants: {
      variant1: "Lary Page",
      variant2: "Elon Musk",
      variant3: "Steve Jobs", 
      variant4: "Bill Gates",
      correct: "variant4"
    }
  },
  {
    question: "Cite ore are ziua?", 
    variants: {
      variant1: "24", 
      variant2: "30",  
      variant3: "33",  
      variant4: "8",
      correct: "variant1"
    }
  },
]

const quiz = document.querySelector('#quiz')
const question = document.getElementsByClassName("question")
const variants = document.querySelectorAll('.answer')
const varianta_1 = document.getElementById("answer-a")
const varianta_2 = document.getElementById("answer-b")
const varianta_3 = document.getElementById("answer-c")
const varianta_4 = document.getElementById("answer-d")
const submitBtn = document.getElementById('submit')

function showNextQuestion(numarIntrebare = 0) {

  for (let i = 0; i <= 4; i++) {
    question[0].innerText = data[i].question;

    for (let j = 1; j < 5; j++) {
      variants[j - 1].innerText = data[1].variants['variant' + j];
    }

    if (numarIntrebare === i) {
      break;
    }
  }
}

showNextQuestion();

let nrIntrebarii = 0
let raspunsuriCorecte = 0

startQuiz()

function startQuiz() {
  const nrIntrebariiData = data[nrIntrebarii].variants;

  question.innerText = nrIntrebariiData.question
  varianta_1.innerText = nrIntrebariiData.variant1
  varianta_2.innerText = nrIntrebariiData.variant2
  varianta_3.innerText = nrIntrebariiData.variant3
  varianta_4.innerText = nrIntrebariiData.variant4
}


function rsSelectat() {
  let answerEl = document.querySelectorAll(".quiz__box .answer");
  let answer;

  answerEl.forEach(selected => {
    if(selected.checked) {
      answer = selected.id
    }
  });

  return answer
}

submitBtn.addEventListener('click', () => {
  const answer = rsSelectat()
  if(answer) {
    if(answer === data[nrIntrebarii].variants.correct) {
      raspunsuriCorecte++
    }

    nrIntrebarii++

    if(nrIntrebarii < data.length) {
      startQuiz()
      showNextQuestion(nrIntrebarii)
    } else {
      quiz.innerHTML = `
      <h2>Ai raspuns corect la ${raspunsuriCorecte}/${data.length} intrebari</h2>

      <button onclick="location.reload()">De la inceput</button>
      `
    }
  }
})
