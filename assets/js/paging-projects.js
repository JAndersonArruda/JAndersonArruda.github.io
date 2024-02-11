const dataProjects = [
    {
        id: "project-astronnebula",
        name: "AstronNebula",
        description: "O AstronNebula utiliza agumas APIs para manipulação de dados autenticos, em tempo real. Tem por finalidade permitir o a aceeso visual à fotos, vídios e datas relacionadas a astronomia.",
        alt: "Imagem representativa do projeto AstronNebula",
        links: ["./assets/img/thumbnail/astronNebula/astronnebula.png", "./assets/img/thumbnail/astronNebula/astron-calendar.png", "./assets/img/thumbnail/astronNebula/astron-gallery.png", "./assets/img/thumbnail/astronNebula/astron-details-gallery.png", "./assets/img/thumbnail/astronNebula/astron-about.png"]
    },
    {
        id: "project-pokedex",
        name: "PokéDex",
        description: "O PokéDex é um site desenvolvido com Django, no qual faz uso de uma API para renderizar os dados de cada pokémon, sendo uma API vasta, por conter varios diretorios de daods.",
        alt: "Imagem representativa do projeto PokéDex",
        links: ["./assets/img/thumbnail/pokeDex/pokedex.png", "./assets/img/thumbnail/pokeDex/poke-details.png", "./assets/img/thumbnail/pokeDex/poke-about.png"]
    },
    {
        id: "project-distribution-graph",
        name: "Gráfico de Distribuição de Probabilidade",
        description: "O referente projeto é caracteristico por gerar dois gráficos de distribuição de probabilidade binômial. O 1° representa a distribuição normal e o 2° representa a distribuição acumulada.",
        alt: "Imagem representativa do projeto Gráfico de Distribuição de Probabilidade",
        links: ["./assets/img/thumbnail/distributionGraph/distribution-graph.png", "./assets/img/thumbnail/distributionGraph/distribution.png", "./assets/img/thumbnail/distributionGraph/distribution-binomion.png", "./assets/img/thumbnail/distributionGraph/distribution-acumulate.png"]
    },
    {
        id: "project-script",
        name: "Projeto Script",
        description: "Este projeto foi desenvolvido visando organizar as avalições de forma catégorica da Cadeira Linguegem de Script do CST em Análise e Desenvolvimmento de Sistemas.",
        alt: "Imagem representativa do projeto Projeto Script",
        links: ["./assets/img/thumbnail/scriptProject/script.png", "./assets/img/thumbnail/scriptProject/script-films.png", "./assets/img/thumbnail/scriptProject/script-account-bank.png", "./assets/img/thumbnail/scriptProject/script-transaction-bank.png"]
    },
    {
        id: "project-game-list",
        name: "Game List",
        description: "O projeto Game List foi idealizado pela Empresa Junior LOOPIS, apresentado como desáfio de seleção de novos membros/trainee. Sua maior caracteristica é fazer uso do LocalStorage.",
        alt: "Imagem representativa do projeto Game List",
        links: ["./assets/img/thumbnail/game-list.png"]
    },
    {
        id: "project-flask-recipe",
        name: "Flask Receitas",
        description: "Este projeto foi desenvolvido com Flask, sendo um repositorio de receitas, a fim de cumprir os requisitos avaliativos da acadêmia. Possuindo sessão de admin, para gerenciamento dos dados.",
        alt: "Imagem representativa do projeto Flask Receitas",
        links: ["./assets/img/thumbnail/flask-receita.jpeg"]
    },
    {
        id: "project-carina-web",
        name: "Carina Web",
        description: "O Carina Web é site desenvolvido com Django, com o intuito de mostrar um pouco das belezas do universo. Caracteristico por obter dados de consultas em APIs disponibilizadas pela NASA.",
        alt: "Imagem representativa do projeto ",
        links: ["./assets/img/thumbnail/carina-web.png"]
    },
    {
        id: "project-business-card",
        name: "Cartão de Visita",
        description: "O cartão de visita é um site voltado para utilização de recursos a proporcinar a manipulação das coordenadas da tela e design, possuindo como conteúdo informações de contato.",
        alt: "Imagem representativa do projeto Cartão de Visita",
        links: ["./assets/img/thumbnail/cartao.png"]
    },
    {
        id: "project-mario",
        name: "Mario",
        description: "Neste projeto foi possivil utilizar de forma avancada alguns recursos em CSS e Javascript para tornar o site interarivo,tornando posssi uma dinamica parecida com o jogo Super Mario.",
        alt: "Imagem representativa do projeto Mario",
        links: ["./assets/img/thumbnail/mario.png"]
    },
    {
        id: "project-movie-store",
        name: "Locadora de Filmes",
        description: "Neste projeto desenvolvido com HTML, CSS e JavaScript foi possivel implementar alguns conhecimentos e ferramentas de framework, juntamente com novos metodos e funções em JavaScript.",
        alt: "Imagem representativa do projeto Locadora de Filmes",
        links: ["./assets/img/thumbnail/locadora.png"]
    },
    {
        id: "project-calEa",
        name: "CalEA",
        description: "O CalEA é um projeto idealizado para cumprir os requisitos de uma atividade avaliativa, sua ideia núcleo consiste no cálculo de média global acadêmica e informar o status de aprovação.",
        alt: "Imagem representativa do projeto CalEA",
        links: ["./assets/img/thumbnail/calea.png"]
    },
    {
        id: "project-bookcase",
        name: "Estante de Livros",
        description: "Primeiro projeto com HTML e CSS no curso do Zero ao Primeiro Site ofertado pelo grupo +praTi. Neste projto consegui implementar alguns conhecimentos em CSS, que adiquiri em minha formação.",
        alt: "Imagem representativa do projeto Estante de Livros",
        links: ["./assets/img/thumbnail/estante.png"]
    }
];

const loopID = (id, links) => {
    console.log(links.length);
    if (id === links.length -1) return 0;
    return ++id;
}

document.addEventListener("DOMContentLoaded", async () => {
    const cardContent = document.querySelector(".container-projects-cards");

    cardContent.replaceChildren();
    dataProjects.forEach(project => {
        const contentProject = document.createElement("div");
        const imgProject = document.createElement("img");
        const contentTextProject = document.createElement("div");
        const titleProject = document.createElement("h4");
        const descriptionProject = document.createElement("p");

        let id = 0;

        setInterval(() => {
            console.log("antes" + id);
            imgProject.src = project.links[id];
            id = loopID(id, project.links);
            console.log("depois" + id);
        }, 3000);
        
        imgProject.alt = project.alt;
        imgProject.classList.add("card-img-top");

        titleProject.textContent = project.name;
        titleProject.classList.add("title-card-project");

        descriptionProject.textContent = project.description;

        contentTextProject.classList.add("card-body");
        contentTextProject.appendChild(titleProject);
        contentTextProject.appendChild(descriptionProject);

        contentProject.id = project.id;
        contentProject.classList.add("card-project");
        contentProject.appendChild(imgProject);
        contentProject.appendChild(contentTextProject);

        cardContent.appendChild(contentProject);
    });
});