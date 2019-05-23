import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
// import { AuthGuard } from "./auth/auth-guard.service";  //temporarily disabled

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'recipes', loadChildren: './recipe/recipes.module#RecipesModule'},
    { path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'},
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule'}
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {

}
