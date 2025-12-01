import { Component, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DataTableComponent } from '../../shared/components/data-table/data-table';
import { DataTableColumn } from '../../shared/components/data-table/model/data-table.model';
import { DEMO_DATA } from '../../shared/components/data-table/data-demo';
import { ActionButtonComponent } from '../../shared/components/action-button/action-button';

import { GenericModalComponent } from '../../shared/components/modal/generic-modal/generic-modal';
import { FormularioClienteComponent } from '../clientes/form/formulario-cliente/formulario-cliente';
import { ConfirmModalComponent } from '../../shared/components/modal/confirm-modal/confirm-modal';



@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [DataTableComponent, ActionButtonComponent],
  templateUrl: './clientes.html',
  styleUrl: './clientes.scss'
})
export default class Clientes {

constructor(private dialog: MatDialog, private cdr: ChangeDetectorRef) {}

  title = 'Clientes';
  columns: DataTableColumn[] = [
    { key: 'id', label: 'ID' },
    { key: 'nombre', label: 'Nombre' },
    { key: 'email', label: 'Email' }
  ];

  data = DEMO_DATA;

  onEdit(row: any) {
    const dialogRef = this.dialog.open(GenericModalComponent, {
      width: '600px',
      data: {
        title: 'Editar Cliente',
        component: FormularioClienteComponent,
        cliente: row // Pasar el cliente seleccionado
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onUpdateCliente(row['id'], result);
      }
    });
  }
  onDelete(row: any) {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      width: '50%',
      data: { message: `¿Seguro que deseas eliminar el cliente "${row.nombre}"?` }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Eliminar el registro
        this.data = this.data.filter(c => c['id'] !== row['id']);
        this.cdr.detectChanges();
        console.log('Eliminado:', row);
      }
    });
  }
  
  onAddCliente() {
    const dialogRef = this.dialog.open(GenericModalComponent, {
      //width: '600px',
      data: {
        title: 'Agregar Cliente',
        component: FormularioClienteComponent
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onSaveCliente(result);
      }
    });
    console.log('Agregar Cliente');
  } 

  onSaveCliente(cliente: any) {
    // Calcular el nuevo id correlativo
    const newId = this.data.length > 0 ? Math.max(...this.data.map(c => c['id'])) + 1 : 1;
    // Crear el nuevo cliente
    const nuevoCliente = { id: newId, nombre: cliente.nombre, email: cliente.email };
    // Agregar al array data
    this.data = [...this.data, nuevoCliente];
    this.cdr.detectChanges(); // Forzar la detección de cambios
    console.log('Cliente agregado:', nuevoCliente);
  }

  onUpdateCliente(id: number, cliente: any) {
    this.data = this.data.map(c =>
      c['id'] === id ? { ...c, nombre: cliente.nombre, email: cliente.email } : c
    );
    this.cdr.detectChanges();
    console.log('Cliente editado:', cliente);
  }


}
