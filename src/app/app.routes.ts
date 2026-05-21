import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'questionnaire',
  },
  {
    path: 'questionnaire',
    loadComponent: () =>
      import('./components/questionnaire/questionnaire.component').then(
        (module) => module.QuestionnaireComponent,
      ),
  },
  {
    path: 'builder',
    loadComponent: () =>
      import('./components/builder/builder.component').then((module) => module.BuilderComponent),
  },
  {
    path: '**',
    redirectTo: 'questionnaire',
  },
];
