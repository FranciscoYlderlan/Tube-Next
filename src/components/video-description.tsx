'use client';

import { useState } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export type VideoDescriptionProps = {
  description: string;
};
export function VideoDescription({ description }: VideoDescriptionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className="relative">
        <AccordionContent className="text-muted-foreground">
          {description}
        </AccordionContent>
        {!isOpen && (
          <span className="absolute top-0 line-clamp-1 h-5 w-full bg-gradient-to-t from-background via-muted-foreground to-muted-foreground bg-clip-text text-sm text-transparent">
            {description}
          </span>
        )}
        <AccordionTrigger
          className="mt-4 font-semibold text-primary"
          onClick={handleToggle}
        >
          {isOpen ? 'Menos' : 'Mais'}
        </AccordionTrigger>
      </AccordionItem>
    </Accordion>
  );
}
