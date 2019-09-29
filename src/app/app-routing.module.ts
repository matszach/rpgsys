import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharacterGeneratorComponent } from './character-generator/character-generator.component';
import { AbilityGeneratorComponent } from './ability-generator/ability-generator.component';
import { RulesIntroductionComponent } from './rules/rules-introduction/rules-introduction.component';
import { RulesCharacterCreationComponent } from './rules/rules-character-creation/rules-character-creation.component';
import { RulesCoreMechanicsComponent } from './rules/rules-core-mechanics/rules-core-mechanics.component';
import { RulesResourcesComponent } from './rules/rules-resources/rules-resources.component';
import { RulesNpcComponent } from './rules/rules-npc/rules-npc.component';
import { NpcGeneratorComponent } from './npc-generator/npc-generator.component';
import { EncounterCalculatorComponent } from './encounter-calculator/encounter-calculator.component';
import { DownloadsComponent } from './downloads/downloads.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'rules', 
    children: [
      { path: 'introduction', component: RulesIntroductionComponent },
      { path: 'character-creation', component: RulesCharacterCreationComponent },
      { path: 'core-mechanics', component: RulesCoreMechanicsComponent },
      { path: 'npcs', component: RulesNpcComponent },
      { path: 'resources', component: RulesResourcesComponent }
    ]},
  { path: 'character-generator', component: CharacterGeneratorComponent},
  { path: 'ability-generator', component: AbilityGeneratorComponent},
  { path: 'npc-generator', component: NpcGeneratorComponent},
  { path: 'encounter-calculator', component: EncounterCalculatorComponent},
  { path: 'downloads', component: DownloadsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
