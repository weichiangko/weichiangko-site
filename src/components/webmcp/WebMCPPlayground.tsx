'use client';

import { useState } from 'react';
import { Play, Copy, Check } from 'lucide-react';
import { webmcpTools } from '@/lib/webmcp-tools';
import { executeWebMCPTool } from '@/lib/webmcp-executor';

export default function WebMCPPlayground() {
  const [selectedTool, setSelectedTool] = useState(webmcpTools[0]);
  const [parameters, setParameters] = useState<Record<string, unknown>>({});
  const [result, setResult] = useState<unknown>(null);
  const [isExecuting, setIsExecuting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleExecute = async () => {
    setIsExecuting(true);
    setResult(null);
    
    try {
      const executionResult = await executeWebMCPTool(selectedTool.name, parameters);
      setResult(executionResult);
    } catch (error) {
      setResult({
        success: false,
        error: error instanceof Error ? error.message : 'Execution failed'
      });
    } finally {
      setIsExecuting(false);
    }
  };

  const handleCopyPrompt = () => {
    const prompt = `Open https://weichiangko.vercel.app/#webmcp. Available tools: get_profile, list_case_studies, get_case_study(slug), filter_work(tags), contact_intent(message), set_site_mode(mode), set_present_deck(step). Start with list_case_studies. If interviewing, call set_site_mode("present") then set_present_deck("overview").`;
    
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleParameterChange = (paramName: string, value: unknown) => {
    setParameters(prev => ({
      ...prev,
      [paramName]: value
    }));
  };

  return (
    <section id="webmcp" className="py-24 md:py-32 px-6">
      <div className="max-w-[960px] mx-auto">
        {/* Section Header */}
        <div className="mb-12 max-w-[720px]">
          <h2 className="mb-6">
            WebMCP Playground
          </h2>
          <p className="text-fg-muted mb-6">
            This portfolio implements WebMCP tools that both humans and AI agents can use. Test the tools below, or copy the prompt to use with Claude, Grok, or other AI assistants.
          </p>
          <button
            onClick={handleCopyPrompt}
            className="inline-flex items-center gap-2 px-4 py-2 bg-bg-elevated border border-border rounded-lg text-sm font-medium hover:border-accent transition-colors duration-150"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied!' : 'Copy prompt for AI'}
          </button>
        </div>

        {/* Toolbench Surface */}
        <div className="bg-bg-elevated border border-border rounded-lg p-6 md:p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Tool Selection & Parameters */}
            <div className="space-y-6">
              {/* Tool Selector */}
              <div>
                <label className="block text-sm font-semibold mb-3">
                  Select Tool
                </label>
                <select
                  value={selectedTool.name}
                  onChange={(e) => {
                    const tool = webmcpTools.find(t => t.name === e.target.value);
                    if (tool) {
                      setSelectedTool(tool);
                      setParameters({});
                      setResult(null);
                    }
                  }}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/20"
                >
                  {webmcpTools.map((tool) => (
                    <option key={tool.name} value={tool.name}>
                      {tool.name}
                    </option>
                  ))}
                </select>
                <p className="mt-2 text-sm text-fg-muted">
                  {selectedTool.description}
                </p>
              </div>

              {/* Parameters */}
              {selectedTool.parameters.length > 0 && (
                <div>
                  <label className="block text-sm font-semibold mb-3">
                    Parameters
                  </label>
                  <div className="space-y-3">
                    {selectedTool.parameters.map((param) => (
                      <div key={param.name}>
                        <label className="block text-xs text-fg-muted mb-1">
                          {param.name}
                          {param.required && <span className="text-accent ml-1">*</span>}
                        </label>
                        {param.options ? (
                          <select
                            value={String(parameters[param.name] || '')}
                            onChange={(e) => handleParameterChange(param.name, e.target.value)}
                            className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/20"
                          >
                            <option value="">Select {param.name}</option>
                            {param.options.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        ) : param.type === 'array' ? (
                          <input
                            type="text"
                            placeholder='["tag1", "tag2"]'
                            value={String(parameters[param.name] || '')}
                            onChange={(e) => handleParameterChange(param.name, e.target.value)}
                            className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-accent/20"
                          />
                        ) : (
                          <input
                            type="text"
                            placeholder={`Enter ${param.name}`}
                            value={String(parameters[param.name] || '')}
                            onChange={(e) => handleParameterChange(param.name, e.target.value)}
                            className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/20"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Run Button */}
              <button
                onClick={handleExecute}
                disabled={isExecuting}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity duration-150 disabled:opacity-50"
              >
                <Play className="w-4 h-4" />
                {isExecuting ? 'Running...' : 'Run'}
              </button>
            </div>

            {/* Right: Result */}
            <div>
              <label className="block text-sm font-semibold mb-3">
                Result
              </label>
              <pre className="bg-background border border-border rounded-lg p-4 text-xs font-mono overflow-auto max-h-96 whitespace-pre-wrap break-words">
                {result ? JSON.stringify(result, null, 2) : 'Click "Run" to execute the tool'}
              </pre>
            </div>
          </div>

          {/* Tool List */}
          <div className="mt-8 pt-8 border-t border-border">
            <h3 className="text-sm font-semibold mb-4">
              Available Tools
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {webmcpTools.map((tool) => (
                <button
                  key={tool.name}
                  onClick={() => {
                    setSelectedTool(tool);
                    setParameters({});
                    setResult(null);
                  }}
                  className="text-left border border-border rounded-lg p-3 hover:border-accent transition-colors duration-150"
                >
                  <code className="text-xs font-mono">{tool.name}</code>
                  <p className="text-xs text-fg-muted mt-1 line-clamp-2">{tool.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
