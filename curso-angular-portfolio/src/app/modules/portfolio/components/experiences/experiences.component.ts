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
    {
      summary: {
        strong: 'Frontend Developer',
        p: 'CertiSign | Dezembro 2014 - Junho 2023',
      },
      text: '<p>- Projetar e desenvolver código frontend em HTML5 e CSS3(Bootstrap), Javascript(AngularJS) em conformidade com os padrões emergentes e novas versões de browsers e dispositivos móveis.<br />- Desenvolver protótipos para apoiar a decisão de quando a aplicação móvel web é preferível a aplicação nativa.<br />- Desenvolver roteiros de teste automatizados para aplicações frontais.<br />- Desenvolver soluções de interface para assinatura digital e eletrônica, contribuindo para a criação de experiências seguras e eficientes para os usuários. <br />- Manter os frameworks da aplicação sempre atualizados, acompanhando as versões mais recentes e aplicando melhorias e correções relevantes. <br />- Responder pela melhoria contínua da UX e UI.<br />- Realizar integração com API RESTful, permitindo a comunicação eficiente entre a interface frontend e os serviços backend. <br />- Realizar correções de vulnerabilidades no frontend identificadas por meio de testes de segurança (Pentest). Essa responsabilidade assegurou que as interfaces desenvolvidas estivessem protegidas contra potenciais ameaças, garantindo a segurança dos dados e a confiabilidade do sistema.<br />- Desempenhar o papel de mentor no processo de aprendizagem dos estagiários, compartilhando conhecimentos e fornecendo orientações valiosas. Essa atuação foi fundamental para o crescimento profissional da equipe, estimulando o aprendizado e a troca de experiências.</p>',
    },
    {
      summary: {
        strong: 'Coordenador Web',
        p: 'CertiSign | Maior 2013 - Dezembro 2014',
      },
      text: '<p>- Criar todas as interfaces digitais da companhia: sites, blogs, redes sociais, hotsites, aplicativos iOS e Android.<br />- Criar todas as ações de e-mail marketing da companhia.<br />- Coordenar todas as demandas de alterações, correções e melhorias do site da companhia, hotsites e blogs.<br />- Construir HTML para facilitar a navegabilidade, usabilidade e experiência do usuário para compra de produtos online.<br />- Aplicar sistemas de tageamento, meta tags, padronização e estruturação de URLs, parâmetros UTM, entre outros.<br />- Construir/Avaliar layouts para peças online.<br />- Coordenar a produção de conteúdo e ações para canais, desenvolvimento de novos produtos e parcerias.<br />- Montar estratégias de SEO.<br />- Responsável pela aplicação da marca e padrão visual da companhia em todas as peças digitais.</p>',
    },
    {
      summary: {
        strong: 'Frontend Developer',
        p: 'Grupo TV1 | Julho 2010 - Abril 2013',
      },
      text: '<p>- Liderança da equipe de Tecnologia (Backend e Frontend).<br />- Tive uma visão estratégica para melhorar as condições de trabalho da equipe, buscando criar um ambiente produtivo, motivador e colaborativo. Isso incluiu a identificação de oportunidades de aprimoramento nos processos internos, a implementação de boas práticas e a promoção de uma cultura de inovação.<br />- Desenvolvi e ministrei treinamentos para os estagiários da equipe, compartilhando conhecimentos e habilidades técnicas, bem como orientando-os no desenvolvimento de suas competências profissionais. <br />- Desenvolvimento de portais, sites e hotsites para diversos clientes. Utilizando HTML, CSS, JQUERY, C#<br />- Desenvolvimento de aplicações nas Mídias Sociais (Facebook e Twitter).<br />- Desenvolvimento de orçamentos para o desenvolvimento de Frontend.<br />- Desenvolvimento de E-mails Marketing.<br />- Manutenções pontuais em alguns projetos.</p>',
    },
    {
      summary: {
        strong: 'Analista Frontend Pleno',
        p: 'Walmart | Novembro 2009 - Junho 2010',
      },
      text: '<p>- Desenvolver código frontend em HTML/CSS/Jquery do e-commerce e de e-mail marketing. <br />- Desenvolver código frontend em HTML/CSS/Jquery de hotsites para clientes, como: Philips, Acer, Samsung, Sony, entre outros.</p>',
    },
    {
      summary: {
        strong: 'Frontend Developer',
        p: 'Grupo TV1 | Abril 2007 - Outubro 2009',
      },
      text: '<p>- Desenvolver código frontend em HTML/CSS/Jquery<br />- Desenvolver código frontend de newsletter e e-mail marketing.<br />- Principais clientes: Banco do Brasil, Mantecorp, Cyrela, Ecorodovias, Officer, Grupo Orsa, Guaraná Antarctica, Grupo Pão de Açúcar, entre outros.</p>',
    },
  ]);
}
