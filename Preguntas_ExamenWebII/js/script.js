// Matriz de preguntas
let questions = [
    {
        numb: 1,
        question: "¿Quién tiene más campeonatos de pilotos en la Fórmula 1?",
        answer: "Michael Schumacher",
        options: [
            "Ayrton Senna",
            "Michael Schumacher",
            "Lewis Hamilton",
            "Sebastian Vettel"
        ]
    },
    {
        numb: 2,
        question: "¿En qué año ganó Lewis Hamilton su primer campeonato mundial?",
        answer: "2008",
        options: [
            "2007",
            "2008",
            "2009",
            "2010"
        ]
    },
    {
        numb: 3,
        question: "¿Cuál es el circuito más largo en el calendario de Fórmula 1?",
        answer: "Circuito de Spa-Francorchamps",
        options: [
            "Circuito de Mónaco",
            "Circuito de Silverstone",
            "Circuito de Monza",
            "Circuito de Spa-Francorchamps"
        ]
    },
    {
        numb: 4,
        question: "¿Quién fue el primer campeón mundial de Fórmula 1?",
        answer: "Giuseppe Farina",
        options: [
            "Juan Manuel Fangio",
            "Alberto Ascari",
            "Giuseppe Farina",
            "Nino Farina"
        ]
    },
    {
        numb: 5,
        question: "¿Qué equipo ha ganado más campeonatos de constructores?",
        answer: "Ferrari",
        options: [
            "McLaren",
            "Mercedes",
            "Ferrari",
            "Red Bull Racing"
        ]
    },
    {
        numb: 6,
        question: "¿Cuál es el país natal de Ayrton Senna?",
        answer: "Brasil",
        options: [
            "Argentina",
            "Brasil",
            "México",
            "Portugal"
        ]
    },
    {
        numb: 7,
        question: "¿En qué año se introdujo el sistema de puntos actual en la Fórmula 1?",
        answer: "2010",
        options: [
            "2008",
            "2010",
            "2012",
            "2014"
        ]
    },
    {
        numb: 8,
        question: "¿Cuál es el nombre del circuito de Gran Premio en Japón?",
        answer: "Suzuka",
        options: [
            "Fuji",
            "Motegi",
            "Suzuka",
            "Okayama"
        ]
    },
    {
        numb: 9,
        question: "¿Quién ganó el campeonato mundial de Fórmula 1 en 1992?",
        answer: "Nigel Mansell",
        options: [
            "Ayrton Senna",
            "Nigel Mansell",
            "Alain Prost",
            "Nelson Piquet"
        ]
    },
    {
        numb: 10,
        question: "¿Cuál es el récord de victorias en una sola temporada?",
        answer: "13",
        options: [
            "10",
            "11",
            "12",
            "13"
        ]
    },
    {
        numb: 11,
        question: "¿Qué piloto es conocido como 'El Profesor'?",
        answer: "Alain Prost",
        options: [
            "Niki Lauda",
            "Ayrton Senna",
            "Alain Prost",
            "Nelson Piquet"
        ]
    },
    {
        numb: 12,
        question: "¿Cuál es el nombre del equipo que cambió su nombre a Mercedes en 2010?",
        answer: "Brawn GP",
        options: [
            "Honda",
            "Brawn GP",
            "Renault",
            "Toyota"
        ]
    },
    {
        numb: 13,
        question: "¿En qué año se celebró el primer Gran Premio de Fórmula 1?",
        answer: "1950",
        options: [
            "1948",
            "1950",
            "1952",
            "1954"
        ]
    },
    {
        numb: 14,
        question: "¿Qué piloto tiene el récord de pole positions?",
        answer: "Lewis Hamilton",
        options: [
            "Michael Schumacher",
            "Sebastian Vettel",
            "Ayrton Senna",
            "Lewis Hamilton"
        ]
    },
    {
        numb: 15,
        question: "¿Cuál es el nombre del circuito de Gran Premio en Australia?",
        answer: "Albert Park",
        options: [
            "Bathurst",
            "Phillip Island",
            "Albert Park",
            "Adelaide"
        ]
    },
    {
        numb: 16,
        question: "¿Quién es el piloto más joven en ganar un Gran Premio?",
        answer: "Max Verstappen",
        options: [
            "Sebastian Vettel",
            "Fernando Alonso",
            "Max Verstappen",
            "Lewis Hamilton"
        ]
    },
    {
        numb: 17,
        question: "¿Cuál es el equipo más antiguo en la Fórmula 1?",
        answer: "Ferrari",
        options: [
            "McLaren",
            "Mercedes",
            "Ferrari",
            "Williams"
        ]
    },
    {
        numb: 18,
        question: "¿En qué circuito se celebra el Gran Premio de Canadá?",
        answer: "Circuito Gilles Villeneuve",
        options: [
            "Mont Tremblant",
            "Mosport Park",
            "Circuito Gilles Villeneuve",
            "Montreal"
        ]
    },
    {
        numb: 19,
        question: "¿Qué piloto ganó el campeonato mundial en 1976 después de un accidente grave?",
        answer: "James Hunt",
        options: [
            "Niki Lauda",
            "James Hunt",
            "Mario Andretti",
            "Emerson Fittipaldi"
        ]
    },
    {
        numb: 20,
        question: "¿Cuál es el nombre del circuito de Gran Premio en Italia?",
        answer: "Monza",
        options: [
            "Imola",
            "Mugello",
            "Monza",
            "Vallelunga"
        ]
    },
    {
        numb: 21,
        question: "¿Quién es el piloto con más victorias en Mónaco?",
        answer: "Ayrton Senna",
        options: [
            "Michael Schumacher",
            "Lewis Hamilton",
            "Ayrton Senna",
            "Alain Prost"
        ]
    },
    {
        numb: 22,
        question: "¿En qué año se introdujeron los neumáticos de lluvia en la Fórmula 1?",
        answer: "1971",
        options: [
            "1969",
            "1971",
            "1973",
            "1975"
        ]
    },
    {
        numb: 23,
        question: "¿Qué piloto tiene el récord de más puntos en una sola temporada?",
        answer: "Lewis Hamilton",
        options: [
            "Sebastian Vettel",
            "Michael Schumacher",
            "Lewis Hamilton",
            "Nico Rosberg"
        ]
    },
    {
        numb: 24,
        question: "¿Cuál es el nombre del circuito de Gran Premio en Estados Unidos?",
        answer: "Circuito de las Américas",
        options: [
            "Indianapolis",
            "Long Beach",
            "Watkins Glen",
            "Circuito de las Américas"
        ]
    },
    {
        numb: 25,
        question: "¿Qué piloto ganó su primer Gran Premio en Canadá en 2007?",
        answer: "Lewis Hamilton",
        options: [
            "Robert Kubica",
            "Kimi Räikkönen",
            "Lewis Hamilton",
            "Felipe Massa"
        ]
    },
    {
        numb: 26,
        question: "¿Cuál es el nombre del equipo que ganó el campeonato de constructores en 2020?",
        answer: "Mercedes",
        options: [
            "Ferrari",
            "Red Bull Racing",
            "Mercedes",
            "McLaren"
        ]
    },
    {
        numb: 27,
        question: "¿Quién fue el compañero de equipo de Ayrton Senna en 1988?",
        answer: "Alain Prost",
        options: [
            "Nigel Mansell",
            "Gerhard Berger",
            "Alain Prost",
            "Nelson Piquet"
        ]
    },
    {
        numb: 28,
        question: "¿En qué año se celebró el primer Gran Premio de Singapur?",
        answer: "2008",
        options: [
            "2006",
            "2007",
            "2008",
            "2009"
        ]
    },
    {
        numb: 29,
        question: "¿Quién fue el piloto más joven en ganar un campeonato mundial?",
        answer: "Sebastian Vettel",
        options: [
            "Lewis Hamilton",
            "Sebastian Vettel",
            "Fernando Alonso",
            "Max Verstappen"
        ]
    },
    {
        numb: 30,
        question: "¿Cuál es el nombre del circuito de Gran Premio en España?",
        answer: "Circuit de Barcelona-Catalunya",
        options: [
            "Jarama",
            "Montjuïc",
            "Circuit de Barcelona-Catalunya",
            "Jerez"
        ]
    }
];

