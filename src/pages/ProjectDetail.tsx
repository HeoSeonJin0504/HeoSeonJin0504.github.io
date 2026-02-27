import React, { useState } from 'react'; 
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { projects } from "../data/projects";

const DetailContainer = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  padding-bottom: 4rem;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);

  @media (min-width: 768px) {
    padding: 0 var(--spacing-lg);
  }
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.75rem 0;
  margin-bottom: 2rem;

  &:hover {
    color: var(--color-accent);
  }
`;

const BackIcon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
`;

const Hero = styled.div`
  margin-bottom: 3rem;
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-text-primary);
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
  color: var(--color-text-secondary);
  font-size: 0.95rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const MetaIcon = styled.svg`
  width: 1rem;
  height: 1rem;
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2rem;
`;

const TechBadge = styled.span`
  padding: 0.5rem 1rem;
  background-color: var(--color-accent-light);
  border: 1px solid var(--color-accent);
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  color: var(--color-accent);
  font-weight: 500;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--color-accent);
  color: white;
  border-radius: var(--radius-sm);
  font-size: 0.95rem;
  font-weight: 500;
  transition: all var(--transition-base);
  box-shadow: 0 2px 8px var(--color-shadow);

  &:hover {
    background-color: var(--color-accent-hover);
    transform: translateY(-2px);
  }
`;

const OutlineLink = styled(Link)`
  background-color: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.5);
  color: #10b981;
  box-shadow: none;

  &:hover {
    background-color: rgba(16, 185, 129, 0.18);
    border-color: #10b981;
    color: #10b981;
  }
`;

const SoloMeta = styled(MetaItem)`
  color: #d97706;
  background-color: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.35);
  border-radius: var(--radius-sm);
  padding: 0.15rem 0.6rem;
  font-weight: 500;
`;

const LinkIcon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
`;

const DeployedBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: rgba(34, 197, 94, 0.1);
  color: #16a34a;
  border: 1px solid rgba(34, 197, 94, 0.4);
  border-radius: var(--radius-sm);
  font-size: 0.95rem;
  font-weight: 500;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--color-accent);
`;

const SectionContent = styled.p`
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.8;
  white-space: pre-line;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;

  &:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: var(--color-accent);
    font-weight: bold;
  }
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
`;

const BulletItem = styled.li`
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;

  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: var(--color-accent);
    font-weight: bold;
  }
`;

const NotFound = styled.div`
  text-align: center;
  padding: 4rem 0;
`;

const NotFoundTitle = styled.h2`
  font-size: 2rem;
  color: var(--color-text-primary);
  margin-bottom: 1rem;
`;

const NotFoundText = styled.p`
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
`;

const VideoSection = styled.section`
  margin-bottom: 3rem;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 비율 */
  height: 0;
  overflow: hidden;
  border-radius: var(--radius-lg);
  box-shadow: 0 4px 12px var(--color-shadow);
  background-color: var(--color-bg-secondary);
`;

const VideoIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: var(--radius-lg);
`;

const VideoElement = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: var(--radius-lg);
`;

const ImageSliderContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
`;

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 4px 12px var(--color-shadow);
`;

const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain; 
  transition: opacity 0.3s ease;
`;

const SliderImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-bg-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
`;

const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-base);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;

  &:hover {
    background-color: white;
    transform: translateY(-50%) scale(1.1);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const PrevButton = styled(SliderButton)`
  left: 1rem;
`;

const NextButton = styled(SliderButton)`
  right: 1rem;
`;

const ButtonIcon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
  color: var(--color-text-primary);
`;

const ImageIndicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const ImageCaption = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text-primary);
  line-height: 1.7;
  min-height: 1.7em;
  padding: 0.5rem 1.5rem;
  background-color: var(--color-bg-secondary);
  border-radius: var(--radius-sm);
