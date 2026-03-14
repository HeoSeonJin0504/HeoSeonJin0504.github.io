import type { Project, SocialLink, Profile } from "../types";

export const profile: Profile = {
  name: "허선진",
  title: "Full-Stack Developer",
  bio: "생성형 AI를 활용하여 교육·학습 서비스를 만들어온 풀스택 개발자",
  email: "sonjin54@naver.com",
  skills: [
    "React",
    "Node.js",
    "Spring Boot",
    "TypeScript",
    "JavaScript",
    "MySQL",
    "Supabase",
  ],
};

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/HeoSeonJin0504",
    icon: "github",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Qureka",
    description:
      "강의자료 업로드 한 번으로 AI가 요약과 문제까지 만들어주는 학습 보조 서비스",
    details: `PDF·PPTX 문서를 업로드하면 AI가 자동으로 요약본과 문제를 생성하고, 웹에서 바로 풀어보거나 PDF로 저장할 수 있는 웹 서비스`,
    role: "프론트엔드(React) 리팩토링, 백엔드(Node.js) 전체 개발",
    techStack: ["React", "Node.js", "FastAPI", "Supabase"],
    imageUrls: [
      "/images/qureka/qureka_1.png",
      "/images/qureka/qureka_2.png",
      "/images/qureka/qureka_3.png",
      "/images/qureka/qureka_4.png",
      "/images/qureka/qureka_5.png",
      "/images/qureka/qureka_6.png",
      "/images/qureka/qureka_7.png",
    ],
    imageCaptions: [
      "요약본 생성과 문제 생성 중 원하는 기능을 선택하는 화면입니다.",
      "강의자료(PDF, PPT 등)를 업로드하는 화면입니다.",
      "요약 유형(기본·핵심·주제 요약 등)과 분야·난이도·문장 수 설정 화면입니다.",
      "생성된 요약본은 사용자가 자유롭게 수정이 가능합니다.",
      "문제 유형(N지 선다형·순서 배열형 등)과 분야·난이도·문제 수 설정 화면입니다.",
      "생성한 문제를 저장하고 웹에서 바로 풀어볼 수 있습니다.",
      "생성한 요약본과 문제를 PDF 또는 txt 파일로 다운로드할 수 있습니다.",
    ],
    githubUrls: [
      {
        label: "Frontend(React)",
        url: "https://github.com/HeoSeonJin0504/qurekafront.git",
      },
      {
        label: "Backend(Node.js)",
        url: "https://github.com/HeoSeonJin0504/qurekanode-supabase.git",
      },
    ],
    demoUrl: "https://qureka.vercel.app",
    videoUrl: "/videos/qureka.mp4",
    period: "2025.03 - ing",
    teamSize: "4명",
    fullDescription: `PDF·PPTX 문서를 업로드하면 AI가 자동으로 요약하고 문제를 생성해주는 학습 보조 웹 서비스입니다. 
    요약 유형, 문제 유형, 난이도 등을 마우스 클릭으로 선택하면 그에 맞는 결과물을 생성합니다.
    생성된 요약본과 문제는 저장하거나 PDF로 다운로드할 수 있고 웹에서 바로 문제를 풀어볼 수도 있습니다.`,
    features: [
      "PDF·PPT 파일 업로드 및 텍스트 추출",
      "AI 문서 요약 - 일반·핵심 요약 등 유형 및 세부 옵션 선택 가능",
      "AI 문제 생성 - N지 선다형·참거짓형 등 유형 및 세부 옵션 선택 가능",
      "생성된 요약본·문제를 txt·PDF로 다운로드",
      "웹에서 바로 문제 풀기 (채점 및 결과 확인)",
      "생성된 문제 즐겨찾기 및 폴더별 분류 관리",
      "JWT 기반 로그인·회원가입 및 토큰 갱신",
    ],
    erdImageUrl: "/images/qureka/qureka_erd.png",
    isDeployed: true,
    testAccount: { id: "1234", password: "1234" },
    background: `AI가 빠르게 발전하면서 ChatGPT에 문서를 붙여넣고 "이거 요약해줘", "문제 만들어줘"라고 요청하는 방식이 일상화됐습니다. 
    하지만 원하는 결과를 얻으려면 요약 방식, 문제 유형, 난이도 등까지 직접 프롬프트로 구체적으로 작성해야 했습니다.
Qureka는 이 과정을 클릭 몇 번으로 대체할 수 있도록 만든 서비스입니다.
프롬프트 작성 없이 원하는 옵션을 클릭하는 것만으로 누구나 AI를 편하게 활용하게 만드는 것이 목표였습니다. 
생성 결과는 저장 및 PDF로 다운로드하고, 문제까지 풀 수 있어 학습의 전 과정을 하나의 서비스 안에서 완성할 수 있도록 설계했습니다.`,
    challenges: [
      'OpenAI 연동 기능을 별도의 FastAPI 서버로 분리했다가, Node.js로 통합하는 과정에서 문제가 발생했습니다. pdfjs-dist를 서버 환경에서 사용할 때 "No GlobalWorkerOptions.workerSrc specified" 오류가 발생하며 PDF 파싱이 전혀 되지 않았고, 한글 문서에서는 텍스트 추출 자체가 깨지는 문제도 함께 발생했습니다.',
      "AI가 생성한 JSON 구조가 문제 유형마다 달라 하나의 컴포넌트로 처리하기 어려웠습니다.",
      "jsPDF 기본 폰트가 한글을 지원하지 않아 PDF 다운로드 시 한글이 깨지는 문제가 있었습니다.",
    ],
    solution: [
      "pdfjs-dist는 브라우저 환경을 전제로 설계된 라이브러리라 서버에서 그대로 쓸 수 없었습니다. Node.js 환경에 맞게 Worker 옵션을 비활성화하고, pdfjs-dist가 실패하거나 추출 결과가 부족할 경우 pdf-parse로 fallback하는 방식으로 두 라이브러리를 상호보완적으로 활용해 해결했습니다.",
      "JSON 필드 구조를 분석해 문제 유형을 자동 감지하는 함수를 구현하고, 유형별 컴포넌트를 분리해 렌더링하였습니다.",
      "한글 폰트 대신 html2canvas로 DOM 요소를 이미지로 변환 후 PDF에 삽입하는 방식으로 한글 깨짐을 해결하였습니다.",
    ],
  },

  {
    id: 2,
    title: "그림나래",
    description:
      "그림 한 장을 올리면 AI가 동화를 써주고, TTS로 읽어주는 웹 서비스",
    details:
      "이미지를 업로드하면 AI가 그림 속 요소를 분석해 한국어 동화를 생성하고, Google Cloud TTS로 남성·여성 목소리 낭독까지 제공하는 웹 서비스",
    role: "프론트엔드(React) 전체 개발, 백엔드(Node.js) 리팩토링",
    techStack: ["React", "Node.js", "MySQL"],
    imageUrls: [
      "/images/imagetostory/imagetostory_1.png",
      "/images/imagetostory/imagetostory_2.png",
      "/images/imagetostory/imagetostory_3.png",
      "/images/imagetostory/imagetostory_4.png",
    ],
    imageCaptions: [
      "그림을 업로드하면, 동화와 남성/여성 목소리로 TTS를 생성하고 저장할 수 있습니다.",
      "서비스 소개를 간단히 확인할 수 있는 홈 화면입니다.",
      "저장한 동화 목록을 확인할 수 있습니다.",
      "저장한 동화의 내용과 TTS 음성을 확인할 수 있습니다.",
    ],
    githubUrls: [
      {
        label: "Frontend(React)",
        url: "https://github.com/HeoSeonJin0504/image-to-story-front.git",
      },
      {
        label: "Backend(Node.js)",
        url: "https://github.com/HeoSeonJin0504/image-to-story-node.git",
      },
    ],
    demoUrl: "https://ai-image-to-story.vercel.app",
    videoUrl: "/videos/imagetostory.mp4",
    period: "2024.09 - ing",
    teamSize: "4명",
    fullDescription: `그림나래는 사진 한 장으로 AI가 동화를 만들어주는 웹 플랫폼입니다. 
  이미지를 업로드하면 AI가 그림 속 주요 요소를 분석하고, 이를 바탕으로 500자 분량의 한국어 동화를 생성합니다.
생성된 동화는 Google Cloud TTS를 통해 남성·여성 목소리로 낭독되며, 저장 후 언제든지 다시 들을 수 있습니다.`,
    features: [
      "이미지 업로드 → AI 이미지 분석 → 한국어 동화 생성",
      "저장 전 동화 미리보기 및 TTS 미리듣기",
      "남성·여성 목소리 선택 후 동화와 음성 저장",
      "생성한 동화 목록 조회·상세 보기·삭제",
      "JWT 기반 로그인·회원가입 및 인증 유지",
    ],
    erdImageUrl: "/images/imagetostory/imagetostory_erd.png",
    isDeployed: true,
    testAccount: { id: "1234", password: "1234" },
    background: `'아이들이 그린 그림이나 가족 사진 등으로 동화를 만들 수 있으면 어떨까?'라는 생각에서 시작하였습니다.
어렸을 때 부모님께서 동화책을 읽어주셨던 기억도 이 아이디어에 영감을 주었습니다.
직접 이야기를 지어주고 싶지만 익숙하지 않은 분들을 위해, 그림 한 장으로 동화를 만들어주는 서비스를 개발하였습니다.
개발 과정에서 인증, 파일 스토리지, 비용 최적화까지 실제 서비스 수준의 구현을 목표로 삼았습니다.`,
    challenges: [
      "TTS 생성과 동화 저장을 하나의 흐름으로 묶었더니, TTS 생성에 실패하면 동화 자체가 저장되지 않는 문제가 있었습니다.",
      "동화 생성과 동시에 TTS를 생성하니, 저장하지 않는 경우에도 API 비용이 발생하는 문제가 있었습니다.",
      "Render 재시작 시 로컬에 저장된 그림과 음성 파일이 모두 초기화되는 문제가 있었습니다.",
    ],
    solution: [
      "TTS 실패를 별도로 처리해 음성 생성 여부와 관계없이 동화는 정상 저장되도록 흐름을 분리하였습니다.",
      "동화 확정 저장 시에만 TTS 전체를 생성하고, 미리듣기는 150자로 제한해 불필요한 API 비용을 줄였습니다.",
      "Supabase Storage를 활용해 그림과 음성 파일을 클라우드에 저장하도록 변경하였습니다.",
    ],
  },

  {
    id: 3,
    title: "AI English Trainer",
    description:
      "단어 검색·문제 생성·단어장 관리를 AI로 제공하는 영어 학습 웹 서비스",
    details:
      "단어 입력 시 뜻·예문·유의어를, 주제 입력 시 토익·영작 문제를 AI가 생성해주는 영어 학습 웹 서비스",
    role: "전체 개발(개인 프로젝트)",
    techStack: ["React", "Node.js", "Spring Boot", "MySQL"],
    imageUrls: [
      "/images/aienglishtrainer/aienglishtrainer_10.png",
      "/images/aienglishtrainer/aienglishtrainer_1.png",
      "/images/aienglishtrainer/aienglishtrainer_2.png",
      "/images/aienglishtrainer/aienglishtrainer_3.png",
      "/images/aienglishtrainer/aienglishtrainer_4.png",
      "/images/aienglishtrainer/aienglishtrainer_5.png",
      "/images/aienglishtrainer/aienglishtrainer_6.png",
      "/images/aienglishtrainer/aienglishtrainer_7.png",
      "/images/aienglishtrainer/aienglishtrainer_8.png",
      "/images/aienglishtrainer/aienglishtrainer_9.png",
    ],
    imageCaptions: [
      "로그인 - 테스트 계정 및 구글·카카오·네이버 로그인을 지원합니다.",
      "예문 생성 - 영어 단어를 입력하면 여러 뜻과 품사를 확인할 수 있습니다.",
      "예문 생성 - 영어 단어를 입력하면 각 뜻에 해당하는 예문을 난이도별로 확인할 수 있습니다.",
      "예문 생성 - 영어 단어를 입력하면 그 단어의 유의어와 반의어를 확인할 수 있습니다.",
      "영어 문제(토익 모드) - 원하는 주제(예: 여행)를 입력하면 TOEIC Part 5·6·7 문제가 각 2문항씩 출제됩니다.",
      "영어 문제(영작 모드) - 원하는 주제(예: 여행)를 입력하면 영작·한영 번역·문장 교정·단답형 문제가 각 1문항씩 출제되며, 모범 답안도 함께 제공됩니다.",
      "단어장 - 저장한 단어 및 예문의 뜻을 확인할 수 있습니다.",
      "저장된 문제 - 저장한 문제와 정답 및 해설을 확인할 수 있습니다.",
      "Chatbot - 챗봇으로 영어 관련 질문을 주고받을 수 있습니다.",
      "TTS 설정 - TTS로 단어와 문장을 들을 수 있으며, 목소리 성별과 재생 속도를 설정할 수 있습니다.",
    ],
    githubUrls: [
      {
        label: "Frontend",
        url: "https://github.com/HeoSeonJin0504/ai-english-trainer-front.git",
      },
      {
        label: "Backend(Node.js)",
        url: "https://github.com/HeoSeonJin0504/ai-english-trainer-node.git",
      },
      {
        label: "Backend(Spring Boot)",
        url: "https://github.com/HeoSeonJin0504/ai-english-trainer-spring.git",
      },
    ],
    demoUrl: "https://ai-english-trainer.vercel.app/",
    videoUrl: "/videos/aienglishtrainer.mp4",
    period: "2025.11 - ing",
    teamSize: "개인 프로젝트",
    fullDescription: `AI English Trainer는 생성형 AI를 활용한 개인 맞춤형 영어 학습 플랫폼입니다.
영어 단어를 입력하면 AI가 뜻·품사·예문(초·중·고급)·유의어·반의어를 자동으로 생성해줍니다.
생성된 단어 및 예문은 Google Cloud TTS를 통해 남성·여성 목소리로 들을 수 있으며, 저장 후 언제든지 다시 확인할 수 있습니다.
또한 주제를 입력하면 토익·영작 문제를 생성할 수 있으며, 저장 후 언제든지 다시 확인할 수 있습니다.
`,
    features: [
      "영어 단어 입력 시 AI가 뜻·품사·예문(초·중·고급)·유의어·반의어 생성",
      "생성된 단어·예문을 TTS로 남성·여성 목소리로 듣기",
      "주제 입력 시 TOEIC Part 5·6·7 또는 영작 문제 생성",
      "학습한 단어·예문·문제 저장 및 조회",
      "챗봇으로 실시간 영어 질문 및 문법 교정",
      "JWT + httpOnly Cookie 기반 인증으로 사용자별 데이터 분리",
      "구글·카카오·네이버 OAuth 소셜 로그인 지원",
    ],
    erdImageUrl: "/images/aienglishtrainer/ai_english_trainer_erd.png",
    isDeployed: true,
    testAccount: { id: "1234", password: "1234" },
    background: `영어 공부를 할 때 단어장, 문제집, 강의 영상을 활용하는 방식도 충분하지만, AI를 학습에 접목하면 예문과 문제를 더 다양하게 제공할 수 있겠다고 생각했습니다.
사용자가 AI에게 직접 물어보는 것보다, 단어를 입력하면 품사·유의어·반의어·예문을 한눈에 보여주고, 주제만 입력하면 문제를 출제해주는 서비스라면 더 간편하고 재미있게 공부할 수 있을 것 같았습니다.
생성된 내용을 저장해 복습까지 이어질 수 있도록, 학습 흐름을 하나로 묶은 서비스를 개발하였습니다.`,
    challenges: [
      "AI가 JSON 형식을 지키지 않거나 필드를 누락해 파싱이 실패하는 경우가 있었습니다.",
      "단어 생성·문제 생성·챗봇 등 기능마다 원하는 결과를 일관되게 얻을 수 있는 프롬프트를 설계하는 것이 어려웠습니다.",
      "Node.js에서 Spring Boot로 전환 시, 어노테이션 기반 문법과 Spring이 객체를 직접 관리하는 DI 방식 등이 낯설어 적응하는 데 어려움이 있었습니다.",
    ],
    solution: [
      "프롬프트에 JSON 형식과 필드 규칙을 명시하고, 응답에서 JSON만 추출하는 파싱 로직을 별도로 구현하였습니다.",
      "프롬프트의 틀을 직접 작성한 뒤 AI 피드백을 받아 반복적으로 개선하였습니다. 원하는 문제 유형의 예시를 함께 제시해 일관된 형태로 출제되도록 유도하였습니다. 작성한 프롬프트는 AI와 번역기를 활용해 영어로 옮기고, 오역 여부를 직접 검토해 최종 완성하였습니다.",
      "기존 Node.js 코드와 비교하며 대응되는 Spring Boot 구현 방식을 파악하였고, AI를 활용해 낯선 문법과 구조를 익혀가며 전환하였습니다.",
    ],
  },
];
