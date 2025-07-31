import { Component } from '@angular/core';

import { DataTableComponent } from '../../shared/components/data-table/data-table';
import { DataTableColumn } from '../../shared/components/data-table/model/data-table.model';
import { DEMO_DATA } from '../../shared/components/data-table/data-demo';
import { ActionButtonComponent } from '../../shared/components/action-button/action-button';


@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [DataTableComponent, ActionButtonComponent],
  templateUrl: './clientes.html',
  styleUrl: './clientes.scss'
})
export default class Clientes {
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
    // lógica de eliminación
    console.log('Eliminando:', row);
  }

  onAddCliente() {
    // Lógica para agregar cliente
    console.log('Agregar Cliente');
  } 
}
