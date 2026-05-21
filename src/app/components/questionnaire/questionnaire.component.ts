import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';

interface QuestionOption {
  label: string;
  text: string;
}

interface Question {
  id: string;
  text: string;
  options: QuestionOption[];
}

interface SummaryItem {
  index: number;
  choice: string;
  text: string;
  answer: string;
}

@Component({
  selector: 'app-questionnaire',
  standalone: true,
  imports: [ReactiveFormsModule, MatCardModule, MatRadioModule, MatButtonModule],
  templateUrl: './questionnaire.component.html',
  styleUrl: './questionnaire.component.css',
})
export class QuestionnaireComponent {
  readonly questions: Question[] = [
    {
      id: 'q1',
      text: 'Your close friend secretly got interview questions beforehand and offers them.',
      options: [
        { label: 'A', text: 'Take them, survival matters' },
        { label: 'B', text: 'Refuse but keep quiet' },
        { label: 'C', text: 'Refuse and tell placement team' },
        { label: 'D', text: 'Take them but justify it' },
      ],
    },
    {
      id: 'q2',
      text: "You've been debugging for 5 hours. Another engineer solves it in 5 minutes.",
      options: [
        { label: 'A', text: 'Relief' },
        { label: 'B', text: 'Irritated but learn from them' },
        { label: 'C', text: 'Feel stupid for rest of day' },
        { label: 'D', text: 'Think they got lucky' },
      ],
    },
    {
      id: 'q3',
      text: 'Someone you like gives mixed signals for months.',
      options: [
        { label: 'A', text: 'Keep trying harder' },
        { label: 'B', text: 'Ask directly' },
        { label: 'C', text: 'Slowly move on' },
        { label: 'D', text: 'Stay because maybe' },
      ],
    },
    {
      id: 'q4',
      text: 'Your friend studies less but consistently scores higher.',
      options: [
        { label: 'A', text: 'Respect talent' },
        { label: 'B', text: 'Work harder' },
        { label: 'C', text: 'Quiet resentment' },
        { label: 'D', text: 'Start doubting yourself' },
      ],
    },
    {
      id: 'q5',
      text: 'One teammate contributes almost nothing but speaks confidently.',
      options: [
        { label: 'A', text: 'Confront privately' },
        { label: 'B', text: 'Cover silently' },
        { label: 'C', text: 'Publicly expose contribution levels' },
        { label: 'D', text: 'Stop caring' },
      ],
    },
    {
      id: 'q6',
      text: "You've been single a long time. Someone likes you but attraction isn't strong.",
      options: [
        { label: 'A', text: 'Try relationship anyway' },
        { label: 'B', text: 'Reject respectfully' },
        { label: 'C', text: 'Stay friends hoping feelings develop' },
        { label: 'D', text: 'Accept mainly because loneliness hurts' },
      ],
    },
    {
      id: 'q7',
      text: 'Your code caused a production issue.',
      options: [
        { label: 'A', text: 'Hide involvement first' },
        { label: 'B', text: 'Immediately own mistake' },
        { label: 'C', text: 'Quietly fix first' },
        { label: 'D', text: 'Panic internally' },
      ],
    },
    {
      id: 'q8',
      text: 'Someone less capable gets much better placement than you.',
      options: [
        { label: 'A', text: 'Life unfair' },
        { label: 'B', text: 'Analyze what they did right' },
        { label: 'C', text: 'Feel angry' },
        { label: 'D', text: 'Lose motivation' },
      ],
    },
    {
      id: 'q9',
      text: 'New engineer joins. Socially awkward and asks basic questions repeatedly.',
      options: [
        { label: 'A', text: 'Help patiently' },
        { label: 'B', text: 'Help but get annoyed' },
        { label: 'C', text: 'Mostly ignore' },
        { label: 'D', text: "Think they shouldn't be here" },
      ],
    },
    {
      id: 'q10',
      text: 'You post an achievement online.',
      options: [
        { label: 'A', text: 'Share happiness' },
        { label: 'B', text: 'Inspire others' },
        { label: 'C', text: 'Recognition feels good' },
        { label: 'D', text: 'Prove something' },
      ],
    },
    {
      id: 'q11',
      text: 'Parents compare you to a successful cousin.',
      options: [
        { label: 'A', text: 'Work harder' },
        { label: 'B', text: 'Argue' },
        { label: 'C', text: 'Shut down emotionally' },
        { label: 'D', text: 'Pretend unaffected' },
      ],
    },
    {
      id: 'q12',
      text: 'Choose one.',
      options: [
        { label: 'A', text: 'Dream relationship' },
        { label: 'B', text: 'Dream job' },
        { label: 'C', text: 'Depends timing' },
        { label: 'D', text: 'Try balancing both' },
      ],
    },
    {
      id: 'q13',
      text: 'Company accidentally gives extra money and nobody notices.',
      options: [
        { label: 'A', text: 'Report immediately' },
        { label: 'B', text: 'Wait some days' },
        { label: 'C', text: 'Keep quiet' },
        { label: 'D', text: 'Depends amount' },
      ],
    },
    {
      id: 'q14',
      text: 'Friend got selected. You got rejected.',
      options: [
        { label: 'A', text: 'Happy for them' },
        { label: 'B', text: 'Sad for yourself' },
        { label: 'C', text: 'Jealous' },
        { label: 'D', text: 'Motivated' },
      ],
    },
    {
      id: 'q15',
      text: "Someone corrects you publicly and they're right.",
      options: [
        { label: 'A', text: 'Accept immediately' },
        { label: 'B', text: 'Defend yourself first' },
        { label: 'C', text: 'Feel embarrassed long after' },
        { label: 'D', text: 'Correct them later somehow' },
      ],
    },
    {
      id: 'q16',
      text: 'Friends mock someone unfairly.',
      options: [
        { label: 'A', text: 'Speak up' },
        { label: 'B', text: 'Stay silent' },
        { label: 'C', text: 'Change topic' },
        { label: 'D', text: 'Join to fit in' },
      ],
    },
    {
      id: 'q17',
      text: 'You fail 5 interviews in a row.',
      options: [
        { label: 'A', text: 'Double effort' },
        { label: 'B', text: 'Question career choice' },
        { label: 'C', text: 'Become numb' },
        { label: 'D', text: 'Compare yourself endlessly' },
      ],
    },
    {
      id: 'q18',
      text: 'You get a girlfriend tomorrow. Biggest expected change?',
      options: [
        { label: 'A', text: 'Less loneliness' },
        { label: 'B', text: 'More happiness' },
        { label: 'C', text: 'More confidence' },
        { label: 'D', text: 'Feel complete' },
      ],
    },
    {
      id: 'q19',
      text: 'You worked hard for months and results are terrible.',
      options: [
        { label: 'A', text: 'Rest then continue' },
        { label: 'B', text: 'Push harder immediately' },
        { label: 'C', text: 'Lose faith in effort' },
        { label: 'D', text: 'Escape into distraction' },
      ],
    },
    {
      id: 'q20',
      text: 'What hurts most?',
      options: [
        { label: 'A', text: 'Being ignored' },
        { label: 'B', text: 'Being average' },
        { label: 'C', text: 'Being powerless' },
        { label: 'D', text: 'Being unwanted' },
      ],
    },
  ];

