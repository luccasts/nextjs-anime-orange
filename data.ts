
//TYPE FOR STYLE TWO
export const Api = [
  {
    animes: [
      {
        id: "1",
        title: "Kimetsu no Yaiba",
        eps: [
        {id:"kimetsu-no-yaiba-episodio-1", ep: "1", duration: "24", url: "https://www.youtube.com/embed/VQGCKyvzIM4", img: "/images/animes/kimetsu-yaiba/t1ep1.jpg", date:"2024/09/03" }, 
        {id:"kimetsu-no-yaiba-episodio-2", ep: "2", duration: "24", url: "https://www.youtube.com/embed/6vMuWuWlW4I?si=IBQ6HWROVkyrbKcR", img: "/images/animes/kimetsu-yaiba/t1ep2.jpg", date:"2024/09/04"}],
        carousel: {img: "http://localhost:3000/images/animes/kimetsu-yaiba/poster.jpg" },
        details: { description: "Japão, era Taisho. Tanjiro, um bondoso jovem que ganha a vida vendendo carvão, descobre que sua família foi massacrada por um demônio. E pra piorar, Nezuko, sua irmã mais nova e única sobrevivente, também foi transformada num demônio. Arrasado com esta sombria realidade, Tanjiro decide se tornar um matador de demônios para fazer sua irmã voltar a ser humana, e para matar o demônio que matou sua família. Um triste conto sobre dois irmãos, onde os destinos dos humanos e dos demônios se entrelaçam, começa agora.", eps: '26', category: ["Ação", "Fantasia"] },
      },

      {
        id: "2",
        title: "Goblin Slayer",
        eps: [{id:"goblin-slayer-episodio-11", ep: "11", duration: "24", url: "https://www.youtube.com/embed/7qnhoB_cHSg?si=9pwRzt2iRPav28Z_", img: "/images/animes/goblin-slayer/t1ep11.jpg" }],
        carousel: {img: "/images/animes/goblin-slayer/poster.jpg" },
        details: { description: "Uma jovem sacerdotisa forma seu primeiro bando de aventureiros, mas eles imediatamente se metem em apuros. É então que o Goblin Slayer vem a seu resgate - um homem que dedica sua vida a exterminar todos os goblins, custe o que custar. E quando seus feitos começam a se espalhar, ninguém sabe o que pode acontecer depois...", eps: '13', category: ["Ação", "Fantasia", "Aventura"] }

      },
      {
        id: "3",
        title: "Rascal Does Not Dream of Bunny Girl Senpai",
        eps: [{id:"rascal-does-not-dream-of-bunny-girl-senpai-episodio-1", ep: "1", duration: "24", img: "/images/animes/bunny-girl/t1ep1.webp", url: "https://www.youtube.com/embed/o0TZj_d3Yfg?si=QUm5xJtn-3vMWvtU" }],
        carousel: { img: "/images/animes/bunny-girl/poster.png" },
        details: { description: `Sindrome da puberdade - experiências anormais que dizem ser causadas pela sensitividade e instabilidade comuns na adolescência. Este ano, Sakuta Azusagawa, um estudante do segundo ano de um colégio perto de Enoshima, conheceu várias garotas que estão sofrendo dessa "síndrome da puberdade." Como, por exemplo, uma garota-coelhinho que ele conheceu na biblioteca. Ela é Mai Sakurajima, uma atriz que deu uma pausa na carreira, e também sua veterana no colégio. Por algum motivo, ninguém mais consegue ver essa encantadora garota. Como será que ela ficou invisível?`, eps: "13", category: ["Comédia", "Romance", "Sobrenatural"] }

      },
      {
        id: "4",
        title: "Kono Subarashii Sekai Ni Shukufuku Wo!",
        eps: [{id: "kono-subarashii-sekai-ni-shukufuku-wo-episodio-3", ep: "3", duration: "24", img: "/images/animes/kono-suba/t1ep3.jpg", url: "https://www.youtube.com/embed/N1AO7k2o78g?si=RR4AQ5p5mcCd9qqB" }],
        carousel: { img: "/images/animes/kono-suba/poster.jpg" },
        details: { description: "Após um acidente de trânsito, a breve e desapontadora vida de Kazuma Sato deveria ter acabado, mas ele acorda e vê uma belíssima garota diante dele. Ela diz ser Aqua, uma deusa, e lhe pergunta se ele gostaria de ir para outro mundo, levando consigo apenas uma coisa deste mundo. Kazuma decide levar a própria deusa consigo, e eles são transportados para um mundo de fantasia cheio de aventura, dominado por um rei-demônio. Agora Kazuma quer apenas viver em paz, mas Aqua quer resolver vários dos problemas deste novo mundo, e o rei-demônio não vai ignorá-los por muito tempo...", eps: "11", category: ["Aventura", "Comédia", "Fantasia", "Sobrenatural"] }

      },
      {
        id: "5",
        title: "Kakegurui",
        eps: [{id:"kakegurui-episodio-5", ep: "5", duration: "24", img: "/images/animes/kakegurui/t1ep5.png", url: "https://www.youtube.com/embed/cTlHQiRNVl0?si=kaELsB2NKEyYRjK3" }],
        carousel: { img: "/images/animes/kakegurui/poster.jpg" },
        details: { description: "Yumeko Jabami aposta alto e quer ganhar todas na Academia Hyakkaou, uma escola onde os alunos são avaliados só por suas habilidades no jogo.", eps: "12", category: ["Drama", "Suspense"] }
      },
      {
        id: "6",
        title: "Shinchou Yuusha:Kono Yuusha ga Ore Tueee Kuse ni Shinchou Sugiru",
        eps: [{id:"shinchou-yuusha-kono-yuusha-ga-ore-tueee-kuse-ni-shinchou-sugiru-episodio-1", ep: "1", duration: "24", img: "/images/animes/kono-yuusha/t1ep1.webp", url: "https://www.youtube.com/embed/BCFzTkDiRWo?si=bXoniKZ262ubLh4d" }],
        carousel: { img: "/images/animes/kono-yuusha/poster.png" },
        details: { description: "A jovem deusa Ristarte não tem certeza se ela teve sorte ou não quando foi escolhida como a deusa encarregada de encontrar um herói para salvar Gaeabrande, um mundo de ranking S. Ela só convocou cinco heróis antes, e nunca para um mundo desta dificuldade. Ela decide convocar um herói japonês para ajudá-la, e eventualmente tropeça nas estatísticas de Seiya Ryuuguuin. Rista rapidamente o convoca, mas acontece que ela realmente deveria ter lido as letras miúdas - Seiya pode ser poderoso, mas ele também é excessivamente cauteloso...", eps: "12", category: ["Comédia", "Violência", "Conteúdo Sexual"] }
      },
    ],

  },
];

//  //máximo 7
//  anime: [
//   {
//     id: "1",
//     url: "http://localhost:3000/anime/1",
//     img: "/images/banner1.jpg",
//   },
//   {
//     id: "2",
//     url: "http://localhost:3000/anime/2",
//     img: "/images/banner2.jpg",
//   },
//   {
//     id: "3",
//     url: "http://localhost:3000/anime/info/4",
//     img: "/images/banner3.png",
//   },
//   {
//     id: "4",
//     url: "http://localhost:3000/anime/4",
//     img: "/images/banner4.jpg",
//   },
//   {
//     id: "5",
//     img: "/images/banner5.jpg",
//     url: "http://localhost:3000/anime/5",
//   },
//   {
//     id: "6",
//     img: "/images/banner6.jpg",
//     url: "http://localhost:3000/anime/6",
//   },
//   {
//     id: "7",
//     img: "/images/banner7.jpeg",
//     url: "http://localhost:3000/anime/7",
//   },
// ],