// Seleccionar 10 preguntas al azar
function getRandomQuestions() {
    let shuffledQuestions = questions.sort(() => 0.5 - Math.random());
    return shuffledQuestions.slice(0, 10);
}

// Seleccionar 10 preguntas al azar
function getRandomQuestions() {
    let shuffledQuestions = questions.sort(() => 0.5 - Math.random());
    return shuffledQuestions.slice(0, 10);
}

let selectedQuestions = getRandomQuestions();

// Seleccionar todos los elementos requeridos
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// Si se hace clic en el botón de inicio
start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); // Mostrar cuadro de información
}

// Si se hace clic en el botón de salir
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); // Ocultar cuadro de información
}

// Si se hace clic en el botón de continuar
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); // Ocultar cuadro de información
    quiz_box.classList.add("activeQuiz"); // Mostrar cuadro de cuestionario
    showQuestions(0); // Llamar a la función showQuestions
    queCounter(1); // Pasar 1 parámetro a queCounter
    startTimer(15); // Llamar a la función startTimer con 20 segundos por pregunta
    startTimerLine(0); // Llamar a la función startTimerLine
}

let timeValue = 15; // Tiempo por pregunta en segundos
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// Si se hace clic en el botón de reiniciar
restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz"); // Mostrar cuadro de cuestionario
    result_box.classList.remove("activeResult"); // Ocultar cuadro de resultados
    timeValue = 20; // Reiniciar tiempo por pregunta
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    selectedQuestions = getRandomQuestions(); // Seleccionar nuevas preguntas
    showQuestions(que_count); // Llamar a la función showQuestions
    queCounter(que_numb); // Pasar que_numb valor a queCounter
    clearInterval(counter); // Borrar contador
    clearInterval(counterLine); // Borrar contadorLine
    startTimer(timeValue); // Llamar a la función startTimer
    startTimerLine(widthValue); // Llamar a la función startTimerLine
    timeText.textContent = "Tiempo Restante"; // Cambiar el texto de timeText a Tiempo Restante
    next_btn.classList.remove("show"); // Ocultar el siguiente botón
}

