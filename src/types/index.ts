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
  imageCaptions?: string[];  // 이미지별 설명
  background?: string;  // 개발 배경
  challenges?: string[];  // 마주친 문제
  solution?: string[];  // 해결 방법
  results?: string;  // 프로젝트 결과/성과
  period?: string;  // 개발 기간
  // 새로운 필드들
  teamSize?: string;  // 팀 규모
  isDeployed?: boolean;  // 배포 여부
  apiDesign?: string;  // API 설계 설명
  apiImageUrl?: string;  // API 설계 이미지
  erdImageUrl?: string;  // ERD 이미지
  learnings?: string;  // 프로젝트를 통해 배운 점
  testAccount?: { id: string; password: string };  // 테스트 계정
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