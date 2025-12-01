import { Component, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-formulario-cliente',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],

  templateUrl: './formulario-cliente.html',
  styleUrl: './formulario-cliente.scss'
})
export class FormularioClienteComponent {
  form: FormGroup;
  @Output() save = new EventEmitter<any>();
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<FormularioClienteComponent>) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  submit() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
      this.dialogRef.close(this.form.value); // Pasa los datos al cerrar
    }
  }
}
