import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorPeliculasComponent } from './actor-peliculas.component';

describe('ActorPeliculasComponent', () => {
  let component: ActorPeliculasComponent;
  let fixture: ComponentFixture<ActorPeliculasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActorPeliculasComponent]
    });
    fixture = TestBed.createComponent(ActorPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
