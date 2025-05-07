
export interface Department {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  department: string;
  tags: string[];
}

export const departments: Department[] = [
  {
    id: 'administrative',
    name: 'Administrative & HRM',
    icon: 'building',
    description: 'HR management and administrative tools',
    color: 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300',
  },
  {
    id: 'sales',
    name: 'Sales',
    icon: 'trending-up',
    description: 'Sales automation and lead management',
    color: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300',
  },
  {
    id: 'marketing',
    name: 'Marketing',
    icon: 'megaphone',
    description: 'Marketing automation and analytics',
    color: 'bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300',
  },
  {
    id: 'finance',
    name: 'Finance & Accountants',
    icon: 'dollar-sign',
    description: 'Financial management and accounting',
    color: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
  },
  {
    id: 'support',
    name: 'Technical Support',
    icon: 'help-circle',
    description: 'Customer and technical support tools',
    color: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300',
  },
  {
    id: 'presales',
    name: 'Pre-Sales / Solutions',
    icon: 'puzzle',
    description: 'Solutions architecture and pre-sales tools',
    color: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300',
  },
  {
    id: 'business',
    name: 'Business Analyst',
    icon: 'bar-chart-2',
    description: 'Business analysis and reporting tools',
    color: 'bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300',
  },
  {
    id: 'development',
    name: 'Software Development',
    icon: 'code',
    description: 'Software development and DevOps tools',
    color: 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300',
  },
  {
    id: 'qa',
    name: 'QA / Testing',
    icon: 'check-circle',
    description: 'Quality assurance and testing tools',
    color: 'bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300',
  },
  {
    id: 'data',
    name: 'Data Scientists & Analysts',
    icon: 'database',
    description: 'Data science and analytics tools',
    color: 'bg-lime-100 dark:bg-lime-900 text-lime-700 dark:text-lime-300',
  },
  {
    id: 'cloud',
    name: 'Cloud Engineering',
    icon: 'cloud',
    description: 'Cloud infrastructure and DevOps tools',
    color: 'bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300',
  }
];

