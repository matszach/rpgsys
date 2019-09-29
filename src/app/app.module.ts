import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CharacterGeneratorComponent } from './character-generator/character-generator.component';
import { AbilityGeneratorComponent } from './ability-generator/ability-generator.component';
import { NpcGeneratorComponent } from './npc-generator/npc-generator.component';
import { EncounterCalculatorComponent } from './encounter-calculator/encounter-calculator.component';
import { RulesCharacterCreationComponent } from './rules/rules-character-creation/rules-character-creation.component';
import { RulesCoreMechanicsComponent } from './rules/rules-core-mechanics/rules-core-mechanics.component';
import { RulesResourcesComponent } from './rules/rules-resources/rules-resources.component';
import { RulesNpcComponent } from './rules/rules-npc/rules-npc.component';
import { RulesIntroductionComponent } from './rules/rules-introduction/rules-introduction.component';
import { DownloadsComponent } from './downloads/downloads.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ParagraphComponent,
    NavbarComponent,
    HomeComponent,
    CharacterGeneratorComponent,
    AbilityGeneratorComponent,
    NpcGeneratorComponent,
    EncounterCalculatorComponent,
    RulesIntroductionComponent,
    RulesCharacterCreationComponent,
    RulesCoreMechanicsComponent,
    RulesResourcesComponent,
    RulesNpcComponent,
    DownloadsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
