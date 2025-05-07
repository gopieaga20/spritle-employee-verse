
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { departments, tools, getTopTools, getUsageByDepartment, verifyLinks } from '@/data/mockData';
import { Tool } from '@/data/mockData';
import { RefreshCw, AlertTriangle, CheckCircle, BarChart2, Users } from 'lucide-react';

// Colors for the charts
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658', '#8dd1e1', '#a4de6c', '#d0ed57', '#ffc658'];

const Analytics = () => {
  const [topTools, setTopTools] = useState<Tool[]>([]);
  const [departmentUsage, setDepartmentUsage] = useState<any[]>([]);
  const [linkStatus, setLinkStatus] = useState<{valid: string[], invalid: string[]}>({ valid: [], invalid: [] });
  const [uniqueVisitors, setUniqueVisitors] = useState<number>(0);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  // Load analytics data
  useEffect(() => {
    loadAnalyticsData();
  }, []);

  const loadAnalyticsData = async () => {
    setIsRefreshing(true);
    
    // Get top tools
    const top = getTopTools(3);
    setTopTools(top);
    
    // Get department usage
    const deptUsage = getUsageByDepartment();
    setDepartmentUsage(deptUsage);
    
    // Check link status
    const links = await verifyLinks();
    setLinkStatus(links);
    
    // Set unique visitors (mock data)
    setUniqueVisitors(145);
    
    // Update timestamp
    const now = new Date().toISOString();
    setLastUpdated(now);
    localStorage.setItem('lastAnalyticsUpdate', now);
    
    setIsRefreshing(false);
    toast.success('Analytics data refreshed');
  };

  // Format data for the department usage chart
  const formatDepartmentData = () => {
    return departmentUsage.map(dept => {
      const totalUsage = dept.toolsUsage.reduce((sum: number, tool: any) => sum + tool.count, 0);
      return {
        name: dept.departmentName,
        value: totalUsage
      };
    });
  };

  // Format data for the top tools chart
  const formatTopToolsData = () => {
    return topTools.map(tool => ({
      name: tool.name,
      usage: tool.usageCount || 0
    }));
  };

  // Handle the verification process
  const handleVerifyLinks = async () => {
    setIsRefreshing(true);
    toast.info('Verifying all tool links...');
    
    const result = await verifyLinks();
    setLinkStatus(result);
    
    if (result.invalid.length === 0) {
      toast.success('All links are valid!');
    } else {
      toast.error(`Found ${result.invalid.length} invalid links`);
    }
    
    setIsRefreshing(false);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor tool usage and link integrity across departments
          </p>
        </div>
        <Button 
          onClick={loadAnalyticsData} 
          disabled={isRefreshing}
          className="flex items-center gap-2"
        >
          <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          Refresh Data
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-500" />
              Unique Visitors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{uniqueVisitors}</div>
            <p className="text-xs text-muted-foreground">
              Last 7 days
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <BarChart2 className="h-5 w-5 text-green-500" />
              Total Tools
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{tools.length}</div>
            <p className="text-xs text-muted-foreground">
              Across {departments.length} departments
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              {linkStatus.invalid.length === 0 ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : (
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
              )}
              Link Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                {linkStatus.valid.length} Valid
              </Badge>
              {linkStatus.invalid.length > 0 && (
                <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
                  {linkStatus.invalid.length} Invalid
                </Badge>
              )}
            </div>
            <div className="mt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleVerifyLinks}
                disabled={isRefreshing}
              >
                Verify All Links
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="top-tools">
        <TabsList>
          <TabsTrigger value="top-tools">Top Tools</TabsTrigger>
          <TabsTrigger value="by-department">Usage by Department</TabsTrigger>
          <TabsTrigger value="link-audit">Link Audit</TabsTrigger>
        </TabsList>
        
        <TabsContent value="top-tools" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Top 3 Most Used Tools</CardTitle>
              <CardDescription>
                Based on number of accesses
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={formatTopToolsData()}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="usage" fill="#8884d8" name="Usage Count" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="by-department" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Tool Usage by Department</CardTitle>
              <CardDescription>
                Distribution of tool usage across departments
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={formatDepartmentData()}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {formatDepartmentData().map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
                
                <div className="overflow-auto max-h-full">
                  {departmentUsage.map((dept) => (
                    <div key={dept.departmentId} className="mb-4">
                      <h3 className="font-medium">{dept.departmentName}</h3>
                      <Separator className="my-2" />
                      <ul className="space-y-2">
                        {dept.toolsUsage
                          .sort((a: any, b: any) => b.count - a.count)
                          .map((tool: any) => (
                            <li key={tool.toolId} className="flex justify-between items-center">
                              <span>{tool.toolName}</span>
                              <Badge variant="secondary">{tool.count} uses</Badge>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="link-audit" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Link Audit Report</CardTitle>
              <CardDescription>
                Status of all tool links in the system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Valid Links ({linkStatus.valid.length})
                  </h3>
                  <Separator className="my-2" />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {linkStatus.valid.map(toolId => {
                      const tool = tools.find(t => t.id === toolId);
                      return tool ? (
                        <Badge key={tool.id} variant="outline" className="bg-green-50 text-green-700 dark:bg-green-900 dark:text-green-300">
                          {tool.name}
                        </Badge>
                      ) : null;
                    })}
                  </div>
                </div>
                
                {linkStatus.invalid.length > 0 && (
                  <div>
                    <h3 className="font-medium flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-500" />
                      Invalid Links ({linkStatus.invalid.length})
                    </h3>
                    <Separator className="my-2" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                      {linkStatus.invalid.map(toolId => {
                        const tool = tools.find(t => t.id === toolId);
                        return tool ? (
                          <Badge key={tool.id} variant="outline" className="bg-red-50 text-red-700 dark:bg-red-900 dark:text-red-300">
                            {tool.name}
                          </Badge>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="text-xs text-muted-foreground text-right">
        Last updated: {new Date(lastUpdated).toLocaleString()}
      </div>
    </div>
  );
};

export default Analytics;
