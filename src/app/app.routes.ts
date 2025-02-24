import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Component } from '@angular/core';
import { ExplorePageComponent } from './pages/explore-page/explore-page.component';

export const routes: Routes = [
    {
        component: HomePageComponent,
        path: ""
    },
    {
        component:ExplorePageComponent,
        path: "explore/:country"
    },
    {
        path:'**',
        redirectTo:'',
    }
];
