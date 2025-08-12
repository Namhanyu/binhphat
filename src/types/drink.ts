export interface note {
  label: string;
  price: string;
}

export interface DrinkItem {
  name: string;
  nameJa: string;
  note?: string | note[];
  price: string;
  isFullWidth?: boolean;
  showDivider?: boolean;
}

export interface DrinkCategory {
  name: string;
  nameJa?: string;
  items: DrinkItem[];
  drinkListClass?: string;
  drinkListType?: "default" | "flex" | "cols-3";
}

export interface TabData {
  id: string;
  title: string;
  subtitle: string;
  category: DrinkCategory[];
}
