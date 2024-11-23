import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiComponent } from '../components/data-list.component'; // Correct import path for your component
import { CommonModule } from '@angular/common'; // Import CommonModule if using Angular directives like ngIf, ngFor

describe('UiComponent', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiComponent], // UiComponent should be in declarations
      imports: [CommonModule], // Import CommonModule if you are using directives like ngIf/ngFor inside your component
    }).compileComponents();

    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
