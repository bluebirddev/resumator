import React, { ReactNode } from 'react';

export type Title = {
  title: string;
  dates: string;
  bulletPoints?: React.ReactNode[];
}

export type WE = {
  company?: string;
} & (Title | {
  titles: Title[];
});

export type Person = {
  name: string;
  titles: string[];
  info: {
    phone: string;
    email: string;
    linkedin: string;
    location?: string;
  };
  leftWidth?: number; // width % of left column
  summary: ReactNode;
  workExperience: WE[];
  skills: string[];
  technologies?: string[];
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
