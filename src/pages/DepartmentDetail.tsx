
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { departments, tools, Department, Tool, incrementToolUsage } from '@/data/mockData';
import { useBookmarks } from '@/context/BookmarkContext';
import { ArrowLeft, ExternalLink, Star, StarOff, Library } from 'lucide-react';
import { toast } from 'sonner';

const DepartmentDetail = () => {
  const { departmentId } = useParams<{ departmentId: string }>();
  const navigate = useNavigate();
  const { isBookmarked, toggleBookmark } = useBookmarks();
  
  const department = departments.find(d => d.id === departmentId);
  const departmentTools = tools.filter(t => t.department === departmentId);
  
  if (!department) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Department Not Found</h1>
        <p className="mb-6">The department you're looking for doesn't exist.</p>
        <Button onClick={() => navigate('/dashboard')}>
          Return to Dashboard
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>{department.name}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => navigate('/dashboard')}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{department.name}</h1>
            <p className="text-muted-foreground">
              {department.description}
            </p>
          </div>
        </div>
        <div className={`p-2 rounded-lg ${department.color}`}>
          <Library className="h-6 w-6" />
        </div>
      </div>
      
      {departmentTools.length === 0 ? (
        <Card>
          <CardContent className="p-6 text-center">
            <p>No tools available for this department yet.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {departmentTools.map((tool) => (
            <ToolCard 
              key={tool.id} 
              tool={tool} 
              isBookmarked={isBookmarked(tool.id)}
              toggleBookmark={() => toggleBookmark(tool)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

interface ToolCardProps {
  tool: Tool;
  isBookmarked: boolean;
  toggleBookmark: () => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, isBookmarked, toggleBookmark }) => {
  const handleToolClick = () => {
    // Track tool usage
    incrementToolUsage(tool.id);
    
    // Verify the URL before opening
    if (!tool.url || tool.url === '#') {
      toast.error("This link appears to be broken. Please contact IT support.");
      return;
    }
    
    // Open the URL in a new tab
    window.open(tool.url, '_blank', 'noopener,noreferrer');
    
    // Provide feedback
    toast.success(`Opening ${tool.name}...`);
  };

  return (
    <Card className="hover-card flex flex-col h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium">{tool.name}</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.preventDefault();
              toggleBookmark();
              toast.success(isBookmarked ? `Removed ${tool.name} from bookmarks` : `Added ${tool.name} to bookmarks`);
            }}
            className="text-yellow-500 hover:text-yellow-600 -mt-1 -mr-2"
            aria-label={isBookmarked ? "Remove from bookmarks" : "Add to bookmarks"}
          >
            {isBookmarked ? (
              <Star className="h-5 w-5 fill-yellow-500" />
            ) : (
              <StarOff className="h-5 w-5" />
            )}
          </Button>
        </div>
        <CardDescription>{tool.description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <div className="flex flex-wrap gap-1">
          {tool.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-gray-100 dark:bg-gray-800">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button 
          className="w-full"
          onClick={handleToolClick}
          aria-label={`Open ${tool.name} in new tab`}
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          Go to Tool
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DepartmentDetail;
