// Array pertanyaan kuis (10 pertanyaan dengan opsi dan jawaban benar
// Array pertanyaan kuis (40 pertanyaan dengan opsi dan jawaban benar)
const questions = [
    // Dasar Java (1-10)
    {
        question: "Siapa pencipta bahasa Java?",
        options: ["James Gosling", "Bill Gates", "Linus Torvalds", "Mark Zuckerberg"],
        answer: 0
    },
    {
        question: "Apa kepanjangan dari OOP?",
        options: ["Object Oriented Programming", "Open Office Protocol", "Online Operating Platform", "Object Output Process"],
        answer: 0
    },
    {
        question: "Apa tipe data untuk menyimpan bilangan bulat di Java?",
        options: ["int", "float", "char", "boolean"],
        answer: 0
    },
    {
        question: "Method utama yang wajib ada dalam program Java?",
        options: ["main()", "start()", "run()", "init()"],
        answer: 0
    },
    {
        question: "Apa fungsi dari System.out.println()?",
        options: ["Mencetak output ke konsol", "Membaca input dari pengguna", "Menghentikan program", "Mengkompilasi kode"],
        answer: 0
    },
    {
        question: "Apa perbedaan while dan for loop?",
        options: ["While loop untuk kondisi tak tentu, for loop untuk iterasi tertentu", "While loop lebih cepat", "For loop hanya untuk array", "Tidak ada perbedaan"],
        answer: 0
    },
    {
        question: "Apa output dari kode berikut?\n\nint x = 5;\nSystem.out.println(x++);",
        options: ["5", "6", "Error", "0"],
        answer: 0
    },
    {
        question: "Operator apa yang digunakan untuk perbandingan di Java?",
        options: ["==", "=", "!=", "==="],
        answer: 0
    },
    {
        question: "Apa yang terjadi jika kita tidak menggunakan break di switch case?",
        options: ["Fall-through terjadi", "Program crash", "Loop infinite", "Tidak ada efek"],
        answer: 0
    },
    {
        question: "Apa tipe data untuk menyimpan teks di Java?",
        options: ["String", "int", "char", "boolean"],
        answer: 0
    },
    // OOP Dasar (11-20)
    {
        question: "Apa yang dimaksud dengan Encapsulation?",
        options: ["Menyembunyikan detail implementasi", "Membuat objek baru", "Menggabungkan kelas", "Mengakses variabel publik"],
        answer: 0
    },
    {
        question: "Keyword apa yang digunakan untuk membuat turunan dari kelas lain?",
        options: ["extends", "implements", "super", "this"],
        answer: 0
    },
    {
        question: "Apa itu Polymorphism dalam Java?",
        options: ["Kemampuan objek untuk memiliki banyak bentuk", "Membuat variabel statis", "Menggunakan loop", "Mendefinisikan konstruktor"],
        answer: 0
    },
    {
        question: "Apa fungsi dari constructor di Java?",
        options: ["Menginisialisasi objek saat dibuat", "Menjalankan program", "Mencetak output", "Mengimport paket"],
        answer: 0
    },
    {
        question: "Apa output dari kode berikut?\n\nclass Test {\n    public static void main(String[] args) {\n        String s = \"Hello\";\n        System.out.println(s.length());\n    }\n}",
        options: ["5", "6", "Error", "Hello"],
        answer: 0
    },
    {
        question: "Apa yang dimaksud dengan Abstraction?",
        options: ["Menyembunyikan kompleksitas dan menampilkan esensi", "Membuat class baru", "Menggunakan inheritance", "Mendefinisikan method"],
        answer: 0
    },
    {
        question: "Keyword untuk membuat objek baru?",
        options: ["new", "create", "init", "object"],
        answer: 0
    },
    {
        question: "Apa output dari kode berikut?\n\nint[] arr = {1,2,3};\nSystem.out.println(arr[1]);",
        options: ["2", "1", "3", "Error"],
        answer: 0
    },
    {
        question: "Apa perbedaan antara class dan object?",
        options: ["Class adalah blueprint, object adalah instance", "Class adalah instance, object adalah blueprint", "Sama saja", "Class untuk method, object untuk variabel"],
        answer: 0
    },
    {
        question: "Apa yang dimaksud dengan Inheritance?",
        options: ["Mewarisi properti dari class induk", "Membuat method baru", "Menggunakan polymorphism", "Mendefinisikan constructor"],
        answer: 0
    },
    // Konstruktor dan Lanjutan (21-30)
    {
        question: "Jenis konstruktor apa yang tidak menerima parameter?",
        options: ["Default constructor", "Parameterized constructor", "Copy constructor", "Overloaded constructor"],
        answer: 0
    },
    {
        question: "Apa output dari kode berikut?\n\nclass A {\n    A() { System.out.println(\"Hello\"); }\n}\nclass Test {\n    public static void main(String[] args) {\n        new A();\n    }\n}",
        options: ["Hello", "Error", "Nothing", "A"],
        answer: 0
    },
    {
        question: "Apa yang dimaksud dengan Constructor Overloading?",
        options: ["Membuat multiple constructor dengan parameter berbeda", "Menggunakan super di constructor", "Mendefinisikan constructor default", "Mengakses variabel private"],
        answer: 0
    },
    {
        question: "Keyword untuk memanggil constructor induk?",
        options: ["super()", "this()", "extends", "new"],
        answer: 0
    },
    {
        question: "Apa output dari kode berikut?\n\nclass B extends A {\n    B() { super(); System.out.println(\"World\"); }\n}\n// Asumsikan A() print \"Hello\"\nnew B();",
        options: ["Hello World", "World Hello", "Hello", "Error"],
        answer: 0
    },
    {
        question: "Apa fungsi dari 'this' di constructor?",
        options: ["Merujuk ke objek saat ini", "Memanggil constructor lain", "Mengakses variabel global", "Mendefinisikan method"],
        answer: 0
    },
    {
        question: "Apa yang terjadi jika tidak ada constructor di class?",
        options: ["Java buat default constructor", "Error compile", "Program crash", "Tidak ada efek"],
        answer: 0
    },
    {
        question: "Apa output dari kode berikut?\n\nclass C {\n    int x;\n    C(int x) { this.x = x; }\n}\nnew C(10).x;",
        options: ["10", "0", "Error", "null"],
        answer: 0
    },
    {
        question: "Apa perbedaan antara constructor dan method?",
        options: ["Constructor tidak punya return type, method punya", "Constructor punya return type, method tidak", "Sama saja", "Constructor untuk OOP, method untuk dasar"],
        answer: 0
    },
    {
        question: "Apa yang dimaksud dengan Copy Constructor?",
        options: ["Constructor yang membuat salinan objek", "Constructor default", "Constructor parameterized", "Constructor overloaded"],
        answer: 0
    },
    // Lanjutan dan Potongan Kode (31-40)
    {
        question: "Apa output dari kode berikut?\n\nfor(int i=0; i<3; i++) {\n    System.out.print(i + \" \");\n}",
        options: ["0 1 2", "1 2 3", "0 1 2 3", "Error"],
        answer: 0
    },
    {
        question: "Apa yang dimaksud dengan Method Overriding?",
        options: ["Mengubah implementasi method di subclass", "Membuat method baru", "Menggunakan super", "Mendefinisikan constructor"],
        answer: 0
    },
    {
        question: "Apa output dari kode berikut?\n\nString s1 = \"Java\";\nString s2 = \"Java\";\nSystem.out.println(s1 == s2);",
        options: ["true", "false", "Error", "Java"],
        answer: 0
    },
    {
        question: "Apa fungsi dari interface di Java?",
        options: ["Mendefinisikan kontrak untuk class", "Membuat objek", "Menggunakan inheritance", "Mendefinisikan variabel"],
        answer: 0
    },
    {
        question: "Apa output dari kode berikut?\n\nint a = 10;\nint b = 20;\nSystem.out.println(a > b ? \"A\" : \"B\");",
        options: ["B", "A", "10", "20"],
        answer: 0
    },
    {
        question: "Apa yang dimaksud dengan Static Method?",
        options: ["Method yang bisa dipanggil tanpa objek", "Method instance", "Method constructor", "Method abstract"],
        answer: 0
    },
    {
        question: "Apa output dari kode berikut?\n\nclass D {\n    static int count = 0;\n    D() { count++; }\n}\nnew D(); new D();\nSystem.out.println(D.count);",
        options: ["2", "1", "0", "Error"],
        answer: 0
    },
    {
        question: "Apa perbedaan antara == dan equals()?",
        options: ["== bandingkan referensi, equals() bandingkan nilai", "Sama saja", "== untuk string, equals() untuk int", "equals() untuk referensi"],
        answer: 0
    },
    {
        question: "Apa output dari kode berikut?\n\ntry {\n    int x = 1/0;\n} catch(Exception e) {\n    System.out.println(\"Error\");\n}",
        options: ["Error", "0", "1", "Exception"],
        answer: 0
    },
    {
        question: "Apa yang dimaksud dengan Final Keyword?",
        options: ["Mencegah perubahan nilai atau override", "Membuat variabel global", "Mendefinisikan method", "Menggunakan loop"],
        answer: 0
    }
];

