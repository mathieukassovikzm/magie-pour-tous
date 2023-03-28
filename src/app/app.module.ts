import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurgerModule } from './shared/components/burger/burger.module';
import { FooterModule } from './shared/components/footer/footer.module';
import { NavResponsiveModule } from './shared/components/nav-responsive/nav-responsive.module';
import { NavModule } from './shared/components/nav/nav.module';

const components = [FooterModule, BurgerModule, NavModule, NavResponsiveModule];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    components,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
