import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecyclingcentrePage } from './recyclingcentre.page';

describe('RecyclingcentrePage', () => {
  let component: RecyclingcentrePage;
  let fixture: ComponentFixture<RecyclingcentrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecyclingcentrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecyclingcentrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
