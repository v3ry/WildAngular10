import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail';
import { CocktailServiceService } from '../cocktail-service.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktail[] = [];

  constructor(public cocktailService: CocktailServiceService) {}

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe((cocktailsFromJsonFile) => {
      console.log(cocktailsFromJsonFile);
      //       // Step 1. Get all the object keys.
      // let spaghettiProperties = Object.keys(cocktailsFromJsonFile);

      // // Step 2. Create an empty array.
      // let neededArray = [];

      // // Step 3. Iterate throw all keys.
      // let i = 0;
      // for (prop of spaghettiProperties ) {
      //     neededArray.push(cocktailsFromJsonFile[prop]);
      //     neededArray[i].['name'] = prop;
      //     i++;
      // }
      // console.log(neededArray)
      this.cocktails = cocktailsFromJsonFile;
      // console.log(JSON.parse(this.cocktails.toString()));
    });
  }
}
