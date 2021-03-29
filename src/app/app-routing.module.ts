import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnanthapurEngineeringComponent } from './ananthapur-engineering/ananthapur-engineering.component';
import { AnanthapurMbaComponent } from './ananthapur-mba/ananthapur-mba.component';
import { AnanthapurComponent } from './ananthapur/ananthapur.component';
import { ChittoorEngineeringComponent } from './chittoor-engineering/chittoor-engineering.component';
import { ChittoorMbaComponent } from './chittoor-mba/chittoor-mba.component';
import { ChittoorComponent } from './chittoor/chittoor.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EastgodavariEngineeringComponent } from './eastgodavari-engineering/eastgodavari-engineering.component';
import { EastgodavariMbaComponent } from './eastgodavari-mba/eastgodavari-mba.component';
import { EastgodavariComponent } from './eastgodavari/eastgodavari.component';
import { EngineeringComponent } from './engineering/engineering.component';
import { GunturEngineeringComponent } from './guntur-engineering/guntur-engineering.component';
import { GunturMbaComponent } from './guntur-mba/guntur-mba.component';
import { GunturComponent } from './guntur/guntur.component';
import { HomeComponent } from './home/home.component';
import { KadapaEngineeringComponent } from './kadapa-engineering/kadapa-engineering.component';
import { KadapaMbaComponent } from './kadapa-mba/kadapa-mba.component';
import { KadapaComponent } from './kadapa/kadapa.component';
import { KrishnaEngineeringComponent } from './krishna-engineering/krishna-engineering.component';
import { KrishnaMbaComponent } from './krishna-mba/krishna-mba.component';
import { KrishnaComponent } from './krishna/krishna.component';
import { KurnoolEngineeringComponent } from './kurnool-engineering/kurnool-engineering.component';
import { KurnoolMbaComponent } from './kurnool-mba/kurnool-mba.component';
import { KurnoolComponent } from './kurnool/kurnool.component';
import { MbaComponent } from './mba/mba.component';
import { NelloreEngineeringComponent } from './nellore-engineering/nellore-engineering.component';
import { NelloreMbaComponent } from './nellore-mba/nellore-mba.component';
import { NelloreComponent } from './nellore/nellore.component';
import { PrakasamEngineeringComponent } from './prakasam-engineering/prakasam-engineering.component';
import { PrakasamMbaComponent } from './prakasam-mba/prakasam-mba.component';
import { PrakasamComponent } from './prakasam/prakasam.component';
import { SignupComponent } from './signup/signup.component';
import { SrikakulamEngineeringComponent } from './srikakulam-engineering/srikakulam-engineering.component';
import { SrikakulamMbaComponent } from './srikakulam-mba/srikakulam-mba.component';
import { SrikakulamComponent } from './srikakulam/srikakulam.component';
import { VizagEngineeringComponent } from './vizag-engineering/vizag-engineering.component';
import { VizagMbaComponent } from './vizag-mba/vizag-mba.component';
import { VizagComponent } from './vizag/vizag.component';
import { VizianagaramEngineeringComponent } from './vizianagaram-engineering/vizianagaram-engineering.component';
import { VizianagaramMbaComponent } from './vizianagaram-mba/vizianagaram-mba.component';
import { VizianagaramComponent } from './vizianagaram/vizianagaram.component';
import { WestgodavariComponent } from './westgodavari/westgodavari.component';


const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"signup",component:SignupComponent},
  {path:"westgodavari",component:WestgodavariComponent,
  children:[
    {path:"engineering",component:EngineeringComponent},
    {path:"mba",component:MbaComponent},
  ]},

  {path:"eastgodavari",component:EastgodavariComponent,
  children:[
    {path: 'engineering',component:EastgodavariEngineeringComponent},
    {path: 'mba',component:EastgodavariMbaComponent}

  ]},
  {path:"kurnool",component:KurnoolComponent,
children:[
  {path:"engineering",component:KurnoolEngineeringComponent},
  {path:"mba",component:KurnoolMbaComponent}
]},
{path:"krishna",component:KrishnaComponent,
children:[
  {path:"engineering",component:KrishnaEngineeringComponent},
  {path:"mba",component:KrishnaMbaComponent}
]},
{path:"nellore",component:NelloreComponent,
children:[
  {path:"engineering",component:NelloreEngineeringComponent},
  {path:"mba",component:NelloreMbaComponent}
]},
{path:"guntur",component:GunturComponent,
children:[
  {path:"engineering",component:GunturEngineeringComponent},
  {path:"mba",component:GunturMbaComponent}
]},
{path:"vizag",component:VizagComponent,
children:[
  {path:"engineering",component:VizagEngineeringComponent},
  {path:"mba",component:VizagMbaComponent}
]},
{path:"srikakulam",component:SrikakulamComponent,
children:[
  {path:"engineering",component:SrikakulamEngineeringComponent},
  {path:"mba",component:SrikakulamMbaComponent}
]},
{path:"chittoor",component:ChittoorComponent,
children:[
  {path:"engineering",component:ChittoorEngineeringComponent},
  {path:"mba",component:ChittoorMbaComponent}
]},
{path:"kadapa",component:KadapaComponent,
children:[
  {path:"engineering",component:KadapaEngineeringComponent},
  {path:"mba",component:KadapaMbaComponent}
]},
{path:"prakasam",component:PrakasamComponent,
children:[
  {path:"engineering",component:PrakasamEngineeringComponent},
  {path:"mba",component:PrakasamMbaComponent}
]},
{path:"ananthapur",component:AnanthapurComponent,
children:[
  {path:"engineering",component:AnanthapurEngineeringComponent},
  {path:"mba",component:AnanthapurMbaComponent}
]},
{path:"vizianagaram",component:VizianagaramComponent,
children:[
  {path:"engineering",component:VizianagaramEngineeringComponent},
  {path:"mba",component:VizianagaramMbaComponent}
]},
{path:"contactus",component:ContactusComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
