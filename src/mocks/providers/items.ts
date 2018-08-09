import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    let items = [
      {
        "name": "Cracks del balón",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "Amigos UJI.",
        "event_date": new Date(),
        "min_users": 10,
        "max_users": 14,
        "current_users": 8
      },
      {
        "name": "Partidos Sindicalistas",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "Amigos sindical.",
        "event_date": new Date(),
        "min_users": 10,
        "max_users": 12,
        "current_users": 9
      },
      {
        "name": "Equipo veteranos",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "Equipo Liga Veteranos.",
        "event_date": new Date(),
        "min_users": 11,
        "max_users": 17,
        "current_users": 12
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
