export interface Spot {
  image: string;
  name: string;
  description: string;
  fish: string;
  time: string;
}

export const spots: Spot[] = [
  { image: "/spots/spot1.jpg", name: "Karang Beras", description: "Tempat dikelilingi pulau-pulau, banyak karang dan sudah pasti banyak ikannyee", fish: "Ikan Balong (Kerapu)", time: "Petang" },
  { image: "/spots/spot2.jpg", name: "Karang Bongkok", description: "Tempat luas, banyak gusung pasir, tandesnya orang nganjorr", fish: "Cumi - cumi", time: "Tengah hari bolong" },
  { image: "/spots/spot3.jpg", name: "Depan Pulau Kotok", description: "tandessnya buat tada-tada bahkan jg ngotrek", fish: "Tongkol", time: "Pagi" },
];