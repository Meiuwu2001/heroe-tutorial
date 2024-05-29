import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithPaginatorComponent } from './table-with-paginator.component';

describe('TableWithPaginatorComponent', () => {
  let component: TableWithPaginatorComponent;
  let fixture: ComponentFixture<TableWithPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableWithPaginatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableWithPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
