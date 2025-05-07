// Department interface
export interface Department {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

// Tool interface
export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  department: string;
  tags: string[];
  usageCount?: number; // Adding usage tracking
}

// Analytics interface for tracking
export interface AnalyticsData {
  uniqueVisitors: number;
  topTools: Tool[];
  departmentUsage: {
    departmentId: string;
    departmentName: string;
    toolsUsage: {
      toolId: string;
      toolName: string;
      count: number;
    }[];
  }[];
  lastUpdated: string;
}

// Initial analytics data
export const initialAnalyticsData: AnalyticsData = {
  uniqueVisitors: 145,
  topTools: [],
  departmentUsage: [],
  lastUpdated: new Date().toISOString()
};

// Departments data
export const departments: Department[] = [
  {
    id: "admin-hrm",
    name: "Administrative & HRM",
    description: "Internal tools replacing Zoho AI Recruitment and Recruiter AI for HR processes",
    icon: "building",
    color: "text-blue-500 bg-blue-100 dark:bg-blue-900 dark:text-blue-300"
  },
  {
    id: "sales",
    name: "Sales",
    description: "CRM and lead generation tools replacing Clay AI, Seamless AI, and Apollo AI",
    icon: "trending-up",
    color: "text-green-500 bg-green-100 dark:bg-green-900 dark:text-green-300"
  },
  {
    id: "marketing",
    name: "Marketing",
    description: "Marketing automation replacing HubSpot AI, Zapier, and Notion AI",
    icon: "megaphone",
    color: "text-purple-500 bg-purple-100 dark:bg-purple-900 dark:text-purple-300"
  },
  {
    id: "finance",
    name: "Finance & Accountants",
    description: "Financial tools replacing Booke AI, Canopy AI, Digits AI, Karbon AI, and Keeper AI",
    icon: "dollar-sign",
    color: "text-emerald-500 bg-emerald-100 dark:bg-emerald-900 dark:text-emerald-300"
  },
  {
    id: "support",
    name: "Technical Support / Customer Support",
    description: "Internal support tools replacing Zendesk AI and Freshworks AI",
    icon: "help-circle",
    color: "text-yellow-500 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300"
  },
  {
    id: "pre-sales",
    name: "Pre-Sales / Solutions Architecture",
    description: "Client-focused solutions replacing Crystal Knows and Tact.ai",
    icon: "puzzle",
    color: "text-orange-500 bg-orange-100 dark:bg-orange-900 dark:text-orange-300"
  },
  {
    id: "business-analyst",
    name: "Business Analyst",
    description: "Data analysis tools replacing Userstorygenerator AI, Taskade AI, and Scribe AI",
    icon: "bar-chart-2",
    color: "text-red-500 bg-red-100 dark:bg-red-900 dark:text-red-300"
  },
  {
    id: "development",
    name: "Software Development",
    description: "Developer tools replacing GitHub Copilot, Tabnine, Replit, and CodeAssist AI",
    icon: "code",
    color: "text-indigo-500 bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-300"
  },
  {
    id: "qa-testing",
    name: "QA / Testing",
    description: "Testing automation replacing LamdaTest, TestRigor, and TestCraft",
    icon: "check-circle",
    color: "text-pink-500 bg-pink-100 dark:bg-pink-900 dark:text-pink-300"
  },
  {
    id: "data-science",
    name: "Data Scientists & Analysts",
    description: "Data platforms replacing Tableau AI, Powerdrill AI, Julius AI, and Power BI Copilot",
    icon: "database",
    color: "text-cyan-500 bg-cyan-100 dark:bg-cyan-900 dark:text-cyan-300"
  },
  {
    id: "cloud",
    name: "Cloud Engineering",
    description: "Cloud management tools replacing AWS AI and Azure AI",
    icon: "cloud",
    color: "text-sky-500 bg-sky-100 dark:bg-sky-900 dark:text-sky-300"
  }
];

