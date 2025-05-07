
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useBookmarks } from '@/context/BookmarkContext';
import { ArrowLeft, ExternalLink, Star, Library } from 'lucide-react';
import { departments } from '@/data/mockData';

const Bookmarks = () => {
  const { bookmarkedTools, toggleBookmark } = useBookmarks();
  const navigate = useNavigate();

  return (
    <div className="space-y-6 animate-fade-in">
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
            <h1 className="text-3xl font-bold tracking-tight">Bookmarked Tools</h1>
            <p className="text-muted-foreground">
              Quick access to your favorite tools
            </p>
          </div>
        </div>
      </div>
      
      {bookmarkedTools.length === 0 ? (
        <Card>
          <CardContent className="p-6 text-center">
            <div className="py-8 flex flex-col items-center">
              <Star className="h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium mb-2">No bookmarks yet</h3>
              <p className="text-muted-foreground mb-4">
                Add tools to your bookmarks by clicking the star icon on tool cards.
              </p>
              <Button onClick={() => navigate('/dashboard')}>
                Browse Tools
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bookmarkedTools.map((tool) => {
            const department = departments.find(d => d.id === tool.department);
            
            return (
              <Card key={tool.id} className="hover-card">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg font-medium">{tool.name}</CardTitle>
                      {department && (
                        <Badge 
                          variant="outline" 
                          className={`mt-1 ${department.color}`}
                        >
                          {department.name}
                        </Badge>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleBookmark(tool)}
                      className="text-yellow-500 hover:text-yellow-600 -mt-1 -mr-2"
                    >
                      <Star className="h-5 w-5 fill-yellow-500" />
                    </Button>
                  </div>
                  <CardDescription className="mt-2">{tool.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex flex-wrap gap-1">
                    {tool.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-100 dark:bg-gray-800">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full"
                    onClick={() => window.open(tool.url, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Go to Tool
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Bookmarks;
