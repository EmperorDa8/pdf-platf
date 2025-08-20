'use client';

import { PDFCarousel } from '@/components/ui/pdf-carousel';
import { mockCategories } from '@/data/mock-data';

export default function GalleryPage() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">Document Collections</h1>
          <h2 className="text-lg md:text-xl text-slate-400 mt-2 max-w-3xl mx-auto">
            Browse our curated libraries of reports, specifications, and case studies.
          </h2>
        </header>

        <div className="space-y-16">
          {mockCategories.map((category) => (
            <PDFCarousel key={category.title} category={category} />
          ))}
        </div>
      </main>
    </div>
  );
}