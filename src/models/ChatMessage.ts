interface ChatMessage {
  owner: string;
  description: string;
  avatar_url?: string;
  time: string;
  left_talker: boolean;
  status: "Entregue" | "Vista";
}

export { ChatMessage };
