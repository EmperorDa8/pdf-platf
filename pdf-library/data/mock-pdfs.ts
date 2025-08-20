import { PDFCategory } from '@/lib/types';

export const pdfData: PDFCategory[] = [
  {
    title: "Editor's Choice",
    documents: [
      { id: 'pdf-01', title: 'The Q3 2025 Financial Report', thumbnailUrl: '/api/thumbnail/pdf-01', fileUrl: '#', pageCount: 42, fileSize: '5.1MB', category: 'Reports' },
      { id: 'pdf-02', title: 'Project Phoenix: A Case Study in Agile Deployment', thumbnailUrl: '/api/thumbnail/pdf-02', fileUrl: '#', pageCount: 18, fileSize: '2.3MB', category: 'Case Studies' },
      { id: 'pdf-03', title: 'Marketing Strategy FY2026', thumbnailUrl: '/api/thumbnail/pdf-03', fileUrl: '#', pageCount: 30, fileSize: '4.0MB', category: 'Strategy' },
      { id: 'pdf-04', title: 'Competitor Analysis: The Rise of AI', thumbnailUrl: '/api/thumbnail/pdf-04', fileUrl: '#', pageCount: 55, fileSize: '7.8MB', category: 'Analysis' },
      { id: 'pdf-05', title: 'Human Resources Handbook', thumbnailUrl: '/api/thumbnail/pdf-05', fileUrl: '#', pageCount: 102, fileSize: '15.2MB', category: 'Guides' },
      { id: 'pdf-06', title: 'Design Systems for Scale', thumbnailUrl: '/api/thumbnail/pdf-06', fileUrl: '#', pageCount: 25, fileSize: '3.1MB', category: 'Design' },
    ],
  },
  {
    title: 'New Arrivals',
    documents: [
      { id: 'pdf-08', title: 'Onboarding Guide for New Engineers', thumbnailUrl: '/api/thumbnail/pdf-08', fileUrl: '#', pageCount: 89, fileSize: '12.4MB', category: 'Guides' },
      { id: 'pdf-09', title: 'The Future of Renewable Energy', thumbnailUrl: '/api/thumbnail/pdf-09', fileUrl: '#', pageCount: 60, fileSize: '8.9MB', category: 'Reports' },
      { id: 'pdf-10', title: 'Advanced TypeScript Techniques', thumbnailUrl: '/api/thumbnail/pdf-10', fileUrl: '#', pageCount: 45, fileSize: '6.2MB', category: 'Programming' },
      { id: 'pdf-11', title: 'Supply Chain Optimization', thumbnailUrl: '/api/thumbnail/pdf-11', fileUrl: '#', pageCount: 72, fileSize: '10.1MB', category: 'Logistics' },
      { id: 'pdf-12', title: 'Customer Persona Development', thumbnailUrl: '/api/thumbnail/pdf-12', fileUrl: '#', pageCount: 34, fileSize: '4.5MB', category: 'Marketing' },
      { id: 'pdf-13', title: 'Architectural Blueprints: Downtown Tower', thumbnailUrl: '/api/thumbnail/pdf-13', fileUrl: '#', pageCount: 150, fileSize: '22.8MB', category: 'Architecture' },
    ],
  },
  {
    title: 'Case Studies',
    documents: [
        { id: 'pdf-14', title: 'Case Study: Global Logistics', thumbnailUrl: '/api/thumbnail/pdf-14', fileUrl: '#', pageCount: 22, fileSize: '3.5MB', category: 'Case Studies' },
        { id: 'pdf-15', title: 'E-commerce Platform Migration', thumbnailUrl: '/api/thumbnail/pdf-15', fileUrl: '#', pageCount: 40, fileSize: '6.8MB', category: 'Case Studies' },
        { id: 'pdf-16', title: 'SaaS Company Growth Strategy', thumbnailUrl: '/api/thumbnail/pdf-16', fileUrl: '#', pageCount: 35, fileSize: '5.2MB', category: 'Case Studies' },
        { id: 'pdf-17', title: 'Mobile App User Acquisition', thumbnailUrl: '/api/thumbnail/pdf-17', fileUrl: '#', pageCount: 28, fileSize: '4.1MB', category: 'Case Studies' },
        { id: 'pdf-18', title: 'Non-Profit Fundraising Campaign', thumbnailUrl: '/api/thumbnail/pdf-18', fileUrl: '#', pageCount: 15, fileSize: '2.1MB', category: 'Case Studies' },
        { id: 'pdf-19', title: 'Manufacturing Process Optimization', thumbnailUrl: '/api/thumbnail/pdf-19', fileUrl: '#', pageCount: 50, fileSize: '8.0MB', category: 'Case Studies' },
    ]
  }
];