import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QUESTIONS, Question } from '../questions';
import { GlobalData } from '../services/global-data';
import { ToastController } from '@ionic/angular';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonMenu,
  IonBackButton,
  IonButtons,
  IonLabel,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  standalone: true,
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonMenu,
    IonBackButton,
    IonButtons,
    IonLabel,
  ],
})
export class QuizPage implements OnInit {
  username = '';
  categories = ['IT-IPT02', 'IT-IAS01', 'IT-IMO1', 'IT-IPT01', 'IT-SA01'];
  selectedCategory = '';
  questions: Question[] = [];
  randomizedQuestions: Question[] = [];
  currentQuestionIndex = 0;
  currentQuestion!: Question;
  selectedAnswer: number | null = null;
  selectedAnswers: (number | null)[] = [];
  score = 0;
  showResult = false;
  isTimeAttack = false;
  timeLeft = 60;
  timerInterval: any;
  selectedAnswerIndex: number | null = null;

  constructor(
    private global: GlobalData,
    private toastCtrl: ToastController,
    private router: Router
  ) {}

  // When the user clicks "Next"
  async nextQuestion() {
    if (this.selectedAnswer === null) return;

    // Save the user's answer
    this.selectedAnswers[this.currentQuestionIndex] = this.selectedAnswer;

    // Check if correct and update score
    const isCorrect = this.selectedAnswer === this.currentQuestion.answer;
    if (isCorrect) this.score++;

    // Show toast
    const toast = await this.toastCtrl.create({
      message: isCorrect ? 'Correct! 🎉' : 'Incorrect ❌',
      duration: 800,
      color: isCorrect ? 'success' : 'danger',
    });
    toast.present();

    // Move to next question after toast
    setTimeout(() => {
      this.currentQuestionIndex++;
      this.selectedAnswer = null; // reset for next question
      this.loadQuestion();
    }, 800);
  }

  ngOnInit() {
    this.username = this.global.getUsername();
  }

  /* Start a normal quiz category */
  startQuiz(category: string) {
    this.reset();
    this.selectedCategory = category;
    this.questions = QUESTIONS.filter((q) => q.category === category);
    this.randomizedQuestions = this.shuffle(this.questions);
    this.selectedAnswers = [];
    this.currentQuestionIndex = 0;
    this.loadQuestion();
  }

  /* Start Time Attack mode */
  startTimeAttack() {
    this.reset();
    this.isTimeAttack = true;
    this.selectedCategory = 'Time Attack Mode ⏱️';
    this.randomizedQuestions = this.shuffle(QUESTIONS).slice(0, 10);
    this.selectedAnswers = [];
    this.timeLeft = 60;
    this.currentQuestionIndex = 0;

    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) this.endQuiz();
    }, 1000);

    this.loadQuestion();
  }

  /* Shuffle array helper */
  shuffle(array: any[]) {
    return array.slice().sort(() => Math.random() - 0.5);
  }

  /* Load the current question */
  loadQuestion() {
    if (this.currentQuestionIndex >= this.randomizedQuestions.length) {
      this.endQuiz();
      return;
    }
    this.currentQuestion = this.randomizedQuestions[this.currentQuestionIndex];
    this.selectedAnswer =
      this.selectedAnswers[this.currentQuestionIndex] ?? null;
  }

  /* Handle answer selection */
  selectAnswer(index: number) {
    this.selectedAnswer = index;
  }

  /* End the quiz and save score */
  endQuiz() {
    this.showResult = true;
    clearInterval(this.timerInterval);

    this.global.addScore({
      category: this.selectedCategory,
      score: this.score,
      total: this.randomizedQuestions.length,
      date: new Date().toLocaleString(),
    });
  }

  /* Retry the same category or time attack */
  retryQuiz() {
    if (this.isTimeAttack) this.startTimeAttack();
    else this.startQuiz(this.selectedCategory);
  }

  /* Go back to category selection from quiz */
  goBackToCategories() {
    clearInterval(this.timerInterval);
    this.selectedCategory = '';
    this.showResult = false;
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.isTimeAttack = false;
    this.timeLeft = 60;
    this.selectedAnswers = [];
  }

  /* Custom back button handler */
  goBack(event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (this.selectedCategory) {
      this.goBackToCategories();
    } else {
      this.router.navigate(['/home']);
    }
  }

  /* Reset all quiz data */
  reset() {
    clearInterval(this.timerInterval);
    this.selectedCategory = '';
    this.showResult = false;
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.isTimeAttack = false;
    this.timeLeft = 60;
    this.selectedAnswers = [];
  }

  /* Return the user's answer text safely */
  getUserAnswer(i: number): string {
    const answerIndex = this.selectedAnswers[i];
    if (answerIndex == null) return 'No answer';
    return this.randomizedQuestions[i].choices[answerIndex];
  }
}
