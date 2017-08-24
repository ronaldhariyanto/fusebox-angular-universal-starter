import { ServerResponseService } from './../shared/services/server-response.service';
import { NotFoundComponent } from './not-found.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { NotFoundModule } from './not-found.module';

describe(NotFoundComponent.name, () => {
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NotFoundModule],
      declarations: [TestComponent],
      providers: [ServerResponseService]
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    fixture.detectChanges();
  }));

  afterEach(async(() => {
    TestBed.resetTestingModule();
  }));

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('should compile', async(() => {
    expect(fixture.componentInstance).toBeDefined();
  }));

  it('should show text', async(() => {
    expect(fixture.debugElement.nativeElement.innerHTML).toBe('PAGE NOT FOUND');
  }));
});

@Component({
  selector: 'test-component',
  template: '<pm-not-found></pm-not-found>'
})
class TestComponent {}