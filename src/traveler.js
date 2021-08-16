import { roll3d6, table1D6, table2D6, tableD20, tableD66 } from './dice.js';
import { backgrounds } from './backgrounds.js';
import { vocations } from './vocations.js';
import { extras } from './extras.js';

export class Traveler {
  constructor() {
    this.background = tableD20(backgrounds);
    this.name = table2D6(this.background.names);
    this.description = [];
    this.background.tables.forEach(table => {
      this.description.push({ title: table.title, value: table2D6(table.table) });
    });
    this.attributes = {
      silver: roll3d6(),
      salt: roll3d6(),
      iron: roll3d6()
    };
    this.archetype = 'Sword';
    this.level = 1;
    this.xp = 0;
    this.will = 0; // TODO: base on archetype / level
    this.stamina = 0; // TODO: base on archetype / level
    this.vocations = [tableD66(vocations)];
    this.blackGlass = roll3d6() + 10;
    this.inventory = {
      slots: 10,
      gearBubbles: 5,
      weapons: [],
      armor: {}
    };
    this.extra = table1D6(extras)(this);
  }
}
