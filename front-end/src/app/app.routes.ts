import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { CreateStoryComponent } from './admin/create-story/create-story.component';
import { CreateChapterComponent } from './admin/create-chapter/create-chapter.component';
import { CreateCategoryComponent } from './admin/create-category/create-category.component';
import { UpdateCategoryComponent } from './admin/update-category/update-category.component';
import { UpdateStoryComponent } from './admin/update-story/update-story.component';
import { UpdateChapterComponent } from './admin/update-chapter/update-chapter.component';
import { AboutComponent } from './components/about/about.component';
import { CategoryComponent } from './components/category/category.component';
import { AllStoriesComponent } from './components/all-stories/all-stories.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { ShowAllCategoriesComponent } from './admin/show-all-categories/show-all-categories.component';
import { StoryDetailsComponent } from './components/story-details/story-details.component';
import { StoryChaptersComponent } from './components/story-chapters/story-chapters.component';
import { Component } from '@angular/core';
import { ContactComponent } from './admin/contact/contact.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
// import { authGuard } from './auth/auth.guard';


export const routes: Routes = [
    {path:'',component:HomepageComponent},
    {path:'home', component:HomepageComponent},
    {path:'about', component:AboutComponent},
    {path:'register', component:RegisterComponent},
    {path:'verify', component:VerifyEmailComponent},
    {path:'contact', component:ContactUsComponent},
    {path:'login', component:LoginComponent},
    {path:'forgot/password', component:ForgotPasswordComponent},
    {path:'category', component:CategoryComponent},
    {path:'stories', component:AllStoriesComponent},
    {path:'story/details', component:StoryDetailsComponent},
    {path:'story/read', component:StoryChaptersComponent},
    {path:'story/create', component:CreateStoryComponent},
    {path:'story/edit', component: UpdateStoryComponent},
    {path:'chapter/edit', component: UpdateChapterComponent},
    {path: 'dashboard',component: DashboardComponent},
    {path:'admin/dashboard', component:AdminDashboardComponent},
    {path:'admin/category/show', component:ShowAllCategoriesComponent},
    {path:'admin/contacts', component:ContactComponent},
    {path:'chapter/create', component:CreateChapterComponent},
    {path:'category/create', component:CreateCategoryComponent},
    {path:'category/update/:id', component:UpdateCategoryComponent},
    {path:'**', component:ErrorComponent}
];
