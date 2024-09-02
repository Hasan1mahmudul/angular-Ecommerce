import { NgModule } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/header/header.component';
import { heroUsers, heroPhone, heroMagnifyingGlass, heroUser, heroHeart, heroShoppingCart, heroBars3 } from '@ng-icons/heroicons/outline';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({ heroUsers, heroPhone, heroMagnifyingGlass, heroUser, heroHeart, heroShoppingCart, heroBars3 }),
  ],
  exports:[HeaderComponent]
})
export class SharedModule { }
