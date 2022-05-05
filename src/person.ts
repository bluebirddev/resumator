import React from 'react';

export type Person = {
  name: string;
  titles: string[];
  info: {
    phone: string;
    email: string;
    linkedin: string;
    location: string;
  };
  leftWidth?: number; // width % of left column
  summary: React.ReactNode;
  workExperience: {
    title: string;
    company: string;
    dates: string;
    bulletPoints?: React.ReactNode[];
  }[];
  skills: string[];
  technologies: string[];
  education: {
    name: string;
    degrees: {
      name: string;
      dates?: string;
      grades?: string;
    }[];
  }[];
  lifeExperiences: string[];
};
