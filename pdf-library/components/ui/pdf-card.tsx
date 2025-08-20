'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Eye, Download, FileText, HardDrive } from 'lucide-react';

import { PDFDocument } from '@/lib/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Separator } from '@/components/ui/separator';

interface PDFCardProps {
  pdf: PDFDocument;
}

export function PDFCard({ pdf }: PDFCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ duration: 0.2 }}
      className="group relative"
    >
      <Card className="overflow-hidden bg-slate-800 border-slate-700 h-full flex flex-col">
        <CardContent className="p-0 flex-grow">
          <AspectRatio ratio={10 / 14} className="bg-slate-900">
            <Image
              src={pdf.thumbnailUrl}
              alt={`${pdf.title} thumbnail`}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
              <Button variant="secondary" size="icon">
                <Eye className="h-5 w-5" />
                <span className="sr-only">Quick View</span>
              </Button>
              <Button variant="secondary" size="icon">
                <Download className="h-5 w-5" />
                <span className="sr-only">Download</span>
              </Button>
            </div>
          </AspectRatio>
        </CardContent>
        <CardFooter className="flex-col items-start p-4 bg-slate-800">
          <p className="font-bold text-white truncate w-full">{pdf.title}</p>
          <div className="flex items-center text-xs text-slate-400 mt-2 w-full">
            <FileText className="h-4 w-4 text-blue-400" />
            <span className="ml-1">{pdf.pageCount} pages</span>
            <Separator orientation="vertical" className="h-4 mx-2 bg-slate-600" />
            <HardDrive className="h-4 w-4 text-blue-400" />
            <span className="ml-1">{pdf.fileSize}</span>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
