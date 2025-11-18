import React from 'react';

export interface ComparableSale {
  domain: string;
  price: number;
  year: number;
  industry: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PurchaseOption {
  title: string;
  price: string;
  features: string[];
  isPrimary: boolean;
}