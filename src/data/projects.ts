import type { Project, SocialLink, Profile } from '../types';

export const profile: Profile = {
  name: '허선진',
  title: 'Full-Stack Developer',
  bio: '프론트엔드부터 백엔드까지 설계하며 문제를 해결해 나가는 풀스택 개발자',
  email: 'sonjin54@naver.com',
  skills: ['React', 'Node.js', 'TypeScript', 'JavaScript', 'MySQL']
};

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/HeoSeonJin0504',
    icon: 'github'
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Qureka',
    description: '생성형 AI 기반 교육 콘텐츠 문제 생성기',
    details: ' 강의자료를 업로드하여, 자료의 정보를 요약하고, 이를 바탕으로 문제를 생성해주는 프로그램',
    role: '프론트엔드(React) 및 백엔드(Node.JS) 및 데이터베이스 관리',
    techStack: ['React', 'Node.js', 'FastAPI','Supabase'],
    imageUrls: [  
      '/images/qureka/qureka_1.png',
      '/images/qureka/qureka_2.png',
      '/images/qureka/qureka_3.png',
      '/images/qureka/qureka_4.png',
      '/images/qureka/qureka_5.png',
      '/images/qureka/qureka_6.png',
      '/images/qureka/qureka_7.png',
    ],
    githubUrls: [
      { label: 'Frontend', url: 'https://github.com/HeoSeonJin0504/qurekafront.git' },
      { label: 'Backend', url: 'https://github.com/HeoSeonJin0504/qurekanode-supabase.git' } 
    ],
    demoUrl: '',
    videoUrl: '/videos/qureka.mp4',
    period: '2025.03 - 2025.11',
    fullDescription: `Qureka는 교육자들이 강의 자료를 쉽게 문제로 변환할 수 있도록 돕는 AI 기반 플랫폼입니다. 
    PDF, PPT 등의 강의 자료를 업로드하면 AI가 자동으로 내용을 분석하고 요약한 뒤, 
    다양한 유형의 문제(객관식, 단답형, 서술형)를 생성합니다.`,
    features: [
      '파일 업로드 및 AI 기반 자동 내용 요약',
      '다양한 문제 유형 자동 생성 (객관식, 단답형, 서술형 등)',
      '생성된 문제로 문제 풀기',
      '특정 문제 즐겨찾기',
      '요약본 및 문제 TXT, PDF 파일로 다운로드'
    ],
  },

  {
    id: 2,
    title: '그림나래',
    description: '생성형 AI 기반 동화 생성기',
    details: '그림(PNG, JPG 등)을 업로드 하여, 이와 관련된 동화를 생성해주는 프로그램',
    role: '프론트엔드(React) 및 백엔드(Node.JS) 및 데이터베이스 관리',
    techStack: ['React', 'Node.js','MySQL'],
    imageUrls: [  
      '/images/imagetostory/imagetostory_1.png',
    ],
    githubUrls: [
      { label: 'Frontend', url: 'https://github.com/HeoSeonJin0504/image-to-story-front.git' },
      { label: 'Backend', url: 'https://github.com/HeoSeonJin0504/image-to-story-node.git' }  
    ],
    demoUrl: '',
    videoUrl: '/videos/imagetostory.mp4',
    period: '2024.09 - 2024.12',
    fullDescription: `그림나래는 아이들이 그린 그림을 동화로 만들어주는 플랫폼입니다. 
    AI가 그림 속 요소들을 분석하고, 재미있고 감동적인 이야기를 만들어냅니다.`,
    features: [
      '이미지 업로드 및 분석',
      '분석된 요소를 바탕으로 AI가 창의적인 동화 생성',
    ],
  },

  {
    id: 3,
    title: 'AI English Trainer',
    description: '생성형 AI 기반 영어 학습 플랫폼',
    details: '예문 생성·토익/영작 문제·단어장 관리를 해주는 프로그램',
    role: '전체 개발(개인 프로젝트)',
    techStack: ['React', 'Node.js'],
    imageUrls: [  
      '/images/aienglishtrainer/aienglishtrainer_1.png',
      '/images/aienglishtrainer/aienglishtrainer_2.png',
      '/images/aienglishtrainer/aienglishtrainer_3.png',
    ],
    githubUrls: [
      { label: 'Frontend', url: 'https://github.com/HeoSeonJin0504/ai-english-trainer-front.git' },
      { label: 'Backend', url: 'https://github.com/HeoSeonJin0504/ai-english-trainer-node.git' }  
    ],
    demoUrl: '',
    videoUrl: '/videos/aienglishtrainer.mp4',
    period: '2025.11 - 2025.12',
    fullDescription: `AI English Trainer는 개인 맞춤형 영어 학습을 제공하는 플랫폼입니다. 
    사용자가 효율적으로 주제 및 단어를 선택해 학습을 할 수 있습니다.`,
    features: [
      'AI 기반 맞춤형 예문 생성',
      '토익 유형별 문제 생성 및 채점',
      '영작 문제 생성 및 모범 답안 보기 기능',
      '단어장 관리',
    ],
  }
];