// Variabel global - tambah untuk opsi acak
let currentQuestionIndex = 0;
let score = 0;
let bestScore = parseInt(localStorage.getItem('bestScore')) || 0;
let lastScore = parseInt(localStorage.getItem('lastScore')) || 0;
let lastDate = localStorage.getItem('lastDate') || '';
let scoreHistory = JSON.parse(localStorage.getItem('scoreHistory')) || [];
let shuffledQuestions = []; // Array soal yang diacak
let shuffledOptions = []; // Opsi yang diacak untuk soal saat ini
let currentCorrectIndex = 0; // Indeks jawaban benar saat ini

// Elemen DOM - tetap sama
const welcomePage = document.getElementById('welcome-page');
const startPage = document.getElementById('start-page');
const quizPage = document.getElementById('quiz-page');
const resultPage = document.getElementById('result-page');
const enterBtn = document.getElementById('enter-btn');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionEl = document.getElementById('question');
const questionNumberEl = document.getElementById('question-number');
const progressBar = document.getElementById('progress-bar');
const optionBtns = document.querySelectorAll('.option-btn');
const scoreText = document.getElementById('score-text');
const percentageText = document.getElementById('percentage-text');
const motivationText = document.getElementById('motivation-text');
const bestScoreText = document.getElementById('best-score-text');
const lastScoreText = document.getElementById('last-score-text');

