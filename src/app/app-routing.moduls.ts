import {NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./main-page/main-page.component";
import {CreateUserComponent} from "./create-user/create-user.component";



const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'create', component: CreateUserComponent},
  {path: 'update/:id', component: CreateUserComponent},
]
@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]

  }
)
export class AppRoutingModuls {

}
