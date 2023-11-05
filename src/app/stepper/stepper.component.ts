import { Component } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent {
  totalSteps = 6;
  stepsArray = Array(this.totalSteps).fill(0).map((x, i) => i + 1);
  public currentStep = 1;
  

  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  public prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
}
