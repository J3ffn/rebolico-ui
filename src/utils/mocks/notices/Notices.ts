import principalNoticeImage from "./images/PrincipalNotice.png";
import secundaryNoticeImage from "./images/SegundaryNotice.png";
import tertiaryNoticeImage from "./images/TertiaryImage.png";

export const PrincipalNotice = {
  author: "Jefferson Izaquiel",
  title: "A LUTA DO MLB EM JOÃO PESSOA",
  body: "O MLB (Movimento de Luta nos Bairros, Vilas e Favelas), é um movimento social nacional que luta pela reforma urbana e pelo direito humano de morar dignamente, eles são um movimento puramente formado por famílias desabrigadas ou sem expectativas de moradia em todo o país, que tem sido vítimas da ação predatória da especulação fundiária e imobiliária. Acreditam que esta reforma que o movimento visa implementar é um meio, um instrumento que faz parte da classe trabalhadora para construir uma sociedade de certa forma diferente dessa como conhecemos: com igualdade, dignidade e direitos para todos.",
};

export const NoticesImages: {
  attributes: React.ImgHTMLAttributes<HTMLImageElement>;
  text: string;
}[] = [
  {
    attributes: {
      id: "principal-1",
      src: principalNoticeImage,
      alt: "Imagem principal",
    },
    text: "Indignação contra o reitor cresce nos corredores do CCTA",
  },
  {
    attributes: {
      id: "secundary-1",
      src: secundaryNoticeImage,
      alt: "Imagem secundária",
    },
    text: "Ana Goveia Ministra palestra",
  },
  {
    attributes: {
      id: "tertiary-1",
      src: tertiaryNoticeImage,
      alt: "Imagem Terciária",
    },
    text: "A luta do MLB em João Pessoa",
  },
];
