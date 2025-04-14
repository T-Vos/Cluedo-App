export type Enquiry = {
  suggesting_player: Player;
  suspect: string;
  weapon: string;
  room: string;
  disproving_player: Player | null;
  disproved_with: string | null;
};

export type GameState = {
  enquiries: Enquiry[];
};
export type Player = {
  id: number;
  name: string;
  color: string;
};
