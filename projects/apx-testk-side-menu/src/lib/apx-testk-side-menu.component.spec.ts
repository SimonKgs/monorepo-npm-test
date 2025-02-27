import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApxTestkSideMenuComponent } from './apx-testk-side-menu.component';
import { provideRouter } from '@angular/router';

describe('ApxTestkSideMenuComponent', () => {
  let component: ApxTestkSideMenuComponent;
  let fixture: ComponentFixture<ApxTestkSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApxTestkSideMenuComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApxTestkSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should call onSignIn when button is clicked', () => {

    // Spy on the onSignIn emit event  
    spyOn(component.onSignIn, 'emit');  

    // Set isAuthenticated to false and detect changes  
    fixture.componentRef.setInput('isAuthenticated', false);  
    fixture.detectChanges();  

    // Select the login button by its data attribute  
    const button = fixture.nativeElement.querySelector('[data-login]') as HTMLButtonElement;  

    // Ensure the button exists, simulate a click, and verify the emit event  
    expect(button).toBeTruthy();  
    button.click();  
    expect(component.onSignIn.emit).toHaveBeenCalled();  
  })


  it('Should call onSignOut when button is clicked', () => {

    // Spy on the onSignOut emit event  
    spyOn(component.onSignOut, 'emit');  

    // Set isAuthenticated to false and detect changes  
    fixture.componentRef.setInput('isAuthenticated', true);  
    fixture.detectChanges();  

    // Select the login button by its data attribute  
    const button = fixture.nativeElement.querySelector('[data-logout]') as HTMLButtonElement;  

    // Ensure the button exists, simulate a click, and verify the emit event  
    expect(button).toBeTruthy();  
    button.click();  
    expect(component.onSignOut.emit).toHaveBeenCalled();  
  })
});
