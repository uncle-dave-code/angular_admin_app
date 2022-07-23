import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { MenuItem } from 'primeng/api';
import { LoginRespose } from 'src/app/model/auth/login-response';
import { Language } from 'src/app/model/utils/language';
import { AuthService } from 'src/app/services/auth.service';
import { LanguageService } from 'src/app/services/language.service';
import { StorageService } from 'src/app/services/storage.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./../layouts.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarVisibility: boolean = false;
  items!: MenuItem[];
  login!: LoginRespose;
  languages!: Language[];
  selectedLanguage!: Language;
  constructor(private authService: AuthService,
    private router: Router,
    private utilsService: UtilsService,
    private languageService: LanguageService,
    private translocoService: TranslocoService,
    private storageService: StorageService) { }



  ngOnInit(): void {
    this.login = this.authService.getLoginData();

    this.languageService.getAllLanguage().subscribe({
      next: (values: Language[]) => {
        this.languages = values;
      }
    }
    );

    const activeLang = this.languageService.getLanguageByCode(this.storageService.getLang());

    this.selectedLanguage = (activeLang !== null) ? activeLang : this.languageService.getDefaultLanguage();

    this.loadLanguage(this.selectedLanguage.code);
  }

  changeSideBar(): void {
    this.sideBarVisibility = !this.sideBarVisibility;
  }


  doLogout(): void {
    this.authService.logout().subscribe(
      {
        complete: () => {
          this.router.navigate(['login']);
        }
      }
    );
  }

  getGravatarHash(): string {
    return this.utilsService.getGravatarHash(this.login.email);
  }

  changeSiteLanguage(language: any): void {
    this.loadLanguage(language.value.code);
  }

  loadLanguage(languageCode: string): void {

    this.translocoService.load(languageCode).subscribe({
      next: () => {
        this.translocoService.setActiveLang(languageCode);
        this.storageService.setLang(languageCode);
        this.items = this.utilsService.getAppMenu();
      }
    })
  }
}
