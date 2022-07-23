import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { MessageService } from 'primeng/api';
import { LoginRequest } from 'src/app/model/auth/login';
import { LoginRespose } from 'src/app/model/auth/login-response';
import { Language } from 'src/app/model/utils/language';
import { AuthService } from 'src/app/services/auth.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./../auth.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm!: FormGroup;
  languages!: Language[];
  selectedLanguage!: Language;
  constructor(private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private translocoService: TranslocoService,
    private messageService: MessageService,
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.signInForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [true, Validators.required]
    });

   this.languageService.getAllLanguage().subscribe({
      next: (values: Language[]) => {
        this.languages = values;
      }}
    );

    this.selectedLanguage = this.languageService.getDefaultLanguage();

  }

  doLogin() {
    this.messageService.clear();

    if (this.signInForm.valid) {
      const code: string = this.signInForm.get('email')!.value;
      const password: string = this.signInForm.get('password')!.value;
      const rememberMe: boolean = this.signInForm.get('rememberMe')!.value;

      const loginData: LoginRequest = new LoginRequest(code, password, rememberMe);

      this.authService.signIn(loginData).subscribe(
        {
          next: (login: LoginRespose) => {
            const redirectURL = this.activatedRoute.snapshot.queryParamMap.get('redirectURL') || '';

            // Navigate to the redirect url
            this.router.navigateByUrl(redirectURL);
          },
          error: () => {
            this.messageService.add({ severity: 'error', summary: '', detail: this.translocoService.translate("sign-in.invalid-credentials") });
          }
        }
      );
    } else {
      this.messageService.add({ severity: 'error', summary: '', detail: this.translocoService.translate("msg.complete-data") });
    }

  }


  changeSiteLanguage(language: any): void {
    this.translocoService.setActiveLang(language.value.code);
  }

}
