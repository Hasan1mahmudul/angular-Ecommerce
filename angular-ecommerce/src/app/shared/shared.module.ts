import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/header/header.component';
import { NgIconsModule } from '@ng-icons/core';
import { heroUsers } from '@ng-icons/heroicons/outline'; 


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({ heroUsers })
  ],
  exports:[HeaderComponent]
})
export class SharedModule { }
