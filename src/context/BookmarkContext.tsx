
import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'sonner';

interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  department: string;
  tags: string[];
}

interface BookmarkContextType {
  bookmarkedTools: Tool[];
  isBookmarked: (toolId: string) => boolean;
  toggleBookmark: (tool: Tool) => void;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export const BookmarkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookmarkedTools, setBookmarkedTools] = useState<Tool[]>([]);

  useEffect(() => {
    // Load bookmarked tools from localStorage
    const storedBookmarks = localStorage.getItem('spritledash_bookmarks');
    
    if (storedBookmarks) {
      try {
        setBookmarkedTools(JSON.parse(storedBookmarks));
      } catch (error) {
        console.error('Error parsing bookmarks data', error);
        localStorage.removeItem('spritledash_bookmarks');
      }
    }
  }, []);

  const isBookmarked = (toolId: string) => {
    return bookmarkedTools.some(tool => tool.id === toolId);
  };

  const toggleBookmark = (tool: Tool) => {
    if (isBookmarked(tool.id)) {
      // Remove from bookmarks
      const updatedBookmarks = bookmarkedTools.filter(t => t.id !== tool.id);
      setBookmarkedTools(updatedBookmarks);
      localStorage.setItem('spritledash_bookmarks', JSON.stringify(updatedBookmarks));
      toast.info(`${tool.name} removed from bookmarks`);
    } else {
      // Add to bookmarks
      const updatedBookmarks = [...bookmarkedTools, tool];
      setBookmarkedTools(updatedBookmarks);
      localStorage.setItem('spritledash_bookmarks', JSON.stringify(updatedBookmarks));
      toast.success(`${tool.name} added to bookmarks`);
    }
  };

  return (
    <BookmarkContext.Provider value={{ bookmarkedTools, isBookmarked, toggleBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (context === undefined) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
};
