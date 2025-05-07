
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { tools, departments } from '@/data/mockData';
import { useBookmarks } from '@/context/BookmarkContext';
import { ArrowLeft, ExternalLink, Star, StarOff, Search as SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Search = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [searchResults, setSearchResults] = useState<typeof tools>([]);
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const navigate = useNavigate();

  useEffect(() => {
    const query = searchParams.get('q') || '';
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }
    
    const filteredTools = tools.filter(tool => {
      const searchTerms = query.toLowerCase().split(' ');
      
      const matchesName = searchTerms.some(term => 
        tool.name.toLowerCase().includes(term)
      );
      
      const matchesDescription = searchTerms.some(term => 
        tool.description.toLowerCase().includes(term)
      );
      
      const matchesTags = searchTerms.some(term => 
        tool.tags.some(tag => tag.toLowerCase().includes(term))
      );
      
      const matchesDepartment = searchTerms.some(term => {
        const dept = departments.find(d => d.id === tool.department);
        return dept?.name.toLowerCase().includes(term);
      });
      
      return matchesName || matchesDescription || matchesTags || matchesDepartment;
    });
    
    setSearchResults(filteredTools);
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center space-x-4">
        <Button 
          variant="outline" 
          size="icon"
          onClick={() => navigate('/dashboard')}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Search Results</h1>
          <p className="text-muted-foreground">
            {searchResults.length} tools found for "{searchParams.get('q')}"
          </p>
        </div>
      </div>
      
      <form onSubmit={handleSearch} className="my-6">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search tools, departments, tags..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </form>
      
      {searchResults.length === 0 ? (
        <Card>
          <CardContent className="p-6 text-center">
            <div className="py-8 flex flex-col items-center">
              <SearchIcon className="h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium mb-2">No results found</h3>
              <p className="text-muted-foreground mb-4">
                {searchQuery.trim() === '' ? 
                  'Enter a search term to find tools.' : 
                  'Try using different keywords or check your spelling.'}
              </p>
              <Button onClick={() => navigate('/dashboard')}>
                Browse All Tools
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {searchResults.map((tool) => {
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
                      {isBookmarked(tool.id) ? (
                        <Star className="h-5 w-5 fill-yellow-500" />
                      ) : (
                        <StarOff className="h-5 w-5" />
                      )}
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

export default Search;
