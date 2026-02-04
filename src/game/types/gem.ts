export type GemColour = "green" | "blue" | "red" | "white" | "black" | "gold";

export type OrdinaryGemColour = Exclude<GemColour, "gold">

export type GemCost = Partial<Record<Exclude<GemColour, "gold">, number>>;
