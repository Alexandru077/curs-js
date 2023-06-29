fetch("http://localhost:3000/question.json", {})
.then(result => result.json())
.then((data) => {
  startQuizz(data);

  document.querySelector("#quiz").style.display = "block";
  document.querySelector("#placeholder").style.display = "none";

}).catch((error) => {
  console.log(error);
});

function startQuizz(data) {

const quiz = document.querySelector('#quiz')
const question = document.getElementsByClassName("question")
const variants = document.querySelectorAll('.answer')
const varianta_1 = document.getElementById("answer-a")
const varianta_2 = document.getElementById("answer-b")
const varianta_3 = document.getElementById("answer-c")
const varianta_4 = document.getElementById("answer-d")
const submitBtn = document.getElementById('submit');

let nrIntrebarii = 0
let raspunsuriCorecte = 0


function showNextQuestion(numarIntrebare = 0) {

  const item = document.querySelector(".answer:checked");
  if (item) {
    item.checked = false;
  }

  question[0].innerText = data[numarIntrebare].question;

  for (let j = 1; j < 5; j++) {
    variants[j - 1].innerText = data[numarIntrebare].variants['variant' + j];
  }
}

function startQuiz() {
  const nrIntrebariiData = data[nrIntrebarii].variants;

  question.innerText = nrIntrebariiData.question
  varianta_1.innerText = nrIntrebariiData.variant1
  varianta_2.innerText = nrIntrebariiData.variant2
  varianta_3.innerText = nrIntrebariiData.variant3
  varianta_4.innerText = nrIntrebariiData.variant4
}


function rsSelectat() {
  let answer = document.querySelector(".quiz__box .answer:checked");

  return answer ? answer.id : null;
}

submitBtn.addEventListener('click', () => {
  const answer = rsSelectat()
  if (!answer) {
    return;
  }

  if (answer === data[nrIntrebarii].variants.correct) {
    raspunsuriCorecte++
  }

  nrIntrebarii++

  if (nrIntrebarii < data.length) {
    startQuiz()
    showNextQuestion(nrIntrebarii)
  } else {
    quiz.innerHTML = `
      <h2>Ai raspuns corect la ${raspunsuriCorecte}/${data.length} intrebari</h2>

      <button onclick="location.reload()">De la inceput</button>
      `
  }
})

showNextQuestion();
startQuiz()
}
