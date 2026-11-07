export interface EventItem {
  day: string;
  month: string;
  title: string;
  location: string;
  time: string;
}

export const events: EventItem[] = [
  { day: "12", month: "Jan", title: "Ngotrek bareng di Kepulauan Seribu", location: "[Pulau Tidung]]", time: "06.00 WIB" },
  { day: "28", month: "Des", title: "Lomba strike terberat", location: "[Pulau Air]", time: "14.00 WIB" },
  { day: "30", month: "Aug", title: "BBQ-an di Pulau Tidung kecil", location: "[Pulau Tidung Kecil]", time: "19.00 WIB" },
];