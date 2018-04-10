import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DataBindingModule } from './data-binding/data-binding.module';
import { UsingDirectivesModule } from './using-directives/using-directives.module';
import { UsingServicesModule } from './using-services/using-services.module';
import { ComponentAdvancedModule } from './component-advanced/component-advanced.module';
import { UsingObservablesModule } from './using-observables/using-observables.module';


import { DemoComponent } from './demo.component';
import { BindingDemoComponent } from './data-binding/binding-demo.component';
import { DirectiveDemoComponent } from './using-directives/directive-demo.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { RoutingDemoComponent } from './routing-demo/routing-demo.component';
import { UsingFormsComponent } from './using-forms/using-forms.component';
import { DemoInProgressComponent } from './demo-in-progress/demo-in-progress.component';
import { ServiceDemoComponent } from './using-services/service-demo/service-demo.component';
import { AdvancedComponent } from './component-advanced/advanced/advanced.component';
import { ObservablesDemoComponent } from './using-observables/observables-demo.component';

const demoRoutes: Routes = [
  {
    path: 'demos', component: DemoComponent, children: [
      { path: 'databinding', component: BindingDemoComponent },
      { path: 'custommodule', component: DemoInProgressComponent },
      { path: 'directives', component: DirectiveDemoComponent },
      { path: 'component', component: CustomDirectiveComponent },
      { path: 'componentadvanced', component: AdvancedComponent },
      { path: 'forms', component: UsingFormsComponent },
      { path: 'service', component: ServiceDemoComponent },
      { path: 'routing', component: RoutingDemoComponent },
      { path: 'customdirective', component: CustomDirectiveComponent },
      { path: 'observables', component: ObservablesDemoComponent },
      { path: 'others', component: DemoInProgressComponent },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule, DataBindingModule, UsingDirectivesModule, UsingServicesModule, ComponentAdvancedModule, UsingObservablesModule,
    RouterModule.forChild(demoRoutes)
  ],
  exports: [RouterModule]
})
export class DemoRouteModule { }

