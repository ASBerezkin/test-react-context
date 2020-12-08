export type TElement = {
  id: number;
  name: string;
};
export type TMock = {
  baseData: TElement[];
  data: TElement[];
  isMin: boolean;
  isAlphabet: boolean;
  letters: Array<string>;
};

export const mock: TMock = {
  baseData: [
    {
      id: 1,
      name: "Александр",
    },
    {
      id: 2,
      name: "Иван",
    },
    {
      id: 3,
      name: "Сергей",
    },
    {
      id: 4,
      name: "Петр",
    },
    {
      id: 5,
      name: "Кристина",
    },
    {
      id: 6,
      name: "Мария",
    },
    {
      id: 7,
      name: "Галина",
    },
    {
      id: 8,
      name: "Федор",
    },
    {
      id: 9,
      name: "Марина",
    },
    {
      id: 10,
      name: "Евгений",
    },
    {
      id: 11,
      name: "Максим",
    },
    {
      id: 12,
      name: "Дарья",
    },
    {
      id: 13,
      name: "Олег",
    },
    {
      id: 14,
      name: "Владимир",
    },
    {
      id: 15,
      name: "Роман",
    },
  ],
  data: [
    {
      id: 1,
      name: "Александр",
    },
    {
      id: 2,
      name: "Иван",
    },
    {
      id: 3,
      name: "Сергей",
    },
    {
      id: 4,
      name: "Петр",
    },
    {
      id: 5,
      name: "Кристина",
    },
    {
      id: 6,
      name: "Мария",
    },
    {
      id: 7,
      name: "Галина",
    },
    {
      id: 8,
      name: "Федор",
    },
    {
      id: 9,
      name: "Марина",
    },
    {
      id: 10,
      name: "Евгений",
    },
    {
      id: 11,
      name: "Максим",
    },
    {
      id: 12,
      name: "Дарья",
    },
    {
      id: 13,
      name: "Олег",
    },
    {
      id: 14,
      name: "Владимир",
    },
    {
      id: 15,
      name: "Роман",
    },
  ],
  isMin: true,
  isAlphabet: false,
  letters: [],
};
