import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagensDeleteComponent } from './mensagens-delete.component';

describe('MensagensDeleteComponent', () => {
  let component: MensagensDeleteComponent;
  let fixture: ComponentFixture<MensagensDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensagensDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensagensDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
