import { roll1d3, roll3d6, table1D6, table2D6, tableD20, tableD66 } from './dice.js';
import { backgrounds } from './backgrounds.js';
import { vocations } from './vocations.js';
import { randomArmor, randomWeapon } from './weapons.js';

export class Traveler {
  constructor() {
    this.background = tableD20(backgrounds);
    this.name = '';
    this.description = [];
    this.attributes = {
      silver: roll3d6(), // TODO: should be 4d6kh3
      salt: roll3d6(),
      iron: roll3d6()
    };
    this.archetype = 'Sword';
    this.level = 1;
    this.xp = 0;
    this.will = 0;
    this.stamina = 0;
    this.vocations = [tableD66(vocations)];
    this.blackGlass = roll3d6() + 10;
    this.inventory = {
      slots: 10,
      gearBubbles: 5,
      weapons: [],
      armor: []
    };
    this.extra = table1D6(this.#extras)();
  };

  #extras = [
    () => { 
      const add = roll1d3();
      this.attributes.silver += add;
      return '+1d3 (' + add + ') Silver.';
    },
    () => { 
      const add = roll1d3();
      this.attributes.salt += add;
      return '+1d3 (' + add + ') Salt.';
    },
    () => { 
      const add = roll1d3();
      this.attributes.iron += add;
      return '+1d3 (' + add + ') Iron.';
    },
    () => {
      this.inventory.slots += 2;
      return '+2 inventory slots.';
    },
    () => {
      this.inventory.gearBubbles += 1;
      return '+1 Gear Bubble.';
    },
    () => {
      this.vocations.push(tableD66(vocations));
      return 'Gain another vocation.';
    }
  ];

  applyArchetype = () => {
    if (this.archetype === 'Sword') {
      this.will = 5;
      this.stamina = 6;
      this.inventory.weapons = [randomWeapon(), randomWeapon()];
    } else {
      this.will = 4;
      this.stamina = 6;
      this.inventory.weapons = [randomWeapon()];
    }
    this.inventory.armor = [randomArmor()];
  };

  applyBackground = () => {
    this.name = table2D6(this.background.names);
    this.description = [];
    this.background.tables.forEach(table => {
      this.description.push({ title: table.title, value: table2D6(table.table) });
    });
    this.description = this.description;
  }
}
