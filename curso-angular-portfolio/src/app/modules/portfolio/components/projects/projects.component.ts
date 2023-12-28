import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.jpeg',
      alt: 'Projeto Receitas Veganas',
      title: 'Receitas Veganas',
      with: '100px',
      height: '51px',
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
}
