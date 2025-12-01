import { Component, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

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
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FormularioClienteComponent>
  ) {
    this.form = this.fb.group({
      nombre: [data?.cliente?.nombre || '', Validators.required],
      email: [data?.cliente?.email || '', [Validators.required, Validators.email]],
    });
  }
  submit() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
      this.dialogRef.close(this.form.value); // Pasa los datos al cerrar
    }
  }
  close() {
    this.dialogRef.close();
  }
}
