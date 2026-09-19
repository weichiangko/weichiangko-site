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
    <section id="webmcp" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            WebMCP Playground
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mb-6">
            This portfolio implements WebMCP tools that both humans and AI agents can use. Test the tools below, or copy the prompt to use with Claude, Grok, or other AI assistants.
          </p>
          <button
            onClick={handleCopyPrompt}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 border-2 border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied!' : 'Copy prompt for AI'}
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Tool Selection & Parameters */}
          <div className="space-y-6">
            {/* Tool Selector */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <label className="block text-sm font-semibold text-gray-900 mb-3">
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent"
              >
                {webmcpTools.map(tool => (
                  <option key={tool.name} value={tool.name}>
                    {tool.name}
                  </option>
                ))}
              </select>
              <p className="mt-2 text-sm text-gray-600">
                {selectedTool.description}
              </p>
            </div>

            {/* Parameters */}
            {selectedTool.parameters.length > 0 && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Parameters
                </label>
                <div className="space-y-4">
                  {selectedTool.parameters.map(param => (
                    <div key={param.name}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {param.name} {param.required && <span className="text-red-500">*</span>}
                      </label>
                      <p className="text-xs text-gray-500 mb-2">{param.description}</p>
                      
                      {param.options ? (
                        <select
                          value={String(parameters[param.name] || '')}
                          onChange={(e) => handleParameterChange(param.name, e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                        >
                          <option value="">Select {param.name}</option>
                          {param.options.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      ) : param.type === 'array' ? (
                        <input
                          type="text"
                          placeholder='["tag1", "tag2"]'
                          value={String(parameters[param.name] || '')}
                          onChange={(e) => handleParameterChange(param.name, e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                        />
                      ) : (
                        <input
                          type="text"
                          placeholder={`Enter ${param.name}`}
                          value={String(parameters[param.name] || '')}
                          onChange={(e) => handleParameterChange(param.name, e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
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
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Play className="w-4 h-4" />
              {isExecuting ? 'Running...' : 'Run'}
            </button>
          </div>

          {/* Right: Result */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 lg:sticky lg:top-6 h-fit">
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Result
            </label>
            {result ? (
              <div className="relative">
                <pre className="bg-gray-50 rounded-lg p-4 text-xs overflow-x-auto">
                  <code>{JSON.stringify(result, null, 2)}</code>
                </pre>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-8 text-center text-gray-500 text-sm">
                Select a tool and click Run to see results
              </div>
            )}
          </div>
        </div>

        {/* Tool List */}
        <div className="mt-12 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Available Tools
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {webmcpTools.map(tool => (
              <div key={tool.name} className="border border-gray-200 rounded-lg p-4">
                <code className="text-sm font-mono text-gray-900">{tool.name}</code>
                <p className="text-xs text-gray-600 mt-1">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
