import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';//precisa desses 2 módulos para conectar o app com o firebase
import { environment } from '../environments/environment';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './funcionarios/list/list.component';
import { EditComponent } from './funcionarios/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), //ele tem que ser inicializado com a chave de acesso que tá no envionment
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
