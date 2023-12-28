import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Tech Lead',
        p: 'Minsait | Agosto 2020 - Presente',
      },
      text: '<p>- Liderar e gerenciar equipe de desenvolvedores, fornecendo orientação e liderança técnica. <br /> - Colaborar de perto com equipes multifuncionais, incluindo gerentes de produto, designers e desenvolvedores, para fornecer soluções de software de alta qualidade. <br /> - Participar de todo o ciclo de vida do desenvolvimento de software, desde a conceituação e design até a implementação, teste e implantação. <br /> - Desenvolver e manter a arquitetura frontend, garantindo escalabilidade, manutenção e otimização de desempenho. <br /> - Manter-se atualizado com as últimas tendências do setor, práticas recomendadas e tecnologias emergentes no desenvolvimento frontend.<br /> - Liderar revisões de código, fornecer feedback construtivo e impor padrões de codificação para garantir a qualidade e a consistência do código.<br /> - Identificar gargalos, problemas e áreas de melhoria no processo de desenvolvimento e implementar soluções.<br /> - Promover uma cultura de inovação, colaboração e aprendizado contínuo dentro da equipe de desenvolvimento frontend.</p>',
    },
  ]);
}
