
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

// Tools data with real AI tools and URLs
export const tools: Tool[] = [
  // Administrative & HRM tools
  {
    id: "tool-1",
    name: "Zoho AI Recruitment",
    description: "AI-powered recruitment platform for talent acquisition and management",
    url: "https://www.zoho.com/recruit/",
    department: "admin-hrm",
    tags: ["Recruitment", "HR", "Candidate Management"],
    usageCount: 78
  },
  {
    id: "tool-2",
    name: "Recruiter AI",
    description: "Smart recruitment assistant for automating hiring workflows",
    url: "https://www.recruiter.com/",
    department: "admin-hrm",
    tags: ["Onboarding", "Documentation", "HR"],
    usageCount: 92
  },
  
  // Sales tools
  {
    id: "tool-3",
    name: "Clay AI",
    description: "Lead enrichment platform for sales intelligence",
    url: "https://www.clay.com/",
    department: "sales",
    tags: ["Leads", "CRM", "Sales"],
    usageCount: 65
  },
  {
    id: "tool-4",
    name: "Seamless AI",
    description: "Contact and lead generation platform for sales teams",
    url: "https://www.seamless.ai/",
    department: "sales",
    tags: ["Leads", "Contact Data", "Sales"],
    usageCount: 58
  },
  {
    id: "tool-5",
    name: "Apollo AI",
    description: "Sales intelligence and engagement platform",
    url: "https://www.apollo.io/",
    department: "sales",
    tags: ["Engagement", "Sales", "Intelligence"],
    usageCount: 72
  },
  
  // Marketing tools
  {
    id: "tool-6",
    name: "HubSpot AI",
    description: "AI-powered marketing automation and CRM platform",
    url: "https://www.hubspot.com/",
    department: "marketing",
    tags: ["Marketing", "Automation", "CRM"],
    usageCount: 84
  },
  {
    id: "tool-7",
    name: "Zapier",
    description: "Workflow automation tool connecting apps and services",
    url: "https://zapier.com/",
    department: "marketing",
    tags: ["Automation", "Integration", "Workflow"],
    usageCount: 91
  },
  {
    id: "tool-8",
    name: "Notion AI",
    description: "AI-enhanced workspace for notes, tasks, and knowledge management",
    url: "https://www.notion.so/",
    department: "marketing",
    tags: ["Content", "Management", "Collaboration"],
    usageCount: 79
  },
  
  // Finance tools
  {
    id: "tool-9",
    name: "Booke AI",
    description: "Automated bookkeeping and financial management",
    url: "https://www.booke.ai/",
    department: "finance",
    tags: ["Bookkeeping", "Finance", "Automation"],
    usageCount: 62
  },
  {
    id: "tool-10",
    name: "Canopy AI",
    description: "Tax resolution software for accounting professionals",
    url: "https://www.canopytax.com/",
    department: "finance",
    tags: ["Tax", "Accounting", "Resolution"],
    usageCount: 53
  },
  {
    id: "tool-11",
    name: "Digits AI",
    description: "Financial management platform with AI insights",
    url: "https://digits.com/",
    department: "finance",
    tags: ["Finance", "Insights", "Management"],
    usageCount: 47
  },
  {
    id: "tool-12",
    name: "Karbon AI",
    description: "Practice management software for accounting firms",
    url: "https://karbonhq.com/",
    department: "finance",
    tags: ["Practice Management", "Accounting", "Workflow"],
    usageCount: 39
  },
  {
    id: "tool-13",
    name: "Keeper AI",
    description: "Tax preparation automation software for accountants",
    url: "https://www.keepertax.com/",
    department: "finance",
    tags: ["Tax", "Automation", "Finance"],
    usageCount: 44
  },
  
  // Support tools
  {
    id: "tool-14",
    name: "Zendesk AI",
    description: "AI-enhanced customer service and engagement platform",
    url: "https://www.zendesk.com/",
    department: "support",
    tags: ["Support", "Customer Service", "Engagement"],
    usageCount: 81
  },
  {
    id: "tool-15",
    name: "Freshworks AI",
    description: "Customer engagement software with AI capabilities",
    url: "https://www.freshworks.com/",
    department: "support",
    tags: ["Customer Support", "Engagement", "Service"],
    usageCount: 73
  },
  
  // Pre-Sales tools
  {
    id: "tool-16",
    name: "Crystal Knows",
    description: "Personality insights platform for improved communication",
    url: "https://www.crystalknows.com/",
    department: "pre-sales",
    tags: ["Personality AI", "Communication", "Sales"],
    usageCount: 57
  },
  {
    id: "tool-17",
    name: "Tact.ai",
    description: "AI-powered sales experience platform",
    url: "https://tact.ai/",
    department: "pre-sales",
    tags: ["Sales Experience", "AI Assistant", "CRM"],
    usageCount: 49
  },
  
  // Business Analyst tools
  {
    id: "tool-18",
    name: "Userstorygenerator AI",
    description: "AI tool for generating user stories and requirements",
    url: "https://www.userstorygenerator.org/",
    department: "business-analyst",
    tags: ["User Stories", "Requirements", "Analysis"],
    usageCount: 67
  },
  {
    id: "tool-19",
    name: "Taskade AI",
    description: "AI-powered project management and collaboration tool",
    url: "https://www.taskade.com/",
    department: "business-analyst",
    tags: ["Project Management", "Collaboration", "AI Assistant"],
    usageCount: 73
  },
  {
    id: "tool-20",
    name: "Scribe AI",
    description: "Automated process documentation tool",
    url: "https://scribehow.com/",
    department: "business-analyst",
    tags: ["Documentation", "Process Mapping", "Workflow"],
    usageCount: 59
  },
  
  // Development tools
  {
    id: "tool-21",
    name: "GitHub Copilot",
    description: "AI pair programmer that offers code suggestions",
    url: "https://github.com/features/copilot",
    department: "development",
    tags: ["Coding", "AI", "Development"],
    usageCount: 95
  },
  {
    id: "tool-22",
    name: "Tabnine",
    description: "AI code completion assistant for multiple languages",
    url: "https://www.tabnine.com/",
    department: "development",
    tags: ["Code Completion", "AI", "Development"],
    usageCount: 82
  },
  {
    id: "tool-23",
    name: "Replit",
    description: "Collaborative browser-based IDE with AI features",
    url: "https://replit.com/",
    department: "development",
    tags: ["IDE", "Collaboration", "Development"],
    usageCount: 78
  },
  {
    id: "tool-24",
    name: "CodeAssist AI",
    description: "AI-powered code assistant for developers",
    url: "https://www.codeassist.io/",
    department: "development",
    tags: ["Code Assistant", "Development", "AI"],
    usageCount: 63
  },
  
  // QA tools
  {
    id: "tool-25",
    name: "LamdaTest",
    description: "Cross-browser testing platform with AI insights",
    url: "https://www.lambdatest.com/",
    department: "qa-testing",
    tags: ["Testing", "Browser Testing", "QA"],
    usageCount: 68
  },
  {
    id: "tool-26",
    name: "TestRigor",
    description: "No-code test automation platform",
    url: "https://testrigor.com/",
    department: "qa-testing",
    tags: ["Test Automation", "No-Code", "QA"],
    usageCount: 61
  },
  {
    id: "tool-27",
    name: "TestCraft",
    description: "AI-powered test automation platform",
    url: "https://www.testcraft.io/",
    department: "qa-testing",
    tags: ["Test Automation", "AI", "QA"],
    usageCount: 54
  },
  
  // Data Science tools
  {
    id: "tool-28",
    name: "Tableau with AI Integrations",
    description: "Data visualization platform with AI capabilities",
    url: "https://www.tableau.com/",
    department: "data-science",
    tags: ["Data Visualization", "Analytics", "Business Intelligence"],
    usageCount: 87
  },
  {
    id: "tool-29",
    name: "Powerdrill AI",
    description: "Advanced analytics platform for big data",
    url: "https://cloud.google.com/bigquery",
    department: "data-science",
    tags: ["Big Data", "Analytics", "Data Science"],
    usageCount: 71
  },
  {
    id: "tool-30",
    name: "Julius AI",
    description: "Financial analytics platform with AI insights",
    url: "https://julius.ai/",
    department: "data-science",
    tags: ["Financial Analytics", "AI", "Data Science"],
    usageCount: 63
  },
  {
    id: "tool-31",
    name: "Power BI Copilot",
    description: "Microsoft's AI assistant for Power BI analytics",
    url: "https://powerbi.microsoft.com/",
    department: "data-science",
    tags: ["Business Intelligence", "Analytics", "Microsoft"],
    usageCount: 76
  },
  
  // Cloud tools
  {
    id: "tool-32",
    name: "AWS AI Services",
    description: "Suite of AI services from Amazon Web Services",
    url: "https://aws.amazon.com/machine-learning/ai-services/",
    department: "cloud",
    tags: ["AWS", "AI Services", "Cloud"],
    usageCount: 89
  },
  {
    id: "tool-33",
    name: "Azure AI",
    description: "Microsoft's AI platform on Azure cloud",
    url: "https://azure.microsoft.com/en-us/solutions/ai/",
    department: "cloud",
    tags: ["Azure", "Microsoft", "AI Services"],
    usageCount: 83
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
