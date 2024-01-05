import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

// Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull_.jpeg',
      alt: 'Projeto The Movie Database',
      title: 'The Movie Database',
      with: '160px',
      height: '91px',
      description:
        '<p>Para criar este aplicativo, utilizei a API do TMDb (The Movie Database). Inicialmente, optei por desenvolvê-lo com React (CRA) e posteriormente migrei para Vite. Estou aplicando todos os meus conhecimentos em React nele, começando pelo uso de styled-components e evoluindo para a criação de pequenos componentes e hooks customizados.</p>',
      links: [
        {
          name: 'Conheça o site',
          href: 'https://receitasvegan.netlify.app/',
        },
      ],
    },
    {
      src: 'assets/img/projects/vfull.jpeg',
      alt: 'Projeto Receitas Veganas',
      title: 'Receitas Veganas',
      with: '160px',
      height: '91px',
      description:
        '<p>O Receita Veganas é um aplicativo que foi criado com o intuito de centralizar receitas veganas favoritas e torná-las facilmente acessíveis no iPhone durante o preparo das refeições. Ele é responsivo, ou seja, se adapta a diferentes dispositivos e tamanhos de tela.</p>',
      links: [
        {
          name: 'Conheça o site',
          href: 'https://receitasvegan.netlify.app/',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
