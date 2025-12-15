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

const ProjectImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: var(--radius-lg);
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px var(--color-shadow);
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 400px;
  background-color: var(--color-bg-secondary);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  margin-bottom: 2rem;
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
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 3rem;
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
  background-color: transparent;
  color: var(--color-accent);
  border: 1px solid var(--color-accent);

  &:hover {
    background-color: var(--color-accent-light);
  }
`;

const LinkIcon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
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

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = React.useState(false);

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
            {project.demoUrl && (
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
                Live Demo
              </OutlineLink>
            )}
          </Links>
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

        {project.challenges && (
          <Section>
            <SectionTitle>개발 과정</SectionTitle>
            <SectionContent>{project.challenges}</SectionContent>
          </Section>
        )}

        {project.results && (
          <Section>
            <SectionTitle>프로젝트 성과</SectionTitle>
            <SectionContent>{project.results}</SectionContent>
          </Section>
        )}
      </Container>
    </DetailContainer>
  );
};

export default ProjectDetail;
