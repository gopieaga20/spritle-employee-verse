
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
    description: "HR process automation and recruiting tools",
    icon: "building",
    color: "text-blue-500 bg-blue-100 dark:bg-blue-900 dark:text-blue-300"
  },
  {
    id: "sales",
    name: "Sales",
    description: "CRM and lead generation tools",
    icon: "trending-up",
    color: "text-green-500 bg-green-100 dark:bg-green-900 dark:text-green-300"
  },
  {
    id: "marketing",
    name: "Marketing",
    description: "Marketing automation and content management tools",
    icon: "megaphone",
    color: "text-purple-500 bg-purple-100 dark:bg-purple-900 dark:text-purple-300"
  },
  {
    id: "finance",
    name: "Finance & Accountants",
    description: "Financial tools for accounting and bookkeeping",
    icon: "dollar-sign",
    color: "text-emerald-500 bg-emerald-100 dark:bg-emerald-900 dark:text-emerald-300"
  },
  {
    id: "support",
    name: "Technical Support / Customer Support",
    description: "Support tools for customer engagement",
    icon: "help-circle",
    color: "text-yellow-500 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300"
  },
  {
    id: "pre-sales",
    name: "Pre-Sales / Solutions Architecture",
    description: "Client-focused solution tools for pre-sales",
    icon: "puzzle",
    color: "text-orange-500 bg-orange-100 dark:bg-orange-900 dark:text-orange-300"
  },
  {
    id: "business-analyst",
    name: "Business Analyst",
    description: "Tools for business analysis and requirements gathering",
    icon: "bar-chart-2",
    color: "text-red-500 bg-red-100 dark:bg-red-900 dark:text-red-300"
  },
  {
    id: "development",
    name: "Software Development",
    description: "Developer tools and coding assistants",
    icon: "code",
    color: "text-indigo-500 bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-300"
  },
  {
    id: "qa-testing",
    name: "QA / Testing",
    description: "Quality assurance and automated testing tools",
    icon: "check-circle",
    color: "text-pink-500 bg-pink-100 dark:bg-pink-900 dark:text-pink-300"
  },
  {
    id: "data-science",
    name: "Data Scientists & Analysts",
    description: "Data analytics and BI platforms",
    icon: "database",
    color: "text-cyan-500 bg-cyan-100 dark:bg-cyan-900 dark:text-cyan-300"
  },
  {
    id: "cloud",
    name: "Cloud Engineering",
    description: "Cloud infrastructure and management tools",
    icon: "cloud",
    color: "text-sky-500 bg-sky-100 dark:bg-sky-900 dark:text-sky-300"
  }
];

