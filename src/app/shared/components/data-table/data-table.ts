import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { DataTableColumn, DataTableRow } from './model/data-table.model';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [
      CommonModule,
      MatTableModule,
      MatPaginatorModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      MatIconModule,
      MatDividerModule,
      MatButtonModule
  ],
  templateUrl: './data-table.html',
  styleUrl: './data-table.scss'
})
export class DataTableComponent {
  @Input() columns: DataTableColumn[] = [];
  @Input() data: DataTableRow[] = [];
  @Input() title: string = '';
  @Output() edit = new EventEmitter<DataTableRow>();
  @Output() delete = new EventEmitter<DataTableRow>();

  searchTerm = '';

  get filteredData(): DataTableRow[] {
    if (!this.searchTerm) return this.data;
    return this.data.filter(row =>
      Object.values(row).some(val =>
        String(val).toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    );
  }

  get displayedColumns(): string[] {
    return [...this.columns.map(c => c.key), 'actions'];
  }

  onEdit(row: DataTableRow) {
    this.edit.emit(row);
  }

  onDelete(row: DataTableRow) {
    this.delete.emit(row);
  }
}