export const tools: Tool[] = [
  // Administrative & HRM
  {
    id: 'admin1',
    name: 'HR Assistant AI',
    description: 'AI-powered HR management system for employee records, onboarding, and performance reviews',
    url: 'https://example.com/hr-assistant-ai',
    department: 'administrative',
    tags: ['HR', 'Employee Management', 'Onboarding']
  },
  {
    id: 'admin2',
    name: 'Document AI',
    description: 'Automated document processing and management with AI-powered text extraction',
    url: 'https://example.com/document-ai',
    department: 'administrative',
    tags: ['Document Processing', 'AI', 'OCR']
  },
  {
    id: 'admin3',
    name: 'Payroll Automator',
    description: 'Automated payroll processing with tax calculation and compliance checks',
    url: 'https://example.com/payroll-automator',
    department: 'administrative',
    tags: ['Payroll', 'Automation', 'Finance']
  },
  
  // Sales
  {
    id: 'sales1',
    name: 'Lead Predictor',
    description: 'AI-powered lead scoring and opportunity prediction',
    url: 'https://example.com/lead-predictor',
    department: 'sales',
    tags: ['Lead Scoring', 'AI', 'Prediction']
  },
  {
    id: 'sales2',
    name: 'Sales Copilot',
    description: 'AI assistant for sales reps to automate follow-ups and generate proposals',
    url: 'https://example.com/sales-copilot',
    department: 'sales',
    tags: ['Sales Automation', 'AI', 'Proposals']
  },
  {
    id: 'sales3',
    name: 'Call Analyzer',
    description: 'AI-powered call analysis for sales calls with insights and coaching',
    url: 'https://example.com/call-analyzer',
    department: 'sales',
    tags: ['Call Analysis', 'AI', 'Coaching']
  },
  
  // Marketing
  {
    id: 'marketing1',
    name: 'Content Generator',
    description: 'AI-powered content generation for marketing materials',
    url: 'https://example.com/content-generator',
    department: 'marketing',
    tags: ['Content', 'AI', 'Generation']
  },
  {
    id: 'marketing2',
    name: 'Campaign Optimizer',
    description: 'AI-powered campaign optimization with A/B testing and analytics',
    url: 'https://example.com/campaign-optimizer',
    department: 'marketing',
    tags: ['Campaigns', 'A/B Testing', 'Analytics']
  },
  {
    id: 'marketing3',
    name: 'Social Media Assistant',
    description: 'AI tool for scheduling and optimizing social media content',
    url: 'https://example.com/social-media-assistant',
    department: 'marketing',
    tags: ['Social Media', 'Scheduling', 'Analytics']
  },
  
  // Finance
  {
    id: 'finance1',
    name: 'Expense Analyzer',
    description: 'AI-powered expense analysis and categorization',
    url: 'https://example.com/expense-analyzer',
    department: 'finance',
    tags: ['Expenses', 'Analytics', 'Categorization']
  },
  {
    id: 'finance2',
    name: 'Invoice Processor',
    description: 'Automated invoice processing with AI-powered data extraction',
    url: 'https://example.com/invoice-processor',
    department: 'finance',
    tags: ['Invoices', 'AI', 'Data Extraction']
  },
  {
    id: 'finance3',
    name: 'Financial Forecaster',
    description: 'AI-powered financial forecasting and planning',
    url: 'https://example.com/financial-forecaster',
    department: 'finance',
    tags: ['Forecasting', 'Planning', 'Analytics']
  },
  
  // Technical Support
  {
    id: 'support1',
    name: 'Ticket Classifier',
    description: 'AI-powered ticket classification and routing',
    url: 'https://example.com/ticket-classifier',
    department: 'support',
    tags: ['Classification', 'AI', 'Routing']
  },
  {
    id: 'support2',
    name: 'Knowledge Assistant',
    description: 'AI-powered knowledge base assistant for customer support',
    url: 'https://example.com/knowledge-assistant',
    department: 'support',
    tags: ['Knowledge Base', 'AI', 'Support']
  },
  {
    id: 'support3',
    name: 'Customer Feedback Analyzer',
    description: 'AI-powered analysis of customer feedback and sentiment',
    url: 'https://example.com/feedback-analyzer',
    department: 'support',
    tags: ['Feedback', 'Sentiment Analysis', 'AI']
  },
  
  // Pre-Sales / Solutions
  {
    id: 'presales1',
    name: 'Solution Architect',
    description: 'AI-powered solution architecture and design assistant',
    url: 'https://example.com/solution-architect',
    department: 'presales',
    tags: ['Architecture', 'AI', 'Design']
  },
  {
    id: 'presales2',
    name: 'Proposal Generator',
    description: 'AI-powered proposal generation and customization',
    url: 'https://example.com/proposal-generator',
    department: 'presales',
    tags: ['Proposals', 'AI', 'Customization']
  },
  {
    id: 'presales3',
    name: 'ROI Calculator',
    description: 'AI-powered ROI calculation and justification',
    url: 'https://example.com/roi-calculator',
    department: 'presales',
    tags: ['ROI', 'Calculation', 'Justification']
  },
  
  // Business Analyst
  {
    id: 'business1',
    name: 'Requirements Assistant',
    description: 'AI-powered requirements gathering and documentation',
    url: 'https://example.com/requirements-assistant',
    department: 'business',
    tags: ['Requirements', 'Documentation', 'AI']
  },
  {
    id: 'business2',
    name: 'Process Modeler',
    description: 'AI-powered business process modeling and optimization',
    url: 'https://example.com/process-modeler',
    department: 'business',
    tags: ['Process', 'Modeling', 'Optimization']
  },
  {
    id: 'business3',
    name: 'User Story Generator',
    description: 'AI-powered user story and acceptance criteria generation',
    url: 'https://example.com/user-story-generator',
    department: 'business',
    tags: ['User Stories', 'Acceptance Criteria', 'AI']
  },
  
  // Software Development
  {
    id: 'development1',
    name: 'Code Assistant',
    description: 'AI-powered code generation and completion',
    url: 'https://example.com/code-assistant',
    department: 'development',
    tags: ['Code', 'AI', 'Generation']
  },
  {
    id: 'development2',
    name: 'Bug Predictor',
    description: 'AI-powered bug prediction and prevention',
    url: 'https://example.com/bug-predictor',
    department: 'development',
    tags: ['Bugs', 'AI', 'Prevention']
  },
  {
    id: 'development3',
    name: 'Code Reviewer',
    description: 'AI-powered code review and quality analysis',
    url: 'https://example.com/code-reviewer',
    department: 'development',
    tags: ['Code Review', 'Quality', 'AI']
  },
  
  // QA / Testing
  {
    id: 'qa1',
    name: 'Test Generator',
    description: 'AI-powered test case generation and optimization',
    url: 'https://example.com/test-generator',
    department: 'qa',
    tags: ['Test Cases', 'AI', 'Generation']
  },
  {
    id: 'qa2',
    name: 'Regression Analyzer',
    description: 'AI-powered regression test analysis and optimization',
    url: 'https://example.com/regression-analyzer',
    department: 'qa',
    tags: ['Regression', 'Analysis', 'AI']
  },
  {
    id: 'qa3',
    name: 'Test Automation Assistant',
    description: 'AI-powered test automation code generation',
    url: 'https://example.com/test-automation-assistant',
    department: 'qa',
    tags: ['Automation', 'AI', 'Generation']
  },
  
  // Data Scientists & Analysts
  {
    id: 'data1',
    name: 'Data Cleaner',
    description: 'AI-powered data cleaning and preparation',
    url: 'https://example.com/data-cleaner',
    department: 'data',
    tags: ['Data Cleaning', 'AI', 'Preparation']
  },
  {
    id: 'data2',
    name: 'Model Builder',
    description: 'AI-powered machine learning model building and optimization',
    url: 'https://example.com/model-builder',
    department: 'data',
    tags: ['Machine Learning', 'Models', 'AI']
  },
  {
    id: 'data3',
    name: 'Insight Generator',
    description: 'AI-powered data analysis and insight generation',
    url: 'https://example.com/insight-generator',
    department: 'data',
    tags: ['Analysis', 'Insights', 'AI']
  },
  
  // Cloud Engineering
  {
    id: 'cloud1',
    name: 'Infrastructure Designer',
    description: 'AI-powered cloud infrastructure design and optimization',
    url: 'https://example.com/infrastructure-designer',
    department: 'cloud',
    tags: ['Infrastructure', 'Cloud', 'AI']
  },
  {
    id: 'cloud2',
    name: 'Cost Optimizer',
    description: 'AI-powered cloud cost optimization and recommendations',
    url: 'https://example.com/cost-optimizer',
    department: 'cloud',
    tags: ['Cost', 'Optimization', 'AI']
  },
  {
    id: 'cloud3',
    name: 'Security Analyzer',
    description: 'AI-powered cloud security analysis and recommendations',
    url: 'https://example.com/security-analyzer',
    department: 'cloud',
    tags: ['Security', 'Analysis', 'AI']
  }
];
