// WebMCP Tool Definitions
export interface WebMCPTool {
  name: string;
  description: string;
  parameters: Array<{
    name: string;
    type: 'string' | 'array' | 'object';
    description: string;
    required: boolean;
    options?: string[];
  }>;
  returns: string;
}

export const webmcpTools: WebMCPTool[] = [
  {
    name: 'get_profile',
    description: 'Get profile information including name, roles, credentials, and one-liner',
    parameters: [],
    returns: 'Profile object with name, roles, oneLiner, and credentials'
  },
  {
    name: 'list_case_studies',
    description: 'List all case studies with basic information',
    parameters: [],
    returns: 'Array of case studies with slug, title, problemStatement, role, and chips'
  },
  {
    name: 'get_case_study',
    description: 'Get detailed information for a specific case study',
    parameters: [
      {
        name: 'slug',
        type: 'string',
        description: 'Case study slug (mionext, visionmax, or edge-ai-surveillance)',
        required: true,
        options: ['mionext', 'visionmax', 'edge-ai-surveillance']
      }
    ],
    returns: 'Complete case study object with all six fields'
  },
  {
    name: 'filter_work',
    description: 'Filter case studies by tags',
    parameters: [
      {
        name: 'tags',
        type: 'array',
        description: 'Array of tags to filter by (e.g., ["Mobile UI", "React"])',
        required: true
      }
    ],
    returns: 'Filtered array of case studies'
  },
  {
    name: 'contact_intent',
    description: 'Submit a contact intent message',
    parameters: [
      {
        name: 'message',
        type: 'string',
        description: 'Contact message or inquiry',
        required: true
      }
    ],
    returns: 'Confirmation object'
  },
  {
    name: 'set_site_mode',
    description: 'Switch between public and present mode',
    parameters: [
      {
        name: 'mode',
        type: 'string',
        description: 'Site mode to set',
        required: true,
        options: ['public', 'present']
      }
    ],
    returns: 'Updated mode confirmation'
  },
  {
    name: 'set_present_deck',
    description: 'Set the current step in present mode',
    parameters: [
      {
        name: 'step',
        type: 'string',
        description: 'Present deck step',
        required: true,
        options: ['overview', 'case:mionext', 'case:visionmax', 'case:edge-ai-surveillance', 'webmcp', 'close']
      }
    ],
    returns: 'Updated step confirmation'
  }
];
