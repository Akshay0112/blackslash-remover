import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputString: string = '';
  outputString: string = '';

  processInput() {
    try {
      const cleanedInput = this.removeBackslashes(this.inputString);
      if (cleanedInput.trim() === '') {
        this.outputString = 'Input is empty or invalid';
        return;
      }
      const parsedJson = JSON.parse(cleanedInput);
      this.outputString = JSON.stringify(parsedJson, null, 2);
    } catch (error) {
      this.outputString = 'Invalid JSON input';
    }
  }

  removeBackslashes(input: string): string {
    return input.replace(/\\/g, '');
  }

  clearText() {
    this.inputString = '';
    this.outputString = '';
  }

  copyOutput() {
    const textarea = document.createElement('textarea');
    textarea.value = this.outputString;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Output copied to clipboard');
  }
}
