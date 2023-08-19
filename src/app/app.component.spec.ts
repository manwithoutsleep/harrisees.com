import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    
    const angularFirestoreStub = {
        collection: (collectionLabel: string) => {
            valueChanges: () => [
            'first song',
            'second song'
            ]

        }
    } as AngularFirestore;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                AngularFirestoreModule
            ],
            declarations: [
                AppComponent
            ],
            providers: [
                AngularFirestore,
                { provide: AngularFirestore, useValue: angularFirestoreStub }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

    it(`should have as title 'Harrisees'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(component.title).toEqual('Harrisees!');
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('.content')?.textContent).toContain('Built on Angular, hosted on Firebase.');
    });
});
