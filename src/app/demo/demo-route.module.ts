import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingModule } from './data-binding/data-binding.module';
import { UsingDirectivesModule } from './using-directives/using-directives.module';
import { DemoComponent } from './demo.component';
import { BindingDemoComponent } from './data-binding/binding-demo.component';
import { DirectiveDemoComponent } from './using-directives/directive-demo.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { RoutingDemoComponent } from './routing-demo/routing-demo.component';
import { UsingFormsComponent } from './using-forms/using-forms.component';
import { DemoInProgressComponent } from './demo-in-progress/demo-in-progress.component';

const demoRoutes: Routes = [  
  { path: 'demos', component: DemoComponent },
  { path: 'databinding', component: BindingDemoComponent },
  { path: 'custommodule', component: DemoInProgressComponent },
  { path: 'directives', component: DirectiveDemoComponent },
  { path: 'component', component: CustomDirectiveComponent },
  { path: 'forms', component: UsingFormsComponent },
  { path: 'routing', component: RoutingDemoComponent },
  { path: 'others', component: DemoInProgressComponent },  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(demoRoutes)
  ],
  declarations:[DemoInProgressComponent,CustomDirectiveComponent,UsingFormsComponent,RoutingDemoComponent]
})
export class DemoRouteModule { }
