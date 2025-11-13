import type { RecruitDetail } from '@/interfaces/_recruitInterfaces.js'

const dummyRecruitDetailBase: Omit<RecruitDetail, 'author' | 'is_bookmarked'> =
  {
    study_name: 'AI 스터디 심화반',
    uuid: 'study-uuid-12345',
    title: 'AI 스터디 심화반 모집',
    content: ` # 🤖 AI 심화 프로젝트 팀원 모집

## 📋 프로젝트 개요
**AI 기반 챗봇 개발** 프로젝트를 함께 진행할 **열정적인 팀원**을 모집합니다!

### 📅 일정 및 진행 방식
- **정기 모임**: 매주 화/목 저녁 7시 (온라인/오프라인 병행)
- **기간**: 3개월 (2024.01 ~ 2024.03)
- **진행 방식**: 애자일 스프린트 방식

### 🎯 주요 목표
1. **자연어 처리 모델** 구현 및 최적화
2. **실시간 대화** 기능 개발
3. **웹 인터페이스** 구축
4. **배포 및 운영** 경험

### 💻 기술 스택
#### Backend
- Python (FastAPI)
- PyTorch / TensorFlow
- PostgreSQL

#### Frontend
- React + TypeScript
- TailwindCSS

#### Infrastructure
- Docker
- AWS (EC2, RDS)

### 🔍 모집 대상
> **초급자도 환영!** 함께 성장하는 것이 목표입니다.

- [x] Python 기초 지식
- [x] 머신러닝/딥러닝에 대한 관심
- [x] 협업 도구 사용 가능 (Git, Slack)
- [ ] AI/NLP 실무 경험 (우대사항)

### 📞 지원 방법
**관심 있으신 분은 아래 정보와 함께 연락주세요:**

1. 간단한 자기소개
2. 프로젝트 참여 동기
3. 보유 기술 스택
4. 포트폴리오 링크 (선택)

---

<img src="https://camo.githubusercontent.com/3cae61090608b8cbd681f5825ca5ac76af8d8d3ee12024926d51c5480aef5d6c/68747470733a2f2f796176757a63656c696b65722e6769746875622e696f2f73616d706c652d696d616765732f696d6167652d313032312e6a7067" />

> 💡 **Tip**: 이 프로젝트를 통해 실무 경험을 쌓고 포트폴리오를 만들어보세요!

**함께 멋진 AI 프로젝트를 만들어봅시다! 🚀**

This includes:

• Headers (h1, h2, h3)
• Bold and italic text
• Lists (ordered, unordered, checkboxes)
• Emojis
• Code blocks
• Blockquotes
• Horizontal rule
• Tables structure
• Links format
`,
    images: [
      'https://example.com/images/ai_project_1.png',
      'https://example.com/images/ai_project_2.png',
    ],
    attachments: [
      {
        id: 51,
        file_name: 'ai_project_guide.pdf',
        url: 'https://example.com/files/ai_project_guide.pdf',
        size: 100000,
      },
      {
        id: 52,
        file_name: 'arch_logo.jpg',
        url: 'https://media.istockphoto.com/id/2206580869/ko/%EC%82%AC%EC%A7%84/%ED%97%98%EC%A4%80%ED%95%9C-%ED%95%B4%EC%95%88%EC%84%A0%EA%B3%BC-%EB%B0%94%EB%8B%A4-%EC%BD%94%EB%A5%B4%EC%8B%9C%EC%B9%B4%EC%9D%98-%EB%86%92%EC%9D%80-%EC%A0%84%EB%A7%9D.jpg?s=2048x2048&w=is&k=20&c=UQNSU7WinhgHAIlLv2HsqwxCoc2E_aaPN1FJc1xfjYQ=',
        size: 109000,
      },
    ],
    expected_headcount: 5,
    estimated_fee: 100000,
    lectures: [
      {
        thumbnail_url: 'https://example.com/images/lecture_thumb.png',
        name: '딥러닝 프로젝트 실습',
        instructor: '홍길동',
        link: 'https://example.com/lectures/101',
        price: 50000,
      },
      {
        thumbnail_url: 'https://example.com/images/lecture_thumb.png',
        name: '셸로우 러닝 프로젝트 이론',
        instructor: '길동형',
        link: 'https://example.com/lectures/101',
        price: 100000,
      },
    ],
    tags: ['AI', 'Python', '딥러닝'],
    close_at: '2025-11-30',
    created_at: '2025-10-16T10:20:00Z',
    view_count: 120,
    bookmark_count: 5,
  }

export default dummyRecruitDetailBase
