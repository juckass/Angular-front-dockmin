import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DataTableComponent } from '../../shared/components/data-table/data-table';
import { DataTableColumn } from '../../shared/components/data-table/model/data-table.model';
import { DEMO_DATA } from '../../shared/components/data-table/data-demo';
import { ActionButtonComponent } from '../../shared/components/action-button/action-button';

import { GenericModalComponent } from '../../shared/components/modal/generic-modal/generic-modal';
import { FormularioClienteComponent } from '../clientes/form/formulario-cliente/formulario-cliente';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [DataTableComponent, ActionButtonComponent],
  templateUrl: './clientes.html',
  styleUrl: './clientes.scss'
})
export default class Clientes {

  constructor(private dialog: MatDialog) {}


  title = 'Clientes';
  columns: DataTableColumn[] = [
    { key: 'id', label: 'ID' },
    { key: 'nombre', label: 'Nombre' },
    { key: 'email', label: 'Email' }
  ];
  data = DEMO_DATA;

  onEdit(row: any) {
    console.log(row);
  }
  onDelete(row: any) {
    console.log('Eliminando:', row);
  }
  
  onAddCliente() {
    const dialogRef = this.dialog.open(GenericModalComponent, {
      width: '400px',
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
    console.log('Guardar Cliente', cliente);
    // Aquí tu lógica para guardar el cliente
  }

}
