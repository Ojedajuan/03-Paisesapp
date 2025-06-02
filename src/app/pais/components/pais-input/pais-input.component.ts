import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './pais-input.component.html',
  styleUrl: './pais-input.component.css'
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(valor => {
        this.onDebounce.emit( valor);
      });
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(event : any) {
    this.debouncer.next(this.termino);
  }
}