// Tools data with updated AI tools based on the provided image
export const tools: Tool[] = [
  // Administrative & HRM tools
  {
    id: "tool-1",
    name: "Zoho AI Recruitment",
    description: "AI-powered recruitment platform for talent acquisition and management",
    url: "https://www.zoho.com/recruit/",
    department: "admin-hrm",
    tags: ["Recruitment", "HR", "Talent Acquisition"],
    usageCount: 78
  },
  {
    id: "tool-2",
    name: "Recruiter AI",
    description: "Smart recruitment assistant for automating hiring workflows",
    url: "https://www.recruiter.com/",
    department: "admin-hrm",
    tags: ["Recruitment", "HR", "Hiring"],
    usageCount: 92
  },
  {
    id: "tool-3",
    name: "HireVue",
    description: "AI-driven hiring and interviewing platform",
    url: "https://www.hirevue.com/",
    department: "admin-hrm",
    tags: ["Interviews", "HR", "Recruitment"],
    usageCount: 65
  },
  {
    id: "tool-4",
    name: "Pymetrics",
    description: "Behavioral science-based recruiting tools",
    url: "https://www.pymetrics.ai/",
    department: "admin-hrm",
    tags: ["Assessment", "HR", "Recruitment"],
    usageCount: 58
  },
  {
    id: "tool-5",
    name: "Fetcher",
    description: "AI-powered talent acquisition platform",
    url: "https://fetcher.ai/",
    department: "admin-hrm",
    tags: ["Sourcing", "HR", "Recruitment"],
    usageCount: 62
  },
  {
    id: "tool-6",
    name: "Notion AI",
    description: "AI-enhanced workspace for HR documentation and knowledge management",
    url: "https://www.notion.so/product/ai",
    department: "admin-hrm",
    tags: ["Documentation", "Knowledge Base", "HR"],
    usageCount: 76
  },
  
  // Sales tools
  {
    id: "tool-7",
    name: "Clay AI",
    description: "Lead enrichment platform for sales intelligence",
    url: "https://www.clay.com/",
    department: "sales",
    tags: ["Leads", "CRM", "Sales"],
    usageCount: 65
  },
  {
    id: "tool-8",
    name: "Seamless AI",
    description: "Contact and lead generation platform for sales teams",
    url: "https://www.seamless.ai/",
    department: "sales",
    tags: ["Leads", "Contact Data", "Sales"],
    usageCount: 58
  },
  {
    id: "tool-9",
    name: "Apollo AI",
    description: "Sales intelligence and engagement platform",
    url: "https://www.apollo.io/",
    department: "sales",
    tags: ["Engagement", "Sales", "Intelligence"],
    usageCount: 72
  },
  {
    id: "tool-10",
    name: "HubSpot",
    description: "CRM platform with sales, marketing, and service hubs",
    url: "https://www.hubspot.com/",
    department: "sales",
    tags: ["CRM", "Sales", "Marketing"],
    usageCount: 84
  },
  {
    id: "tool-11",
    name: "Jasper AI",
    description: "AI writing assistant for sales communications",
    url: "https://www.jasper.ai/",
    department: "sales",
    tags: ["Content", "Writing", "Sales"],
    usageCount: 67
  },
  {
    id: "tool-12",
    name: "Copy.ai",
    description: "AI copywriting tool for sales messaging",
    url: "https://www.copy.ai/",
    department: "sales",
    tags: ["Copywriting", "Sales", "Content"],
    usageCount: 59
  },
  
  // Marketing tools
  {
    id: "tool-13",
    name: "HubSpot AI",
    description: "AI-powered marketing automation and CRM platform",
    url: "https://www.hubspot.com/products/marketing",
    department: "marketing",
    tags: ["Marketing", "Automation", "CRM"],
    usageCount: 84
  },
  {
    id: "tool-14",
    name: "Zapier",
    description: "Workflow automation tool connecting apps and services",
    url: "https://zapier.com/",
    department: "marketing",
    tags: ["Automation", "Integration", "Workflow"],
    usageCount: 91
  },
  {
    id: "tool-15",
    name: "Notion AI",
    description: "AI-enhanced workspace for notes, tasks, and knowledge management",
    url: "https://www.notion.so/product/ai",
    department: "marketing",
    tags: ["Content", "Management", "Collaboration"],
    usageCount: 79
  },
  {
    id: "tool-16",
    name: "Funnel.io",
    description: "Marketing data collection and visualization platform",
    url: "https://funnel.io/",
    department: "marketing",
    tags: ["Analytics", "Data", "Marketing"],
    usageCount: 72
  },
  {
    id: "tool-17",
    name: "PaveAI",
    description: "Marketing analytics automation platform",
    url: "https://www.paveai.com/",
    department: "marketing",
    tags: ["Analytics", "Marketing", "Automation"],
    usageCount: 68
  },
  {
    id: "tool-18",
    name: "Windsor.ai",
    description: "Marketing attribution and data integration platform",
    url: "https://windsor.ai/",
    department: "marketing",
    tags: ["Attribution", "Integration", "Marketing"],
    usageCount: 63
  },
  
  // Finance tools
  {
    id: "tool-19",
    name: "Booke AI",
    description: "Automated bookkeeping and financial management",
    url: "https://www.booke.ai/",
    department: "finance",
    tags: ["Bookkeeping", "Finance", "Automation"],
    usageCount: 62
  },
  {
    id: "tool-20",
    name: "Canopy AI",
    description: "Tax resolution software for accounting professionals",
    url: "https://www.canopytax.com/",
    department: "finance",
    tags: ["Tax", "Accounting", "Resolution"],
    usageCount: 53
  },
  {
    id: "tool-21",
    name: "Digits AI",
    description: "Financial management platform with AI insights",
    url: "https://digits.com/",
    department: "finance",
    tags: ["Finance", "Insights", "Management"],
    usageCount: 47
  },
  {
    id: "tool-22",
    name: "Karbon AI",
    description: "Practice management software for accounting firms",
    url: "https://karbonhq.com/",
    department: "finance",
    tags: ["Practice Management", "Accounting", "Workflow"],
    usageCount: 39
  },
  {
    id: "tool-23",
    name: "Keeper AI",
    description: "Tax preparation automation software for accountants",
    url: "https://www.keepertax.com/",
    department: "finance",
    tags: ["Tax", "Automation", "Finance"],
    usageCount: 44
  },
  {
    id: "tool-24",
    name: "Zebra AI",
    description: "AI-powered insurance and financial data analysis",
    url: "https://www.zebra.com/us/en/about-zebra/zebra-analytics.html",
    department: "finance",
    tags: ["Insurance", "Analysis", "Finance"],
    usageCount: 41
  },
  {
    id: "tool-25",
    name: "Flogast AI",
    description: "Financial forecasting and budgeting platform",
    url: "https://flogast.com/",
    department: "finance",
    tags: ["Forecasting", "Budgeting", "Finance"],
    usageCount: 38
  },
  {
    id: "tool-26",
    name: "Numra",
    description: "AI-powered financial data processing and insights",
    url: "https://numra.io/",
    department: "finance",
    tags: ["Data Processing", "Finance", "Insights"],
    usageCount: 35
  },
  
  // Support tools
  {
    id: "tool-27",
    name: "Zendesk",
    description: "Customer service and engagement platform",
    url: "https://www.zendesk.com/",
    department: "support",
    tags: ["Support", "Customer Service", "Engagement"],
    usageCount: 81
  },
  {
    id: "tool-28",
    name: "Freshworks with AI",
    description: "Customer engagement software with AI capabilities",
    url: "https://www.freshworks.com/",
    department: "support",
    tags: ["Customer Support", "Engagement", "Service"],
    usageCount: 73
  },
  {
    id: "tool-29",
    name: "Tidio",
    description: "AI chatbot and live chat platform for customer support",
    url: "https://www.tidio.com/",
    department: "support",
    tags: ["Chatbot", "Live Chat", "Support"],
    usageCount: 67
  },
  {
    id: "tool-30",
    name: "Kustomer (Meta)",
    description: "CRM platform for customer service teams",
    url: "https://www.kustomer.com/",
    department: "support",
    tags: ["CRM", "Customer Service", "Support"],
    usageCount: 62
  },
  {
    id: "tool-31",
    name: "Intercom (Fin AI)",
    description: "Customer messaging platform with AI capabilities",
    url: "https://www.intercom.com/",
    department: "support",
    tags: ["Messaging", "Customer Service", "AI"],
    usageCount: 58
  },
  {
    id: "tool-32",
    name: "HubSpot Service Hub",
    description: "Customer service software and ticketing system",
    url: "https://www.hubspot.com/products/service",
    department: "support",
    tags: ["Ticketing", "Customer Service", "Support"],
    usageCount: 55
  },
  {
    id: "tool-33",
    name: "HappyFox",
    description: "Help desk and customer support software",
    url: "https://www.happyfox.com/",
    department: "support",
    tags: ["Help Desk", "Ticketing", "Support"],
    usageCount: 51
  },
  {
    id: "tool-34",
    name: "Tenyx",
    description: "AI-powered voice assistant for customer support",
    url: "https://www.tenyx.com/",
    department: "support",
    tags: ["Voice AI", "Customer Support", "Assistance"],
    usageCount: 48
  },
  {
    id: "tool-35",
    name: "Cresta AI",
    description: "Real-time coaching platform for support agents",
    url: "https://cresta.com/",
    department: "support",
    tags: ["Coaching", "Real-time", "Support"],
    usageCount: 45
  },
  {
    id: "tool-36",
    name: "Chorus.ai",
    description: "Conversation analytics platform for customer interactions",
    url: "https://www.chorus.ai/",
    department: "support",
    tags: ["Analytics", "Conversations", "Support"],
    usageCount: 42
  },
  
  // Pre-Sales tools
  {
    id: "tool-37",
    name: "Crystal Knows",
    description: "Personality insights platform for improved communication",
    url: "https://www.crystalknows.com/",
    department: "pre-sales",
    tags: ["Personality AI", "Communication", "Sales"],
    usageCount: 57
  },
  {
    id: "tool-38",
    name: "Tact.ai",
    description: "AI-powered sales experience platform",
    url: "https://tact.ai/",
    department: "pre-sales",
    tags: ["Sales Experience", "AI Assistant", "CRM"],
    usageCount: 49
  },
  {
    id: "tool-39",
    name: "Chorus.ai",
    description: "Conversation intelligence platform for sales calls",
    url: "https://www.chorus.ai/",
    department: "pre-sales",
    tags: ["Conversation Intelligence", "Sales", "Analysis"],
    usageCount: 45
  },
  {
    id: "tool-40",
    name: "Vivun",
    description: "PreSales management and intelligence platform",
    url: "https://www.vivun.com/",
    department: "pre-sales",
    tags: ["PreSales", "Management", "Intelligence"],
    usageCount: 42
  },
  {
    id: "tool-41",
    name: "Presales.ai",
    description: "AI platform for presales engineers and solution architects",
    url: "https://www.presales.ai/",
    department: "pre-sales",
    tags: ["PreSales", "Solutions", "Engineering"],
    usageCount: 39
  },
  {
    id: "tool-42",
    name: "RFPIO",
    description: "Response management software for RFPs and proposals",
    url: "https://www.rfpio.com/",
    department: "pre-sales",
    tags: ["RFP", "Proposals", "Response Management"],
    usageCount: 36
  },
  {
    id: "tool-43",
    name: "Qvidian (Upland)",
    description: "Proposal automation and RFP response software",
    url: "https://uplandsoftware.com/qvidian/",
    department: "pre-sales",
    tags: ["Proposals", "RFP", "Automation"],
    usageCount: 33
  },
  {
    id: "tool-44",
    name: "Demostack",
    description: "Demo environment platform for sales teams",
    url: "https://www.demostack.com/",
    department: "pre-sales",
    tags: ["Demos", "Sales", "Presentations"],
    usageCount: 30
  },
  
  // Business Analyst tools
  {
    id: "tool-45",
    name: "Userstorygenerator AI",
    description: "AI tool for generating user stories and requirements",
    url: "https://www.userstorygenerator.org/",
    department: "business-analyst",
    tags: ["User Stories", "Requirements", "Analysis"],
    usageCount: 67
  },
  {
    id: "tool-46",
    name: "Taskade AI",
    description: "AI-powered project management and collaboration tool",
    url: "https://www.taskade.com/",
    department: "business-analyst",
    tags: ["Project Management", "Collaboration", "AI Assistant"],
    usageCount: 73
  },
  {
    id: "tool-47",
    name: "Scribe AI",
    description: "Automated process documentation tool",
    url: "https://scribehow.com/",
    department: "business-analyst",
    tags: ["Documentation", "Process Mapping", "Workflow"],
    usageCount: 59
  },
  {
    id: "tool-48",
    name: "Celonis",
    description: "Process mining and business process intelligence platform",
    url: "https://www.celonis.com/",
    department: "business-analyst",
    tags: ["Process Mining", "Intelligence", "Analysis"],
    usageCount: 55
  },
  {
    id: "tool-49",
    name: "AlphaSense",
    description: "AI-powered market intelligence and search platform",
    url: "https://www.alpha-sense.com/",
    department: "business-analyst",
    tags: ["Market Intelligence", "Research", "Analysis"],
    usageCount: 51
  },
  {
    id: "tool-50",
    name: "Tellius",
    description: "AI-powered decision intelligence platform",
    url: "https://www.tellius.com/",
    department: "business-analyst",
    tags: ["Decision Intelligence", "Analytics", "Insights"],
    usageCount: 47
  },
  
  // Development tools
  {
    id: "tool-51",
    name: "GitHub Copilot",
    description: "AI pair programmer that offers code suggestions",
    url: "https://github.com/features/copilot",
    department: "development",
    tags: ["Coding", "AI", "Development"],
    usageCount: 95
  },
  {
    id: "tool-52",
    name: "Tabnine",
    description: "AI code completion assistant for multiple languages",
    url: "https://www.tabnine.com/",
    department: "development",
    tags: ["Code Completion", "AI", "Development"],
    usageCount: 82
  },
  {
    id: "tool-53",
    name: "Replit",
    description: "Collaborative browser-based IDE with AI features",
    url: "https://replit.com/",
    department: "development",
    tags: ["IDE", "Collaboration", "Development"],
    usageCount: 78
  },
  {
    id: "tool-54",
    name: "CodeAssist AI",
    description: "AI-powered code assistant for developers",
    url: "https://www.codeassist.io/",
    department: "development",
    tags: ["Code Assistant", "Development", "AI"],
    usageCount: 63
  },
  {
    id: "tool-55",
    name: "Amazon CodeWhisperer",
    description: "AI coding companion from AWS",
    url: "https://aws.amazon.com/codewhisperer/",
    department: "development",
    tags: ["Code Generation", "AWS", "Development"],
    usageCount: 60
  },
  {
    id: "tool-56",
    name: "DeepCode",
    description: "AI-powered semantic code analysis",
    url: "https://www.deepcode.ai/",
    department: "development",
    tags: ["Code Analysis", "Security", "Development"],
    usageCount: 57
  },
  {
    id: "tool-57",
    name: "Codeium",
    description: "AI coding assistant with context-aware completions",
    url: "https://codeium.com/",
    department: "development",
    tags: ["Code Completion", "Development", "AI"],
    usageCount: 54
  },
  
  // QA tools
  {
    id: "tool-58",
    name: "LamdaTest",
    description: "Cross-browser testing platform with AI insights",
    url: "https://www.lambdatest.com/",
    department: "qa-testing",
    tags: ["Testing", "Browser Testing", "QA"],
    usageCount: 68
  },
  {
    id: "tool-59",
    name: "TestRigor",
    description: "No-code test automation platform",
    url: "https://testrigor.com/",
    department: "qa-testing",
    tags: ["Test Automation", "No-Code", "QA"],
    usageCount: 61
  },
  {
    id: "tool-60",
    name: "TestCraft",
    description: "AI-powered test automation platform",
    url: "https://www.testcraft.io/",
    department: "qa-testing",
    tags: ["Test Automation", "AI", "QA"],
    usageCount: 54
  },
  {
    id: "tool-61",
    name: "TestSigma",
    description: "AI-driven test automation platform",
    url: "https://testsigma.com/",
    department: "qa-testing",
    tags: ["Test Automation", "AI", "QA"],
    usageCount: 51
  },
  {
    id: "tool-62",
    name: "Functionize",
    description: "Intelligent test automation platform",
    url: "https://www.functionize.com/",
    department: "qa-testing",
    tags: ["Test Automation", "AI", "QA"],
    usageCount: 48
  },
  {
    id: "tool-63",
    name: "Testim",
    description: "AI-powered test automation for web applications",
    url: "https://www.testim.io/",
    department: "qa-testing",
    tags: ["Test Automation", "Web", "QA"],
    usageCount: 45
  },
  {
    id: "tool-64",
    name: "Katalon",
    description: "All-in-one test automation solution",
    url: "https://katalon.com/",
    department: "qa-testing",
    tags: ["Test Automation", "All-in-One", "QA"],
    usageCount: 42
  },
  
  // Data Science tools
  {
    id: "tool-65",
    name: "Tableau with AI integrations",
    description: "Data visualization platform with AI capabilities",
    url: "https://www.tableau.com/",
    department: "data-science",
    tags: ["Data Visualization", "Analytics", "Business Intelligence"],
    usageCount: 87
  },
  {
    id: "tool-66",
    name: "Powerdrill AI",
    description: "Advanced analytics platform for big data",
    url: "https://cloud.google.com/bigquery",
    department: "data-science",
    tags: ["Big Data", "Analytics", "Data Science"],
    usageCount: 71
  },
  {
    id: "tool-67",
    name: "Julius AI",
    description: "Financial analytics platform with AI insights",
    url: "https://julius.ai/",
    department: "data-science",
    tags: ["Financial Analytics", "AI", "Data Science"],
    usageCount: 63
  },
  {
    id: "tool-68",
    name: "Power BI (Copilot)",
    description: "Microsoft's AI assistant for Power BI analytics",
    url: "https://powerbi.microsoft.com/",
    department: "data-science",
    tags: ["Business Intelligence", "Analytics", "Microsoft"],
    usageCount: 76
  },
  {
    id: "tool-69",
    name: "H2O.ai",
    description: "Open-source machine learning platform",
    url: "https://h2o.ai/",
    department: "data-science",
    tags: ["Machine Learning", "Open Source", "Data Science"],
    usageCount: 59
  },
  {
    id: "tool-70",
    name: "Google Cloud Vertex AI",
    description: "Google's unified AI platform for machine learning",
    url: "https://cloud.google.com/vertex-ai",
    department: "data-science",
    tags: ["Machine Learning", "Google Cloud", "AI Platform"],
    usageCount: 55
  },
  {
    id: "tool-71",
    name: "IBM Watson Studio AutoAI",
    description: "Automated machine learning for data scientists",
    url: "https://www.ibm.com/products/watson-studio",
    department: "data-science",
    tags: ["AutoML", "IBM", "Data Science"],
    usageCount: 51
  },
  {
    id: "tool-72",
    name: "Fiddler AI",
    description: "Explainable AI platform for model monitoring",
    url: "https://www.fiddler.ai/",
    department: "data-science",
    tags: ["Explainable AI", "Monitoring", "Data Science"],
    usageCount: 47
  },
  
  // Cloud tools
  {
    id: "tool-73",
    name: "AWS AI Services",
    description: "Suite of AI services from Amazon Web Services",
    url: "https://aws.amazon.com/machine-learning/ai-services/",
    department: "cloud",
    tags: ["AWS", "AI Services", "Cloud"],
    usageCount: 89
  },
  {
    id: "tool-74",
    name: "Azure AI",
    description: "Microsoft's AI platform on Azure cloud",
    url: "https://azure.microsoft.com/en-us/solutions/ai/",
    department: "cloud",
    tags: ["Azure", "Microsoft", "AI Services"],
    usageCount: 83
  },
  {
    id: "tool-75",
    name: "Cast AI",
    description: "Cloud cost optimization and management platform",
    url: "https://cast.ai/",
    department: "cloud",
    tags: ["Cost Optimization", "Management", "Cloud"],
    usageCount: 61
  },
  {
    id: "tool-76",
    name: "Kubecost",
    description: "Kubernetes cost monitoring and management",
    url: "https://www.kubecost.com/",
    department: "cloud",
    tags: ["Kubernetes", "Cost Management", "Cloud"],
    usageCount: 57
  },
  {
    id: "tool-77",
    name: "Pulumi + AI Copilot",
    description: "Infrastructure as code with AI assistance",
    url: "https://www.pulumi.com/",
    department: "cloud",
    tags: ["Infrastructure as Code", "AI Assistance", "Cloud"],
    usageCount: 53
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
  const simulatedInvalidToolIds = ['tool-25', 'tool-49'];
  
  for (const tool of tools) {
    if (simulatedInvalidToolIds.includes(tool.id)) {
      invalidLinks.push(tool.id);
    } else {
      validLinks.push(tool.id);
    }
  }
  
  return { valid: validLinks, invalid: invalidLinks };
};
