import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { rootRouterConfig } from "./router/app.routes";
import { LayoutComponent } from "./pages/layout/layout.component";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";

@NgModule({
  declarations: [LayoutComponent, HomeComponent, AboutComponent],
  imports: [BrowserModule, RouterModule.forRoot(rootRouterConfig)],
  bootstrap: [LayoutComponent]
})

export class AppModule { }