// Si se hace clic en el botón de salir
quit_quiz.onclick = () => {
    window.location.reload(); // Recargar la ventana actual
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// Si se hace clic en el botón siguiente
next_btn.onclick = () => {
    if (que_count < selectedQuestions.length - 1) { // Si el número de preguntas es menor que la longitud total de las preguntas
        que_count++; // Incrementar el valor de que_count en 1
        que_numb++; // Incrementar el valor de que_numb en 1
        showQuestions(que_count); // Llamar a la función showQuestions
        queCounter(que_numb); // Pasar que_numb valor a queCounter
        clearInterval(counter); // Borrar contador
        clearInterval(counterLine); // Borrar contadorLine
        startTimer(timeValue); // Llamar a la función startTimer
        startTimerLine(widthValue); // Llamar a la función startTimerLine
        timeText.textContent = "Tiempo Restante"; // Cambiar el texto de timeText a Tiempo Restante
        next_btn.classList.remove("show"); // Ocultar el siguiente botón
    } else {
        clearInterval(counter); // Borrar contador
        clearInterval(counterLine); // Borrar contadorLine
        showResult(); // Llamar a la función showResult
    }
}

// Obtener preguntas y opciones de la matriz
function showQuestions(index) {
    const que_text = document.querySelector(".que_text");

    // Crear una nueva etiqueta de span e insertar pregunta y número de pregunta
    let que_tag = '<span>' + selectedQuestions[index].numb + ". " + selectedQuestions[index].question + '</span>';
    let option_tag = '<div class="option"><span>' + selectedQuestions[index].options[0] + '</span></div>'
                   + '<div class="option"><span>' + selectedQuestions[index].options[1] + '</span></div>'
                   + '<div class="option"><span>' + selectedQuestions[index].options[2] + '</span></div>'
                   + '<div class="option"><span>' + selectedQuestions[index].options[3] + '</span></div>';
    que_text.innerHTML = que_tag; // Añadir nueva etiqueta de span dentro de que_tag
    option_list.innerHTML = option_tag; // Añadir nueva etiqueta de div dentro de option_tag

    const option = option_list.querySelectorAll(".option");

    // Establecer onClick a todas las opciones disponibles
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

// Si se hace clic en la opción
function optionSelected(answer) {
    clearInterval(counter); // Borrar contador
    clearInterval(counterLine); // Borrar contadorLine
    let userAns = answer.textContent; // Obtener texto de opción seleccionada
    let correctAns = selectedQuestions[que_count].answer; // Obtener respuesta correcta de la matriz
    let allOptions = option_list.children.length; // Obtener todas las opciones

    if (userAns == correctAns) { // Si la respuesta del usuario es igual a la respuesta correcta
        userScore += 1; // Incrementar el valor del usuario en 1
        answer.classList.add("correct"); // Añadir color verde a la opción seleccionada
        answer.insertAdjacentHTML("beforeend", tickIcon); // Mostrar el icono de la marca
        console.log("Respuesta correcta");
    } else {
        answer.classList.add("incorrect"); // Añadir color rojo a la opción seleccionada
        answer.insertAdjacentHTML("beforeend", crossIcon); // Mostrar el icono de la cruz
        console.log("Respuesta incorrecta");

        // Si la respuesta es incorrecta, mostrar la respuesta correcta
        for (let i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correctAns) { // Si hay alguna opción que coincide con la respuesta correcta
                option_list.children[i].setAttribute("class", "option correct"); // Añadir color verde a la opción correcta
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon); // Mostrar el icono de la marca en la opción correcta
            }
        }
    }

    // Desactivar todas las opciones después de seleccionar una opción
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
    next_btn.classList.add("show"); // Mostrar el siguiente botón después de seleccionar una opción
}

