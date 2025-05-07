
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from '@/components/ui/input';
import { ArrowLeft, Search, Mail, MessageSquare } from 'lucide-react';

const faqs = [
  {
    question: "How do I bookmark a tool?",
    answer: "To bookmark a tool, click the star icon on any tool card. You can find all your bookmarked tools in the 'Bookmarked Tools' section accessible from the sidebar."
  },
  {
    question: "What is the AI Assistant?",
    answer: "The AI Assistant is a chatbot that can help you find the right tools for your needs, answer questions about how to use specific tools, and provide general guidance about the Spritle Employee Verse platform."
  },
  {
    question: "How do I search for specific tools?",
    answer: "You can use the search bar at the top of the page to search for tools by name, description, tags, or department. Just type what you're looking for and press Enter."
  },
  {
    question: "Can I suggest a new tool to be added?",
    answer: "Yes! We welcome suggestions for new tools. Please contact the IT department with your suggestion, including the name of the tool, its purpose, and how it would benefit your department."
  },
  {
    question: "How do I switch between dark and light mode?",
    answer: "You can toggle between dark and light mode by clicking the sun/moon icon in the top right corner of the page."
  },
  {
    question: "Are there keyboard shortcuts available?",
    answer: "Currently, we support these keyboard shortcuts: 'Ctrl+K' or '/' to focus the search bar, 'Esc' to close dialogs, and 'Ctrl+B' to toggle the sidebar."
  },
  {
    question: "How secure is the platform?",
    answer: "The Spritle Employee Verse uses industry-standard security practices including encryption and authentication. All data is securely stored and only accessible to authorized employees."
  },
  {
    question: "What should I do if I encounter an error?",
    answer: "If you encounter an error, please try refreshing the page first. If the issue persists, contact IT support with details about the error and the steps to reproduce it."
  }
];

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFaqs, setFilteredFaqs] = useState(faqs);
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchQuery.trim() === '') {
      setFilteredFaqs(faqs);
      return;
    }
    
    const filtered = faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setFilteredFaqs(filtered);
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
          <h1 className="text-3xl font-bold tracking-tight">Help Center</h1>
          <p className="text-muted-foreground">
            Find answers to common questions and get support
          </p>
        </div>
      </div>
      
      <form onSubmit={handleSearch} className="my-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search FAQs..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </form>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="hover-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageSquare className="h-5 w-5 mr-2 text-spritle-blue" />
              Chat with AI Assistant
            </CardTitle>
            <CardDescription>
              Get instant answers to your questions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Our AI assistant can help you find tools, understand features, and troubleshoot issues.
            </p>
            <Button className="w-full bg-spritle-blue hover:bg-spritle-blue/90">
              Open Chat
            </Button>
          </CardContent>
        </Card>
        
        <Card className="hover-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-spritle-blue" />
              Contact Support
            </CardTitle>
            <CardDescription>
              Reach out to our support team
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Need more help? Our support team is available during business hours.
            </p>
            <Button variant="outline" className="w-full">
              Email Support
            </Button>
          </CardContent>
        </Card>
        
        <Card className="hover-card md:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle>Support Hours</CardTitle>
            <CardDescription>
              When you can reach our team
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Monday-Friday</span>
                <span className="text-sm font-medium">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Saturday</span>
                <span className="text-sm font-medium">10:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Sunday</span>
                <span className="text-sm font-medium">Closed</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>
            Find answers to common questions about the platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-4">
              <p>No FAQs match your search. Try different keywords.</p>
            </div>
          ) : (
            <Accordion type="single" collapsible className="w-full">
              {filteredFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Help;
