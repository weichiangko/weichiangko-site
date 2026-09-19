export type SiteMode = 'public' | 'present';

export type PresentStep = 
  | 'overview' 
  | 'case:mionext' 
  | 'case:visionmax' 
  | 'case:edge-ai-surveillance' 
  | 'webmcp' 
  | 'close';

export interface SiteState {
  mode: SiteMode;
  presentStep: PresentStep;
  showNotes: boolean;
}

export interface ProfileData {
  name: string;
  roles: string[];
  oneLiner: string;
  credentials: string[];
  yearsExperience: string;
}
