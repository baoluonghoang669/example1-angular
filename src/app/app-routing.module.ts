import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthComponent } from './components/auth/auth.component';
// import { RecipesComponent } from './components/recipes/recipes.component';
// import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  // { path: '', component:  RecipesComponent},
  // { path: 'auth', component:  AuthComponent},
  // { path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
