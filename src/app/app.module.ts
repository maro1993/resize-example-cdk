import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TextFieldModule } from '@angular/cdk/text-field'
import { AppComponent } from './app.component'

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, TextFieldModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
