import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCodeSnippetComponent } from './small-code-snippet.component';

describe('SmallCodeSnippetComponent', () => {
  let component: SmallCodeSnippetComponent;
  let fixture: ComponentFixture<SmallCodeSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallCodeSnippetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallCodeSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
