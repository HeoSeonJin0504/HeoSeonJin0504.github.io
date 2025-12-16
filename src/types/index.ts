export interface Project {
  id: number;
  title: string;
  description: string;
  details?: string;
  role?: string;
  techStack: string[];
  imageUrls: string[];  
  demoUrl?: string;
  githubUrls: { label: string; url: string }[];
  videoUrl?: string;
  // 상세 페이지용 
  fullDescription?: string;  
  features?: string[];  
  challenges?: string;  
  results?: string;  // 프로젝트 결과/성과
  period?: string;  // 개발 기간
  // 새로운 필드들
  teamSize?: string;  // 팀 규모
  apiDesign?: string;  // API 설계 설명
  apiImageUrl?: string;  // API 설계 이미지
  erdImageUrl?: string;  // ERD 이미지
  learnings?: string;  // 프로젝트를 통해 배운 점
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  email: string;
  skills: string[];
}