import { Routes } from '@angular/router';

export const adminRoutes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('../../app/admin/admin-dashboard/admin-dashboard.component').then(
        (mod) => mod.AdminDashboardComponent
      ),
  },

  {
    path: 'chapter/create',
    loadComponent: () =>
      import('../../app/admin/create-chapter/create-chapter.component').then(
        (mod) => mod.CreateChapterComponent
      ),
  },

  {
    path: 'chapter/edit',
    loadComponent: () =>
      import('../../app/admin/update-chapter/update-chapter.component').then(
        (mod) => mod.UpdateChapterComponent
      ),
  },

  {
    path: 'story/create',
    loadComponent: () =>
      import('../../app/admin/create-story/create-story.component').then(
        (mod) => mod.CreateStoryComponent
      ),
  },

  {
    path: 'story/edit',
    loadComponent: () =>
      import('../../app/admin/update-story/update-story.component').then(
        (mod) => mod.UpdateStoryComponent
      ),
  },

  {
    path: 'category/show',
    loadComponent: () =>
      import(
        '../../app/admin/category/show-all-categories/show-all-categories.component'
      ).then((mod) => mod.ShowAllCategoriesComponent),
  },

  {
    path: 'category/create',
    loadComponent: () =>
      import(
        '../../app/admin/category/create-category/create-category.component'
      ).then((mod) => mod.CreateCategoryComponent),
  },

  {
    path: 'category/update/:id',
    loadComponent: () =>
      import(
        '../../app/admin/category/update-category/update-category.component'
      ).then((mod) => mod.UpdateCategoryComponent),
  },

  {
    path: 'admin/contacts',
    loadComponent: () =>
      import('../../app/admin/contact/contact.component').then(
        (mod) => mod.ContactComponent
      ),
  },
];