// Fungsi untuk mengacak array (Fisher-Yates shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Fungsi untuk masuk ke halaman start (dari welcome) - tetap sama
function enterQuiz() {
    welcomePage.classList.remove('active');
    startPage.classList.add('active');
}

// Fungsi untuk memulai kuis - tetap sama
function startQuiz() {
    startPage.classList.remove('active');
    quizPage.classList.add('active');
    currentQuestionIndex = 0;
    score = 0;
    // Acak soal setiap kali mulai
    shuffledQuestions = shuffleArray([...questions]); // Salinan array asli
    showQuestion();
}

// Fungsi untuk menampilkan pertanyaan - modifikasi untuk acak opsi
function showQuestion() {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    questionNumberEl.textContent = `Pertanyaan ${currentQuestionIndex + 1} dari ${questions.length}`;
    progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;

    // Acak opsi dan simpan indeks benar
    shuffledOptions = shuffleArray([...currentQuestion.options]);
    currentCorrectIndex = shuffledOptions.indexOf(currentQuestion.options[currentQuestion.answer]);

    optionBtns.forEach((btn, index) => {
        btn.textContent = shuffledOptions[index];
        btn.classList.remove('correct', 'wrong');
        btn.disabled = false;
    });

    nextBtn.disabled = true;
}

// Fungsi untuk memeriksa jawaban - gunakan currentCorrectIndex
function checkAnswer(selectedIndex) {
    optionBtns.forEach((btn, index) => {
        btn.disabled = true;
        if (index === currentCorrectIndex) {
            btn.classList.add('correct');
        } else if (index === selectedIndex) {
            btn.classList.add('wrong');
        }
    });

    if (selectedIndex === currentCorrectIndex) {
        score++;
        playSound('correct'); // Opsional
    } else {
        playSound('wrong'); // Opsional
    }

    nextBtn.disabled = false;
}

// Fungsi untuk lanjut ke pertanyaan berikutnya - tetap sama
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Fungsi untuk menampilkan hasil - tetap sama
function showResult() {
    quizPage.classList.remove('active');
    resultPage.classList.add('active');

    const percentage = Math.round((score / questions.length) * 100);
    scoreText.textContent = `Skor Anda: ${score} dari ${questions.length}`;
    percentageText.textContent = `Persentase Benar: ${percentage}%`;

    let motivation;
    if (percentage >= 80) {
        motivation = "Keren, kamu sudah paham dasar Java!";
    } else if (percentage >= 50) {
        motivation = "Bagus, tapi ada yang perlu diperbaiki!";
    } else {
        motivation = "Jangan menyerah, belajar lagi ya!";
    }
    motivationText.textContent = motivation;

    // Simpan skor terbaik
    if (score > bestScore) {
        bestScore = score;
        localStorage.setItem('bestScore', bestScore);
    }
    bestScoreText.textContent = `Skor Terbaik: ${bestScore} dari ${questions.length}`;

    // Simpan skor terakhir dan tanggal
    lastScore = score;
    lastDate = new Date().toLocaleDateString();
    localStorage.setItem('lastScore', lastScore);
    localStorage.setItem('lastDate', lastDate);

    // Simpan riwayat skor (maksimal 10 entri)
    scoreHistory.push({ score: score, date: lastDate, percentage: percentage });
    if (scoreHistory.length > 10) {
        scoreHistory.shift(); // Hapus entri terlama
    }
    localStorage.setItem('scoreHistory', JSON.stringify(scoreHistory));

    // Tampilkan skor terakhir
    lastScoreText.textContent = `Skor Terakhir: ${lastScore} dari ${questions.length} (${lastDate})`;
}

// Fungsi untuk ulangi kuis (kembali ke welcome) - tetap sama
function restartQuiz() {
    resultPage.classList.remove('active');
    welcomePage.classList.add('active');
}

// Fungsi untuk efek suara (opsional) - tetap sama
function playSound(type) {
    // Pastikan file audio ada: correct.mp3 dan wrong.mp3
    const audio = new Audio(`${type}.mp3`);
    audio.play().catch(() => {}); // Ignore error jika file tidak ada
}

// Event listeners - tetap sama
enterBtn.addEventListener('click', enterQuiz);
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);

optionBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => checkAnswer(index));
});