// Tools data with predefined IDs instead of dynamic generation
export const tools: Tool[] = [
  // Administrative & HRM tools
  {
    id: "tool-1",
    name: "Spritle Recruit",
    description: "Internal recruitment and candidate management replacing Zoho AI Recruitment",
    url: "https://spritle.com/products/spritle-recruit",
    department: "admin-hrm",
    tags: ["Recruitment", "HR", "Candidate Management"],
    usageCount: 78
  },
  {
    id: "tool-2",
    name: "HR Assistant",
    description: "AI-powered employee onboarding and documentation assistant",
    url: "https://spritle.com/products/hr-assistant",
    department: "admin-hrm",
    tags: ["Onboarding", "Documentation", "HR"],
    usageCount: 92
  },
  
  // Sales tools
  {
    id: "tool-3",
    name: "Spritle Leads",
    description: "Internal lead generation and enrichment platform replacing Clay AI",
    url: "https://example.com/tool3",
    department: "sales",
    tags: ["Leads", "CRM", "Sales"]
  },
  {
    id: "tool-4",
    name: "Sales Predictor",
    description: "Sales forecasting and pipeline management replacing Apollo AI",
    url: "https://example.com/tool4",
    department: "sales",
    tags: ["Forecasting", "Pipeline", "Analytics"]
  },
  
  // Marketing tools
  {
    id: "tool-5",
    name: "Campaign Manager",
    description: "Marketing campaign automation and analysis replacing HubSpot AI",
    url: "https://example.com/tool5",
    department: "marketing",
    tags: ["Campaigns", "Automation", "Analytics"]
  },
  {
    id: "tool-6",
    name: "Content Generator",
    description: "AI-powered content creation and optimization for marketing",
    url: "https://example.com/tool6",
    department: "marketing",
    tags: ["Content", "SEO", "Copywriting"]
  },
  
  // Finance tools
  {
    id: "tool-7",
    name: "Finance Assistant",
    description: "Automated bookkeeping and financial reporting replacing Booke AI",
    url: "https://example.com/tool7",
    department: "finance",
    tags: ["Bookkeeping", "Reporting", "Finance"]
  },
  {
    id: "tool-8",
    name: "Tax Helper",
    description: "Tax preparation and compliance tool replacing Keeper AI",
    url: "https://example.com/tool8",
    department: "finance",
    tags: ["Tax", "Compliance", "Finance"]
  },
  
  // Support tools
  {
    id: "tool-9",
    name: "Support Bot",
    description: "Customer support automation replacing Zendesk AI",
    url: "https://example.com/tool9",
    department: "support",
    tags: ["Support", "Automation", "Customer Service"]
  },
  {
    id: "tool-10",
    name: "Ticket Analyzer",
    description: "Support ticket classification and prioritization",
    url: "https://example.com/tool10",
    department: "support",
    tags: ["Tickets", "Analysis", "Support"]
  },
  
  // Pre-Sales tools
  {
    id: "tool-11",
    name: "Client Insights",
    description: "Client personality and preference analysis replacing Crystal Knows",
    url: "https://example.com/tool11",
    department: "pre-sales",
    tags: ["Client Analysis", "Insights", "Sales"]
  },
  {
    id: "tool-12",
    name: "Solution Builder",
    description: "Automated solution architecture and proposal generation",
    url: "https://example.com/tool12",
    department: "pre-sales",
    tags: ["Proposals", "Architecture", "Pre-Sales"]
  },
  
  // Business Analyst tools
  {
    id: "tool-13",
    name: "User Story Creator",
    description: "Automated user story generation replacing Userstorygenerator AI",
    url: "https://example.com/tool13",
    department: "business-analyst",
    tags: ["User Stories", "Requirements", "Analysis"]
  },
  {
    id: "tool-14",
    name: "Process Mapper",
    description: "Business process documentation and analysis replacing Scribe AI",
    url: "https://example.com/tool14",
    department: "business-analyst",
    tags: ["Process Mapping", "Documentation", "Analysis"]
  },
  
  // Development tools
  {
    id: "tool-15",
    name: "Code Assistant",
    description: "Code completion and suggestion tool replacing GitHub Copilot",
    url: "https://example.com/tool15",
    department: "development",
    tags: ["Coding", "AI", "Development"]
  },
  {
    id: "tool-16",
    name: "Code Reviewer",
    description: "Automated code review and quality assurance",
    url: "https://example.com/tool16",
    department: "development",
    tags: ["Code Review", "Quality", "Development"]
  },
  
  // QA tools
  {
    id: "tool-17",
    name: "Test Generator",
    description: "Automated test case generation replacing TestRigor",
    url: "https://example.com/tool17",
    department: "qa-testing",
    tags: ["Testing", "Automation", "QA"]
  },
  {
    id: "tool-18",
    name: "Bug Predictor",
    description: "AI-powered bug prediction and prevention",
    url: "https://example.com/tool18",
    department: "qa-testing",
    tags: ["Bug Detection", "Prevention", "QA"]
  },
  
  // Data Science tools
  {
    id: "tool-19",
    name: "Data Visualizer",
    description: "Advanced data visualization platform replacing Tableau AI",
    url: "https://example.com/tool19",
    department: "data-science",
    tags: ["Visualization", "Analytics", "Data"]
  },
  {
    id: "tool-20",
    name: "Insight Generator",
    description: "Automated data insights and reporting replacing Power BI Copilot",
    url: "https://example.com/tool20",
    department: "data-science",
    tags: ["Insights", "Reporting", "Analytics"]
  },
  
  // Cloud tools
  {
    id: "tool-21",
    name: "Cloud Optimizer",
    description: "AI-driven cloud resource optimization replacing AWS AI",
    url: "https://example.com/tool21",
    department: "cloud",
    tags: ["Optimization", "Cloud", "Resources"]
  },
  {
    id: "tool-22",
    name: "Security Analyzer",
    description: "Cloud security posture management and analysis",
    url: "https://example.com/tool22",
    department: "cloud",
    tags: ["Security", "Analysis", "Cloud"]
  }
];

