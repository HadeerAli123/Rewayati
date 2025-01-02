import { Routes } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';
// import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../app/components/homepage/homepage.component').then(
        (mod) => mod.HomepageComponent
      ),
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((mod) => mod.AuthModule),
  },

  {
    path: 'home',
    loadComponent: () =>
      import('../app/components/homepage/homepage.component').then(
        (mod) => mod.HomepageComponent
      ),
  },

  {
    path: 'stories',
    canActivate: [AuthGuard],
    data: { role: 'reader' },
    loadComponent: () =>
      import(
        '../app/components/stories/all-stories/all-stories.component'
      ).then((mod) => mod.AllStoriesComponent),
  },

  {
    path: 'story/details',
    canActivate: [AuthGuard],
    data: { role: 'reader' },
    loadComponent: () =>
      import('../app/components/story-details/story-details.component').then(
        (mod) => mod.StoryDetailsComponent
      ),
  },

  {
    path: 'story/read',
    canActivate: [AuthGuard],
    data: { role: 'reader' },
    loadComponent: () =>
      import('../app/components/story-chapters/story-chapters.component').then(
        (mod) => mod.StoryChaptersComponent
      ),
  },

  {
    path: 'admin',
    canActivate: [AuthGuard],
    data: { role: 'admin' },
    canActivateChild: [],
    loadChildren: () =>
      import('../app/admin/admin.module').then((mod) => mod.AdminModule),
  },

  {
    path: 'about',
    loadComponent: () =>
      import('../app/components/about/about.component').then(
        (mod) => mod.AboutComponent
      ),
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('../app/components/contact-us/contact-us.component').then(
        (mod) => mod.ContactUsComponent
      ),
  },

  {
    path: '**',
    loadComponent: () =>
      import('../app/components/error/error.component').then(
        (mod) => mod.ErrorComponent
      ),
  },
];