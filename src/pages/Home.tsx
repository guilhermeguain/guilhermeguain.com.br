import React from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaFileAlt,
  FaGlobe,
  FaWrench,
  FaPaintBrush,
  FaComment,
  FaChevronRight
} from 'react-icons/fa';

import '../styles/pages/home.css';

import Header from '../components/Header';

import avatar from '../images/guilhermeguain.png';

import projectAladdiv from '../images/project-aladdiv.jpg';
import projectAntaresTur from '../images/project-antarestur.jpg';
import projectEmporioDasArabias from '../images/project-emporiodasarabias.jpg';
import projectFuiViajando from '../images/project-fuiviajando.jpg';
import projectSitesMobi from '../images/project-sitesmobi.jpg';
import projectSwell from '../images/project-swell.jpg';

import educationUdacity from '../images/education-udacity.png';
import educationAlphaChannel from '../images/education-alpha-channel.png';
import educationAlura from '../images/education-alura.png';
import educationImpacta from '../images/education-impacta.png';

import extraMovingUp from '../images/extra-moving-up.png';

function Home() {
  const networks = [
    {
      title: 'Facebook',
      icon: <FaFacebookF size={24} color="#4267b2" />,
      link: 'https://www.facebook.com/guilhermeguain/'
    },
    {
      title: 'LinkedIn',
      icon: <FaLinkedinIn size={24} color="#0e76a8" />,
      link: 'https://www.linkedin.com/in/guilhermeguain/'
    },
    {
      title: 'GitHub',
      icon: <FaGithub size={24} color="#24292e" />,
      link: 'https://github.com/guilhermeguain'
    },
    {
      title: 'E-mail',
      icon: <FaEnvelope size={24} color="#282933" />,
      link: 'mailto:guilherme.guain@gmail.com'
    }
  ];

  const skills = {
    techs: ['HTML', 'CSS', 'JavaScript', 'Wordpress'],
    tools: ['GA', 'GSC', 'Tag Manager', 'SEMrush'],
    design: ['Photoshop', 'Illustrator'],
    languages: ['Português nativo', 'inglês intermediário'],
  }

  const projects = [
    {
      title: 'ALADDiV',
      img: projectAladdiv
    },
    {
      title: 'Antares Tur',
      img: projectAntaresTur
    },
    {
      title: 'Empório das Arábias',
      img: projectEmporioDasArabias
    },
    {
      title: 'Fui Viajando',
      img: projectFuiViajando
    },
    {
      title: 'Sites Mobi',
      img: projectSitesMobi
    },{
      title: 'Swell Engenharia',
      img: projectSwell
    }
  ]

  const experiences = [
    {
      title: 'Freelancer',
      role: 'Analista de SEO',
      period: '08/2018 - presente',
      activities: [
        'Elaboração do planejamento estratégico da marca no ambiente de busca orgânica;',
        'Análise e estruturação do site para adequá-lo às exigências das técnicas de otimização;',
        'Otimização das páginas e outros elementos digitais relevantes no processo de classificação do site;',
        'Monitoramento das posições nos resultados dos grandes buscadores e produção de relatórios.',
      ]
    },
    {
      title: '360 Comunicação & Design',
      role: 'Webdesigner',
      period: '05/2013 – 08/2018',
      activities: [
        'Desenvolvimento de sites responsivos e otimizados (briefing, planejamento, wireframe, layout, desenvolvimento e implantação);',
        'Otimização de sites para menor tempo de carregamento e melhor avaliação em mecanismos de busca;',
        'Gestão e diagramação de conteúdo, visando melhor experiência do usuário;',
        'Configuração e manutenção de ambientes para hospedagem de sites.',
      ]
    }
  ];

  const educations = [
    {
      title: 'Desenvolvedor Web Front-End',
      desc: 'Nanodegree',
      img: educationUdacity
    },
    {
      title: 'Design Gráfico',
      desc: 'Curso técnico',
      img: educationAlphaChannel
    },
    {
      title: 'Lógica de Programação',
      desc: 'Curso livre',
      img: educationImpacta
    },
    {
      title: 'PHP',
      desc: 'Curso livre',
      img: educationImpacta
    },
    {
      title: 'Tecnologia e Projeto Web',
      desc: 'Curso livre',
      img: educationImpacta
    },
    {
      title: 'HTML5 e CSS3',
      desc: 'Curso livre',
      img: educationAlura
    },
    {
      title: 'JavaScript',
      desc: 'Curso livre',
      img: educationAlura
    },
    {
      title: 'Web Design Responsivo',
      desc: 'Curso livre',
      img: educationAlura
    },
    {
      title: 'jQuery',
      desc: 'Curso livre',
      img: educationAlura
    },
    {
      title: 'Bootstrap',
      desc: 'Curso livre',
      img: educationAlura
    },
    {
      title: 'Flexbox',
      desc: 'Curso livre',
      img: educationAlura
    },
    {
      title: 'Grunt',
      desc: 'Curso livre',
      img: educationAlura
    },
    {
      title: 'WordPress',
      desc: 'Curso livre',
      img: educationAlura
    },
    {
      title: 'SEO WordPress',
      desc: 'Curso livre',
      img: educationAlura
    },
  ];

  return (
    <div id="page-home">
      <Header />
      <div className="page-content">
        <div className="section-hero">
          <h1 className="main-title">Desenvolvedor Web Front-End</h1>
        </div>
        <div id="about" className="section-about">
          <img className="about-avatar" src={avatar} width="220" height="220" alt="Guilherme Guain" title="Guilherme Guain" />
          <div className="about-content">
            <h2 className="about-name title">Guilherme Emilio Guain Peixinho</h2>
            <h3 className="about-role">Desenvolvedor Web Front-End</h3>
            <div className="social-networks">
              {networks.map(network => (
                <a key={network.title} href={network.link} target="_blank" rel="noreferrer" title={network.title}>
                  {network.icon}
                </a>
              ))}
            </div>
            <a className="curriculum-link" href="/">
              <FaFileAlt size={24} color="#fff" />Currículo
            </a>
          </div>
          <div className="about-skills">
            <h2 className="title">Habilidades</h2>
            <ul className="skills-container">
              <li className="skill">
                <FaGlobe size={24} color="#4072a0" />
                <p>
                  {skills.techs
                  .map<React.ReactNode>(tech => 
                    <span key={tech}>{tech}</span>
                  )
                  .reduce((previous, current, index) =>
                    index < (skills.techs.length - 1)
                    ? [previous, ', ', current]
                    : [previous, ' e ', current]
                  )}
                </p>
              </li>
              <li className="skill">
                <FaWrench size={24} color="#4072a0" />
                <p>
                  {skills.tools
                  .map<React.ReactNode>(tool => 
                    <span key={tool}>{tool}</span>
                  )
                  .reduce((previous, current, index) =>
                    index < (skills.tools.length - 1)
                    ? [previous, ', ', current]
                    : [previous, ' e ', current]
                  )}
                </p>
              </li>
              <li className="skill">
                <FaPaintBrush size={24} color="#4072a0" />
                <p>
                  {skills.design
                  .map<React.ReactNode>(design => 
                    <span key={design}>{design}</span>
                  )
                  .reduce((previous, current, index) =>
                    index < (skills.design.length - 1)
                    ? [previous, ', ', current , index]
                    : [previous, ' e ', current]
                  )}
                </p>
              </li>
              <li className="skill">
                <FaComment size={24} color="#4072a0" />
                <p>
                  {skills.languages
                  .map<React.ReactNode>(language => 
                    <span key={language}>{language}</span>
                  )
                  .reduce((previous, current, index) =>
                    index < (skills.languages.length - 1)
                    ? [previous, ', ', current]
                    : [previous, ' e ', current]
                  )}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div id="projects" className="section-projects">
          <h2 className="title">Projetos</h2>
          <div className="projects-container">
            {projects.map(project => (
              <img key={project.title} className="project" src={project.img} width="407" height="407" alt={project.title} title={project.title} />
            ))}
          </div>
        </div>
        <div id="experience" className="section-experience">
          <div className="content-wrapper">
            <h2 className="title">Experiência</h2>
            <div className="experiences-container">
              {experiences.map(experience => (
                <div key={experience.title} className="experience">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-title">{experience.title}</h3>
                      <p className="experience-role">{experience.role}</p>
                    </div>
                    <p className="experience-period">{experience.period}</p>
                  </div>
                  <ul className="experience-activities">
                    {experience.activities
                    .map(activity => (
                      <li key={activity}>
                        <FaChevronRight size={16} /> {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div id="education" className="section-education">
          <h2 className="title">Educação</h2>
          <div className="educations-container">
            {educations.map(education => (
              <div key={education.title} className="education">
                <div className="education-image-container">
                  <img className="education-image" src={education.img} alt={education.title} title={education.title} />
                </div>
                <h3 className="education-title">{education.title}</h3>
                <span className="education-desc">{education.desc}</span>
              </div>
            ))}
          </div>
        </div>
        <div id="extra" className="section-extra">
          <div className="content-wrapper">
          <h2 className="title">Extracurricular</h2>
              <div className="extras-container">
                <div className="extra">
                  <img className="extra-image" src={extraMovingUp} width="355" height="125" alt="Moving Up - High Stakes Academy" title="Moving Up - High Stakes Academy" />
                  <div className="extra-content">
                    <p>O moving up é um curso 100% online. Um mapa estratégico baseado nos 5 pilares da vida (financeiro, profissional, corpo e mente, relacionamentos e controle emocional) pra você hackear o seu lifestyle e trilhar o caminho para se tornar um profissional high stakes em 8 semanas.</p>
                    <p>Tudo o que deveria ser ensinado nas escolas e faculdades para alguém se tornar bem sucedido nos dias atuais. O verdadeiro MBA do mundo real.</p>
                    <p>Desenvolvido por Gabriel Goffi, ex-profissional de poker que entendeu que para se tornar um high stakes na sua profissão, ele tinha que se tornar um high stakes na vida.</p>
                    <p>Jogando os jogos mais caros do mundo do poker ele descobriu todo o mundo paralelo da alta performance, e através desses ensinamentos sua vida foi impactada e desde então vem compartilhando ensinamentos de lifestyle, performance, linhas de raciocínio estratégicas com milhões de pessoas nas mídias sociais e mais de 10 mil alunos.</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;