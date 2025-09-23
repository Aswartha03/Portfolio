import { GoogleGenerativeAI } from '@google/generative-ai';
import { portfolioData } from '../data/portfolioData';

// Initialize Gemini AI with API key (you'll need to set this up)
const API_KEY = 'YOUR_GEMINI_API_KEY'; // Replace with your actual API key
const genAI = new GoogleGenerativeAI(API_KEY);

export class GeminiService {
  constructor() {
    this.model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    this.conversationHistory = [];
  }

  // Generate context about the developer based on portfolio data
  generateContext() {
    const { personal, skills, projects, education, achievements } = portfolioData;
    
    return `
      You are an AI assistant representing ${personal.name}, a ${personal.title}.
      
      Personal Information:
      - Name: ${personal.name}
      - Title: ${personal.title}
      - Location: ${personal.location}
      - Email: ${personal.email}
      - About: ${personal.about}
      
      Skills:
      - Programming: ${skills.programming.join(', ')}
      - Web Technologies: ${skills.web.join(', ')}
      - Tools: ${skills.tools.join(', ')}
      - Other: ${skills.other.join(', ')}
      
      Projects:
      ${projects.map(project => 
        `- ${project.title}: ${project.description} (Tech: ${project.stack.join(', ')})`
      ).join('\n')}
      
      Education:
      ${education.map(edu => 
        `- ${edu.degree} at ${edu.institution} (${edu.duration})`
      ).join('\n')}
      
      Achievements:
      ${achievements.map(achievement => `- ${achievement}`).join('\n')}
      
      Instructions:
      - Answer questions about ${personal.name.split(' ')[0]}'s background, skills, projects, and experience
      - Be professional but friendly and conversational
      - If asked about contact information, provide the email: ${personal.email}
      - If you don't know something specific, be honest but suggest they can contact ${personal.name.split(' ')[0]} directly
      - Keep responses concise but informative
      - Always speak in third person when referring to ${personal.name.split(' ')[0]}
    `;
  }

  async generateResponse(userMessage) {
    try {
      const context = this.generateContext();
      const prompt = `${context}\n\nUser question: ${userMessage}\n\nResponse:`;
      
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      // Store in conversation history
      this.conversationHistory.push(
        { role: 'user', content: userMessage },
        { role: 'assistant', content: text }
      );
      
      return text;
    } catch (error) {
      console.error('Error generating response:', error);
      
      // Fallback responses based on common questions
      return this.getFallbackResponse(userMessage);
    }
  }

  // Fallback responses when Gemini API is not available
  getFallbackResponse(message) {
    const lowerMessage = message.toLowerCase();
    const { personal, skills, projects } = portfolioData;
    
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology')) {
      return `${personal.name.split(' ')[0]} has expertise in ${skills.programming.join(', ')} for programming, and ${skills.web.join(', ')} for web development. He also works with tools like ${skills.tools.join(', ')}.`;
    }
    
    if (lowerMessage.includes('project')) {
      return `${personal.name.split(' ')[0]} has worked on several notable projects including:\n\n1. ${projects[0].title}: ${projects[0].description}\n2. ${projects[1].title}: ${projects[1].description}\n\nBoth projects showcase his full-stack development capabilities.`;
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('email')) {
      return `You can contact ${personal.name.split(' ')[0]} at ${personal.email}. He's always open to discussing new opportunities and interesting projects!`;
    }
    
    if (lowerMessage.includes('about') || lowerMessage.includes('who')) {
      return `${personal.name} is a ${personal.title} with a background in Electronics and Communication Engineering. ${personal.about.substring(0, 200)}...`;
    }
    
    if (lowerMessage.includes('education') || lowerMessage.includes('study')) {
      return `${personal.name.split(' ')[0]} is pursuing B.Tech in Electronics and Communication Engineering at Anantha Lakshmi Institute of Technology (2021-2025) and will be completing Full Stack Development at Masai School (Feb-Aug 2025).`;
    }
    
    return `Thanks for your question! I'm here to help you learn more about ${personal.name.split(' ')[0]} and his work. You can ask me about his skills, projects, education, or contact information. For specific inquiries, feel free to reach out to him directly at ${personal.email}.`;
  }

  clearHistory() {
    this.conversationHistory = [];
  }
}

export const geminiService = new GeminiService();