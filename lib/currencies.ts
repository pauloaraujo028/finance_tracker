export const Currencies = [
  {
    value: "USD",
    label: "$ Dollar",
    localte: "en-US",
  },
  {
    value: "EUR",
    label: "€ Euro",
    localte: "de-DE",
  },
  {
    value: "BRL",
    label: "R$ Real",
    localte: "pt-BR",
  },
  {
    value: "GBP",
    label: "£ Pound",
    localte: "en-GB",
  },
  {
    value: "JPY",
    label: "¥ Yen",
    localte: "ja-JP",
  },
];

export type Currency = (typeof Currencies)[0];