`;

const Indicator = styled.button<{ $active: boolean }>`
  width: ${(props) => (props.$active ? "24px" : "8px")};
  height: 8px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.$active ? "var(--color-accent)" : "var(--color-border)"};
  border: none;
  cursor: pointer;
  transition: all var(--transition-base);

  &:hover {
    background-color: var(--color-accent);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 4px 12px var(--color-shadow);
  margin-bottom: 1.5rem;
  background-color: var(--color-bg-secondary);
  cursor: pointer;
  transition: all var(--transition-base);
  position: relative;

  &::after {
    content: '클릭하여 확대';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.75rem;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    color: white;
    font-size: 0.875rem;
    text-align: center;
    opacity: 0;
    transition: opacity var(--transition-base);
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px var(--color-shadow);

    &::after {
      opacity: 1;
    }
  }
`;

const DiagramImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform var(--transition-base);

  ${ImageContainer}:hover & {
    transform: scale(1.02);
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  font-size: 1rem;
  background-color: var(--color-bg-secondary);
`;

// 테스트 계정 관련 스타일 컴포넌트
const TestAccountBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.875rem 1.25rem;
  background: linear-gradient(135deg, rgba(234, 179, 8, 0.08) 0%, rgba(245, 158, 11, 0.06) 100%);
  border: 1px solid rgba(234, 179, 8, 0.35);
  border-radius: var(--radius-md);
  flex-wrap: wrap;
  row-gap: 0.5rem;
  margin-bottom: 3rem;
`;

const TestAccountLabel = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  color: #92400e;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  flex-shrink: 0;
`;

const TestAccountDivider = styled.span`
  width: 1px;
  height: 1rem;
  background-color: rgba(180, 140, 0, 0.3);
  flex-shrink: 0;

  @media (max-width: 480px) {
    display: none;
  }
`;

const TestAccountFields = styled.div`
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
  row-gap: 0.35rem;
`;

const TestAccountField = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const TestAccountFieldLabel = styled.span`
  font-size: 0.8rem;
  color: #92400e;
  font-weight: 600;
`;

const TestAccountValue = styled.code`
  font-size: 0.85rem;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 700;
  color: #78350f;
  background-color: rgba(234, 179, 8, 0.15);
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  letter-spacing: 0.03em;
  cursor: pointer;
  transition: background-color var(--transition-fast);
  user-select: all;

  &:hover {
    background-color: rgba(234, 179, 8, 0.28);
  }
`;

const TestAccountCopyHint = styled.span`
  font-size: 0.73rem;
  color: #a16207;
  margin-left: auto;
  white-space: nowrap;
  opacity: 0.75;

  @media (max-width: 600px) {
    display: none;
  }
`;

// 모달 관련 스타일 컴포넌트 추가
const ModalOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 2rem;
  animation: fadeIn 0.3s ease;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 95vw;
  max-height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: var(--radius-md);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  top: -3rem;
  right: 0;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: all var(--transition-base);

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
`;

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = React.useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const project = projects.find((p) => p.id === Number(id));

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handlePrevImage = () => {
    if (project) {
      setCurrentImageIndex((prev: number) =>
        prev === 0 ? project.imageUrls.length - 1 : prev - 1
      );
      setImageError(false);
    }
  };

  const handleNextImage = () => {
    if (project) {
      setCurrentImageIndex((prev: number) =>
        prev === project.imageUrls.length - 1 ? 0 : prev + 1
      );
      setImageError(false);
    }
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentImageIndex(index);
    setImageError(false);
  };

  const getYouTubeEmbedUrl = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11
      ? `https://www.youtube.com/embed/${match[2]}`
      : null;
  };

  const getVimeoEmbedUrl = (url: string) => {
    const regExp = /vimeo.com\/(\d+)/;
    const match = url.match(regExp);
    return match ? `https://player.vimeo.com/video/${match[1]}` : null;
  };

  const renderVideo = (videoUrl: string) => {
    const youtubeUrl = getYouTubeEmbedUrl(videoUrl);
    if (youtubeUrl) {
      return (
        <VideoIframe
          src={youtubeUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="프로젝트 시연 영상"
        />
      );
    }

    const vimeoUrl = getVimeoEmbedUrl(videoUrl);
    if (vimeoUrl) {
      return (
        <VideoIframe
          src={vimeoUrl}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="프로젝트 시연 영상"
        />
      );
    }

    if (videoUrl.match(/\.(mp4|webm|ogg)$/i)) {
      return (
        <VideoElement controls>
          <source src={videoUrl} type="video/mp4" />
          브라우저가 비디오를 지원하지 않습니다.
        </VideoElement>
      );
    }

    return null;
  };

  const handleImageClick = (imageUrl: string) => {
    setModalImage(imageUrl);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  // ESC 키로 모달 닫기
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (modalImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [modalImage]);

  if (!project) {
    return (
      <DetailContainer>
        <Container>
          <BackButton onClick={() => navigate("/")}>
            <BackIcon
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </BackIcon>
            돌아가기
          </BackButton>
          <NotFound>
            <NotFoundTitle>프로젝트를 찾을 수 없습니다</NotFoundTitle>
            <NotFoundText>요청하신 프로젝트가 존재하지 않습니다.</NotFoundText>
          </NotFound>
        </Container>
      </DetailContainer>
    );
  }

  return (
    <DetailContainer>
      <Container>
        <BackButton onClick={() => navigate("/")}>
          <BackIcon
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </BackIcon>
          돌아가기
        </BackButton>

        <Hero>
          {/* 👇 이미지 슬라이더 */}
          <ImageSliderContainer>
            <SliderWrapper>
              {!imageError ? (
                <SliderImage
                  src={project.imageUrls[currentImageIndex]}
                  alt={`${project.title} - ${currentImageIndex + 1}`}
                  onError={() => setImageError(true)}
                />
              ) : (
                <SliderImagePlaceholder>이미지 준비 중</SliderImagePlaceholder>
              )}

              {/* 이전/다음 버튼 (이미지가 2개 이상일 때만 표시) */}
              {project.imageUrls.length > 1 && (
                <>
                  <PrevButton onClick={handlePrevImage}>
                    <ButtonIcon
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </ButtonIcon>
                  </PrevButton>
                  <NextButton onClick={handleNextImage}>
                    <ButtonIcon
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </ButtonIcon>
                  </NextButton>
                </>
              )}
            </SliderWrapper>

            {/* 이미지 캡션 - 이미지 바로 아래 */}
            {project.imageCaptions && project.imageCaptions[currentImageIndex] && (
              <ImageCaption>
                {project.imageCaptions[currentImageIndex]}
              </ImageCaption>
            )}

            {/* 이미지 인디케이터 (이미지가 2개 이상일 때만 표시) */}
            {project.imageUrls.length > 1 && (
              <ImageIndicators>
                {project.imageUrls.map((_, index) => (
                  <Indicator
                    key={index}
                    $active={index === currentImageIndex}
                    onClick={() => handleIndicatorClick(index)}
                  />
                ))}
              </ImageIndicators>
            )}
          </ImageSliderContainer>

          <Header>
            <Title>{project.title}</Title>
            <Meta>
              {project.period && (
                <MetaItem>
                  <MetaIcon
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </MetaIcon>
                  {project.period}
                </MetaItem>
              )}
              {project.role && (
                <MetaItem>
                  <MetaIcon
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </MetaIcon>
                  {project.role}
                </MetaItem>
              )}
              {project.teamSize && (
                project.teamSize === '개인 프로젝트' ? (
                  <SoloMeta>
                    <MetaIcon
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </MetaIcon>
                    {project.teamSize}
                  </SoloMeta>
                ) : (
                  <MetaItem>
                    <MetaIcon
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </MetaIcon>
                    {project.teamSize}
                  </MetaItem>
                )
              )}
            </Meta>
            <Description>{project.description}</Description>
            <TechStack>
              {project.techStack.map((tech) => (
                <TechBadge key={tech}>{tech}</TechBadge>
              ))}
            </TechStack>
          </Header>

          {/* ... Links, VideoSection, 나머지 섹션들은 그대로 ... */}
          <Links>
            {project.githubUrls.map((github, idx) => (
              <Link
                key={idx}
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </LinkIcon>
                {github.label}
              </Link>
            ))}
            {project.demoUrl && project.demoUrl.startsWith('http') ? (
              <OutlineLink
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </LinkIcon>
                페이지 방문
              </OutlineLink>
            ) : project.isDeployed ? (
              <DeployedBadge>
                <LinkIcon
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </LinkIcon>
                배포 완료 (링크 준비 중)
              </DeployedBadge>
            ) : null}
          </Links>

          {/* 테스트 계정 */}
          {project.testAccount && (
            <TestAccountBox>
              <TestAccountLabel>테스트 계정</TestAccountLabel>
              <TestAccountDivider />
              <TestAccountFields>
                <TestAccountField>
                  <TestAccountFieldLabel>ID</TestAccountFieldLabel>
                  <TestAccountValue title="">
                    {project.testAccount.id}
                  </TestAccountValue>
                </TestAccountField>
                <TestAccountField>
                  <TestAccountFieldLabel>PW</TestAccountFieldLabel>
                  <TestAccountValue title="">
                    {project.testAccount.password}
                  </TestAccountValue>
                </TestAccountField>
              </TestAccountFields>
              <TestAccountCopyHint></TestAccountCopyHint>
            </TestAccountBox>
          )}
        </Hero>

        {project.videoUrl && (
          <VideoSection>
            <SectionTitle>시연 영상</SectionTitle>
            <VideoContainer>{renderVideo(project.videoUrl)}</VideoContainer>
          </VideoSection>
        )}

        {project.fullDescription && (
          <Section>
            <SectionTitle>프로젝트 소개</SectionTitle>
            <SectionContent>{project.fullDescription}</SectionContent>
          </Section>
        )}

        {project.features && project.features.length > 0 && (
          <Section>
            <SectionTitle>주요 기능</SectionTitle>
            <FeatureList>
              {project.features.map((feature, index) => (
                <FeatureItem key={index}>{feature}</FeatureItem>
              ))}
            </FeatureList>
          </Section>
        )}

        {project.background && (
          <Section>
            <SectionTitle>개발 배경</SectionTitle>
            <SectionContent>{project.background}</SectionContent>
          </Section>
        )}

        {project.challenges && project.challenges.length > 0 && (
          <Section>
            <SectionTitle>마주친 문제</SectionTitle>
            <BulletList>
              {project.challenges.map((item, index) => (
                <BulletItem key={index}>{item}</BulletItem>
              ))}
            </BulletList>
          </Section>
        )}

        {project.solution && project.solution.length > 0 && (
          <Section>
            <SectionTitle>해결 방법</SectionTitle>
            <BulletList>
              {project.solution.map((item, index) => (
                <BulletItem key={index}>{item}</BulletItem>
              ))}
            </BulletList>
          </Section>
        )}

        {project.erdImageUrl && (
          <Section>
            <SectionTitle>데이터베이스 ERD</SectionTitle>
            {project.erdImageUrl ? (
              <ImageContainer onClick={() => handleImageClick(project.erdImageUrl!)}>
                <DiagramImage src={project.erdImageUrl} alt="ERD 다이어그램" />
              </ImageContainer>
            ) : (
              <ImagePlaceholder>ERD 이미지 준비 중</ImagePlaceholder>
            )}
          </Section>
        )}
      </Container>

      {/* 이미지 확대 모달 */}
      <ModalOverlay $isOpen={!!modalImage} onClick={closeModal}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={closeModal}>×</CloseButton>
          {modalImage && <ModalImage src={modalImage} alt="확대 이미지" />}
        </ModalContent>
      </ModalOverlay>
    </DetailContainer>
  );
};

export default ProjectDetail;