// Mostrar el resultado y el mensaje según la puntuación
function showResult() {
    info_box.classList.remove("activeInfo"); // Ocultar cuadro de información
    quiz_box.classList.remove("activeQuiz"); // Ocultar cuadro de cuestionario
    result_box.classList.add("activeResult"); // Mostrar cuadro de resultados
    const scoreText = result_box.querySelector(".score_text");

    // Mostrar el puntaje del usuario en el cuadro de resultados
    scoreText.innerHTML = "Obtuviste <span>" + userScore + "</span> de <span>" + selectedQuestions.length + "</span> preguntas correctas.";

    // Mostrar mensaje diferente según la puntuación obtenida
    let message = "";
    if (userScore >= 8) {
        message = "¡Excelente! Eres un experto en Fórmula 1.";
    } else if (userScore >= 5 && userScore <= 7) {
        message = "¡Bien hecho! Tienes buen conocimiento sobre Fórmula 1.";
    } else if (userScore >= 1 && userScore <= 4) {
        message = "¡Puedes mejorar! Sigue aprendiendo sobre Fórmula 1.";
    } else if (userScore === 0) {
        message = "¡Oh no! No obtuviste ninguna respuesta correcta. Sigue intentándolo.";
    }

    // Mostrar el mensaje en el cuadro de resultados
    scoreText.innerHTML += "<br><br>" + message;
}


function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time; // Cambiar el valor de timeCount con el valor de tiempo
        time--; // Decrementar el valor de tiempo
        if (time < 9) { // Si el valor de tiempo es menor que 9
            let addZero = timeCount.textContent; // Añadir cero antes del valor de timeCount
            timeCount.textContent = "0" + addZero;
        }
        if (time < 0) { // Si el valor de tiempo es menor que 0
            clearInterval(counter); // Borrar contador
            timeText.textContent = "Tiempo Expirado"; // Cambiar el texto de timeText a Tiempo Expirado
            const allOptions = option_list.children.length; // Obtener todas las opciones
            let correcAns = selectedQuestions[que_count].answer; // Obtener respuesta correcta de la matriz

            for (let i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == correcAns) { // Si hay alguna opción que coincide con la respuesta correcta
                    option_list.children[i].setAttribute("class", "option correct"); // Añadir color verde a la opción correcta
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIcon); // Mostrar el icono de la marca en la opción correcta
                }
            }
            for (let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled"); // Desactivar todas las opciones una vez que se acaba el tiempo
            }
            next_btn.classList.add("show"); // Mostrar el siguiente botón después de que se acabe el tiempo
        }
    }
}

function startTimerLine(time) {
    counterLine = setInterval(timer, 29);
    function timer() {
        time += 1; // Incrementar el valor de tiempo en 1
        time_line.style.width = time + "px"; // Aumentar el ancho de time_line con el valor de tiempo
        if (time > 549) { // Si el valor de tiempo es mayor que 549
            clearInterval(counterLine); // Borrar contadorLine
        }
    }
}

function queCounter(index) {
    // Crear una nueva etiqueta span y pasar el número de pregunta y total de preguntas
    let totalQueCounTag = '<span><p>' + index + '</p> de <p>' + selectedQuestions.length + '</p> Preguntas</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  // Añadir una nueva etiqueta span dentro de bottom_ques_counter
}
