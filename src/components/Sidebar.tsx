
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/context/AuthContext';
import { LayoutDashboard, Bookmark, HelpCircle, User, Settings, BarChart2 } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  if (!isOpen) return null;

  return (
    <aside className={cn(
      "h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700",
      "w-64 flex-shrink-0 flex flex-col",
      "transition-all duration-300",
      isOpen ? "translate-x-0" : "-translate-x-full"
    )}>
      <div className="p-4 flex items-center">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/954e59d8-c8b1-4160-b352-4dbcaab5d504.png" 
            alt="Spritle Logo" 
            className="h-8"
          />
          <span className="font-bold text-lg text-gray-900 dark:text-white">
            Spritle Verse
          </span>
        </div>
      </div>
      
      <Separator />
      
      <ScrollArea className="flex-1">
        <nav className="p-2">
          <div className="space-y-1">
            <NavItem icon={<LayoutDashboard size={18} />} to="/dashboard">
              Dashboard
            </NavItem>
            <NavItem icon={<Bookmark size={18} />} to="/bookmarks">
              Bookmarked Tools
            </NavItem>
            <NavItem icon={<BarChart2 size={18} />} to="/analytics">
              Analytics
            </NavItem>
            <NavItem icon={<HelpCircle size={18} />} to="/help">
              Help
            </NavItem>
          </div>
          
          <Separator className="my-4" />
          
          <div className="space-y-1">
            <p className="px-2 py-1.5 text-sm font-medium text-gray-500 dark:text-gray-400">
              User
            </p>
            <NavItem icon={<User size={18} />} to="/profile">
              Profile
            </NavItem>
            <NavItem icon={<Settings size={18} />} to="/settings">
              Settings
            </NavItem>
          </div>
        </nav>
      </ScrollArea>
      
      <Separator />
      
      <div className="p-4">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-full bg-spritle-blue flex items-center justify-center text-white font-medium">
            {user?.name?.[0] || 'U'}
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-medium truncate">
              {user?.name || 'User'}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
              {user?.email || 'user@spritle.com'}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  to: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all",
        "hover:bg-gray-100 dark:hover:bg-gray-700",
        isActive 
          ? "bg-gray-100 dark:bg-gray-700 text-spritle-blue dark:text-spritle-blue" 
          : "text-gray-700 dark:text-gray-300"
      )}
    >
      {icon}
      <span>{children}</span>
    </NavLink>
  );
};

export default Sidebar;
