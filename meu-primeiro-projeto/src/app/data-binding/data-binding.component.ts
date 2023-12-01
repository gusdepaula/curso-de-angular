import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent {
  public nome: string = 'Gusta';
  public idade: number = 40;
  public position: { x: number; y: number } = { x: 0, y: 0 };

  public checkedDisable: boolean = true;

  public imgSrc: string =
    'https://plugins.shopware-staging.overdose.digital/media/ca/a7/df/1692086257/testing.jpeg';

  public imgTitle: string = 'Teste';

  public alertInfo(valor: MouseEvent) {
    console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent) {
    // console.log(valor);
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
