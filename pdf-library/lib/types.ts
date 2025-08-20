
export interface User {
  id: string;
  email?: string;
  is_admin?: boolean;
  created_at?: string;
  downloads_used?: number;
  download_limit?: number;
}

export interface PDFDocument {
  id: string;
  title: string;
  thumbnailUrl: string; 
  fileUrl: string; 
  pageCount: number;
  fileSize: string; 
  category: string;
}

export interface PDFCategory {
  title: string;
  documents: PDFDocument[];
}
