export type IdeaStatus = "idea" | "exploring" | "building" | "shipped";

export type IdeaRow = {
  id: string;
  user_id: string;
  title: string;
  notes: string;
  status: IdeaStatus;
  created_at: string;
  updated_at: string;
};

export const statusMeta: Record<IdeaStatus, { label: string; chip: string }> = {
  idea: { label: "Idea", chip: "border-slate-400/30 bg-slate-400/10 text-slate-300" },
  exploring: { label: "Exploring", chip: "border-cyan-400/30 bg-cyan-400/10 text-cyan-300" },
  building: { label: "Building", chip: "border-violet-400/30 bg-violet-400/10 text-violet-300" },
  shipped: { label: "Shipped", chip: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300" },
};
