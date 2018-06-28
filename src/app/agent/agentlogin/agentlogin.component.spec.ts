import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentloginComponent } from './agentlogin.component';

describe('AgentloginComponent', () => {
  let component: AgentloginComponent;
  let fixture: ComponentFixture<AgentloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