// Function to track tool usage
export const incrementToolUsage = (toolId: string): void => {
  const tool = tools.find(t => t.id === toolId);
  if (tool) {
    tool.usageCount = (tool.usageCount || 0) + 1;
    
    // Update localStorage to persist the data
    localStorage.setItem('toolUsage', JSON.stringify(
      tools.map(t => ({ id: t.id, count: t.usageCount || 0 }))
    ));
    
    // Update last activity timestamp
    localStorage.setItem('lastAnalyticsUpdate', new Date().toISOString());
  }
};

// Function to get top used tools
export const getTopTools = (count: number = 3): Tool[] => {
  return [...tools]
    .sort((a, b) => (b.usageCount || 0) - (a.usageCount || 0))
    .slice(0, count);
};

// Function to get usage by department
export const getUsageByDepartment = () => {
  const departmentUsage = departments.map(dept => {
    const deptTools = tools.filter(tool => tool.department === dept.id);
    
    return {
      departmentId: dept.id,
      departmentName: dept.name,
      toolsUsage: deptTools.map(tool => ({
        toolId: tool.id,
        toolName: tool.name,
        count: tool.usageCount || 0
      }))
    };
  });
  
  return departmentUsage;
};

// Function to verify all tool links are valid
export const verifyLinks = async (): Promise<{valid: string[], invalid: string[]}> => {
  const validLinks: string[] = [];
  const invalidLinks: string[] = [];
  
  // In a real implementation this would make actual HTTP requests
  // For demo purposes, we'll just simulate some invalid links
  const simulatedInvalidToolIds = ['tool-10', 'tool-18'];
  
  for (const tool of tools) {
    if (simulatedInvalidToolIds.includes(tool.id)) {
      invalidLinks.push(tool.id);
    } else {
      validLinks.push(tool.id);
    }
  }
  
  return { valid: validLinks, invalid: invalidLinks };
};