  readonly form: FormGroup<Record<string, FormControl<string>>>;
  summary: SummaryItem[] = [];
  submitted = false;
  copySuccess = false;
  private copyResetHandle?: ReturnType<typeof setTimeout>;

  constructor() {
    const controls: Record<string, FormControl<string>> = {};
    for (const question of this.questions) {
      controls[question.id] = new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      });
    }
    this.form = new FormGroup(controls);
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.summary = [];
      return;
    }
    this.summary = this.questions.map((question, index) => {
      const choice = this.form.controls[question.id].value;
      const selectedOption = question.options.find(option => option.label === choice);
      if (!selectedOption) {
        console.error(`No option found for ${question.id} choice "${choice}"`);
      }
      return {
        index: index + 1,
        choice,
        text: question.text,
        answer: selectedOption?.text ?? choice,
      };
    });
  }

  get missingQuestionIndexes(): number[] {
    return this.questions
      .map((question, index) =>
        this.form.controls[question.id].invalid ? index + 1 : null,
      )
      .filter((value): value is number => value !== null);
  }

  async onCopy(): Promise<void> {
    const copyText = this.summary
      .map(item => `${item.index}.${item.choice}`)
      .join('\n');

    if (this.copyResetHandle) {
      clearTimeout(this.copyResetHandle);
    }
    this.copySuccess = true;
    this.copyResetHandle = setTimeout(() => {
      this.copySuccess = false;
    }, 2000);

    try {
      await navigator.clipboard.writeText(copyText);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }
}
