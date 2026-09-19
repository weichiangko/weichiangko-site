import { caseStudies, getCaseStudy, filterWorkByTags } from '@/data/caseStudies';
import { profileData } from '@/data/profileData';

export interface ToolExecutionResult {
  success: boolean;
  data?: unknown;
  error?: string;
}

// Execute WebMCP tool
export async function executeWebMCPTool(
  toolName: string,
  parameters: Record<string, unknown>
): Promise<ToolExecutionResult> {
  try {
    switch (toolName) {
      case 'get_profile':
        return {
          success: true,
          data: profileData
        };

      case 'list_case_studies':
        return {
          success: true,
          data: caseStudies.map(cs => ({
            slug: cs.slug,
            title: cs.title,
            problemStatement: cs.problemStatement,
            role: cs.role,
            chips: cs.chips
          }))
        };

      case 'get_case_study':
        const slug = parameters.slug as string;
        if (!slug || typeof slug !== 'string') {
          return { success: false, error: 'slug parameter is required' };
        }
        const caseStudy = getCaseStudy(slug);
        if (!caseStudy) {
          return { success: false, error: `Case study with slug "${slug}" not found` };
        }
        return {
          success: true,
          data: caseStudy
        };

      case 'filter_work':
        const tags = parameters.tags as string[];
        if (!Array.isArray(tags)) {
          return { success: false, error: 'tags parameter must be an array' };
        }
        const filtered = filterWorkByTags(tags);
        return {
          success: true,
          data: filtered
        };

      case 'contact_intent':
        const message = parameters.message as string;
        if (!message || typeof message !== 'string') {
          return { success: false, error: 'message parameter is required' };
        }
        return {
          success: true,
          data: {
            message: 'Contact intent recorded',
            received: message,
            timestamp: new Date().toISOString()
          }
        };

      case 'set_site_mode':
        const mode = parameters.mode as string;
        if (!mode || !['public', 'present'].includes(mode)) {
          return { success: false, error: 'mode must be "public" or "present"' };
        }
        return {
          success: true,
          data: {
            message: `Site mode set to ${mode}`,
            mode: mode
          }
        };

      case 'set_present_deck':
        const step = parameters.step as string;
        const validSteps = ['overview', 'case:mionext', 'case:visionmax', 'case:edge-ai-surveillance', 'webmcp', 'close'];
        if (!step || !validSteps.includes(step)) {
          return { success: false, error: `step must be one of: ${validSteps.join(', ')}` };
        }
        return {
          success: true,
          data: {
            message: `Present deck step set to ${step}`,
            step: step
          }
        };

      default:
        return {
          success: false,
          error: `Unknown tool: ${toolName}`
        };
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}
