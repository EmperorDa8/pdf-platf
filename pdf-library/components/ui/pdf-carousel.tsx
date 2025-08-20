'use client';

import { PDFCategory } from '@/lib/types';
import { PDFCard } from '@/components/ui/pdf-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface PDFCarouselProps {
  category: PDFCategory;
}

export function PDFCarousel({ category }: PDFCarouselProps) {
  return (
    <div className="w-full space-y-4">
      <h3 className="text-2xl font-bold tracking-tight text-white">{category.title}</h3>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent>
          {category.documents.map((pdf) => (
            <CarouselItem key={pdf.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <div className="p-1 h-full">
                <PDFCard pdf={pdf} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-12 bg-slate-800/50 border-slate-700 hover:bg-slate-700/80 disabled:opacity-30" />
        <CarouselNext className="mr-12 bg-slate-800/50 border-slate-700 hover:bg-slate-700/80 disabled:opacity-30" />
      </Carousel>
    </div>
  );
}
