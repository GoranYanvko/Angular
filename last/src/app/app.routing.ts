import {Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AuthGards } from './gards/auth.gards';
import { UserProfilComponent } from './components/user/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { GardServices } from './core/services/gars/gards.services';
import { AdminGards } from './gards/admin.gards';
import { PostComponent } from './components/post/post.component';



export const routes = [
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'profile', component: UserProfilComponent, canActivate: [AuthGards]},
    {path:'register', component: RegisterComponent},
    {path:'admin', component: AdminComponent, canActivate: [AdminGards]},
    {path:'post/:id', component: PostComponent},
    {path:'books', loadChildren:'app/components/books/books.module#BookComponentModule', canActivate: [AuthGards]}
]

