"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, Share2, Star, Tv, Film, User } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const mockActors = [
  {
    id: "park-jihoon",
    name: "박지훈",
    nameEn: "Park Ji-hoon",
    gender: "male",
    image: "/박지훈.jpg",
    followers: "4.2M",
    bio: "아역 배우 출신으로 '프로듀스 101 시즌 2'를 통해 워너원으로 데뷔하며 큰 사랑을 받았습니다. 이후 '약한영웅 Class 1', '환상연가' 등에서 탄탄한 연기력을 인정받았으며, 영화 '왕과 사는 남자'를 통해 2026년 백상예술대상 신인상을 거머쥐며 대세 배우로 자리매김했습니다.",
    works: [
      { year: 2026, title: "왕과 사는 남자", role: "단종", type: "Movie" },
      { year: 2024, title: "오드리", role: "강기훈", type: "Movie" },
      { year: 2024, title: "환상연가", role: "사조 현 / 악희", type: "Drama" },
      { year: 2022, title: "약한영웅 Class 1", role: "연시은", type: "Drama" },
      { year: 2021, title: "멀리서 보면 푸른 봄", role: "여준", type: "Drama" },
      { year: 2020, title: "연애혁명", role: "공주영", type: "Drama" }
    ],
    news: [
      { title: "박지훈, 영화 '왕과 사는 남자'로 '천만 배우' 반열 올라", date: "2026.04.15", link: "https://www.segye.com/newsView/20260415514068" },
      { title: "박지훈, 내년 해병대 수색대 입대 발표... 당찬 포부", date: "2026.05.20", link: "https://news.sbs.co.kr/news/endPage.do?news_id=N1007604312" }
    ]
  },
  {
    id: "seo-inguk",
    name: "서인국",
    nameEn: "Seo In-guk",
    gender: "male",
    image: "/서인국.jpg",
    followers: "5.1M",
    bio: "2009년 '슈퍼스타K' 우승으로 데뷔한 후, tvN '응답하라 1997'의 윤윤제 역으로 신드롬을 일으키며 대중의 큰 사랑을 받았습니다. 특유의 섬세한 감정 연기와 매력적인 눈빛으로 '이재, 곧 죽습니다'의 최이재 역, '미남당'의 남한준 역 등을 완벽하게 소화하며 한계 없는 캐릭터 소화력을 보여주고 있습니다.",
    works: [
      { year: 2023, title: "이재, 곧 죽습니다", role: "최이재", type: "Drama" },
      { year: 2022, title: "미남당", role: "남한준", type: "Drama" },
      { year: 2021, title: "어느 날 우리 집 현관으로 멸망이 들어왔다", role: "멸망", type: "Drama" },
      { year: 2012, title: "응답하라 1997", role: "윤윤제", type: "Drama" }
    ],
    news: [
      { title: "서인국, 새 드라마 '내일도 출근!'에서 로맨스 장인 면모 과시", date: "2026.07.21", link: "https://www.bntnews.co.kr/article/view/bnt202607210043" },
      { title: "서인국-박지현, '내일도 출근!' 사내 비밀 연애 공식 발표 '화제'", date: "2026.07.22", link: "https://www.chosun.com/entertainments/entertain_photo/2026/07/21/L4B2Y7K2Z5V7H9J/" }
    ]
  },
  {
    id: "byun-wooseok",
    name: "변우석",
    nameEn: "Byun Woo-seok",
    gender: "male",
    image: "/변우석.jfif",
    followers: "6.8M",
    bio: "모델 출신 배우로 훤칠한 키와 독보적인 피지컬, 그리고 따뜻한 눈빛 연기로 여심을 사로잡고 있습니다. tvN '선재 업고 튀어'의 류선재 역으로 글로벌 신드롬을 일으키며 단숨에 톱스타 반열에 올랐습니다. 로맨스부터 스릴러까지 한계 없는 연기 스펙트럼을 보여주고 있습니다.",
    works: [
      { year: 2024, title: "선재 업고 튀어", role: "류선재", type: "Drama" },
      { year: 2023, title: "힘쎈여자 강남순", role: "류시오", type: "Drama" },
      { year: 2022, title: "20세기 소녀", role: "풍운호", type: "Movie" },
      { year: 2020, title: "청춘기록", role: "원해효", type: "Drama" }
    ],
    news: [
      { title: "변우석, '나 혼자만 레벨업' 실사판 캐스팅 확정... 한소희와 호흡", date: "2026.06.10", link: "https://www.osen.co.kr/article/G1112345678" },
      { title: "변우석, 'GQ KOREA' 화보서 파격적인 장발 젠더리스 스타일 완벽 소화", date: "2026.07.15", link: "https://www.chosun.com/entertainments/entertain_photo/2026/07/15/P9C4L1Q8X2N6M3K/" }
    ]
  },
  {
    id: "kim-jiwon",
    name: "김지원",
    nameEn: "Kim Ji-won",
    gender: "female",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=60",
    followers: "10.2M",
    bio: "탄탄한 연기력과 아름다운 비주얼로 큰 사랑을 받고 있는 배우입니다. '눈물의 여왕', '나의 해방일지' 등 다수의 흥행작에서 주연을 맡으며 믿고 보는 배우로 자리매김했습니다.",
    works: [
      { year: 2024, title: "눈물의 여왕", role: "홍해인", type: "Drama" },
      { year: 2022, title: "나의 해방일지", role: "염미정", type: "Drama" },
      { year: 2020, title: "도시남녀의 사랑법", role: "이은오", type: "Drama" }
    ],
    news: [
      { title: "김지원, 차기작 검토 중... 글로벌 팬미팅 성료", date: "2026.08.01", link: "#" }
    ]
  },
  {
    id: "lee-jieun",
    name: "이지은 (아이유)",
    nameEn: "Lee Ji-eun (IU)",
    gender: "female",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=60",
    followers: "32.5M",
    bio: "가수 겸 배우로 대체 불가한 매력을 지닌 아티스트입니다. '나의 아저씨', '호텔 델루나'에 이어 다수의 작품에서 깊이 있는 연기를 선보이며 대중과 평단의 호평을 동시에 받고 있습니다.",
    works: [
      { year: 2025, title: "폭싹 속았수다", role: "애순", type: "Drama" },
      { year: 2022, title: "브로커", role: "소영", type: "Movie" },
      { year: 2019, title: "호텔 델루나", role: "장만월", type: "Drama" },
      { year: 2018, title: "나의 아저씨", role: "이지안", type: "Drama" }
    ],
    news: [
      { title: "아이유, 새 앨범 발매와 동시에 연기 활동 박차", date: "2026.07.10", link: "#" }
    ]
  },
  {
    id: "ahn-hyoseop",
    name: "안효섭",
    nameEn: "Ahn Hyo-seop",
    gender: "male",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60",
    followers: "8.5M",
    bio: "훈훈한 비주얼과 몰입감 있는 연기력으로 사랑받는 대세 배우입니다. '사내맞선', '낭만닥터 김사부' 등에서 다채로운 캐릭터를 소화하며 톱스타 반열에 올랐습니다.",
    works: [
      { year: 2023, title: "너의 시간 속으로", role: "구연준 / 남시헌", type: "Drama" },
      { year: 2022, title: "사내맞선", role: "강태무", type: "Drama" }
    ],
    news: [
      { title: "안효섭, 차기작 촬영 돌입... 팬들과의 만남 기대", date: "2026.07.20", link: "#" }
    ]
  },
  {
    id: "park-bogum",
    name: "박보검",
    nameEn: "Park Bo-gum",
    gender: "male",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60",
    followers: "12.3M",
    bio: "따뜻한 미소와 탄탄한 연기력으로 남녀노소 모두에게 사랑받는 국민 배우입니다. '응답하라 1988', '구르미 그린 달빛' 등으로 큰 인기를 끌었습니다.",
    works: [
      { year: 2024, title: "폭싹 속았수다", role: "관식", type: "Drama" },
      { year: 2020, title: "청춘기록", role: "사혜준", type: "Drama" }
    ],
    news: [
      { title: "박보검, 뮤지컬 데뷔작 전석 매진 신화", date: "2026.06.15", link: "#" }
    ]
  },
  {
    id: "lee-hyeri",
    name: "혜리",
    nameEn: "Lee Hye-ri",
    gender: "female",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60",
    followers: "7.2M",
    bio: "걸스데이 출신으로 통통 튀는 매력과 자연스러운 생활 연기를 보여주는 배우입니다. '응답하라 1988'의 덕선 역으로 인생 캐릭터를 만났습니다.",
    works: [
      { year: 2021, title: "간 떨어지는 동거", role: "이담", type: "Drama" },
      { year: 2015, title: "응답하라 1988", role: "성덕선", type: "Drama" }
    ],
    news: [
      { title: "혜리, 예능과 드라마 오가며 맹활약", date: "2026.07.12", link: "#" }
    ]
  },
  {
    id: "song-joongki",
    name: "송중기",
    nameEn: "Song Joong-ki",
    gender: "male",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60",
    followers: "11.1M",
    bio: "부드러운 카리스마와 뛰어난 연기력으로 글로벌 팬덤을 보유한 한류 스타입니다. '빈센조', '재벌집 막내아들' 등에서 대체 불가한 매력을 선보였습니다.",
    works: [
      { year: 2022, title: "재벌집 막내아들", role: "진도준 / 윤현우", type: "Drama" },
      { year: 2021, title: "빈센조", role: "빈센조 까사노", type: "Drama" }
    ],
    news: [
      { title: "송중기, 해외 영화제 초청... 글로벌 행보", date: "2026.05.22", link: "#" }
    ]
  },
  {
    id: "song-hyekyo",
    name: "송혜교",
    nameEn: "Song Hye-kyo",
    gender: "female",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&auto=format&fit=crop&q=60",
    followers: "15.4M",
    bio: "대한민국을 대표하는 최고의 여배우 중 한 명으로, 압도적인 비주얼과 깊이 있는 연기력을 자랑합니다. '더 글로리'를 통해 연기 변신에 성공하며 극찬을 받았습니다.",
    works: [
      { year: 2022, title: "더 글로리", role: "문동은", type: "Drama" },
      { year: 2016, title: "태양의 후예", role: "강모연", type: "Drama" }
    ],
    news: [
      { title: "송혜교, 차기작 스크린 복귀 검토 중", date: "2026.06.30", link: "#" }
    ]
  },
  {
    id: "park-jihyun",
    name: "박지현",
    nameEn: "Park Ji-hyun",
    gender: "female",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60",
    followers: "2.1M",
    bio: "세련된 마스크와 안정적인 연기력으로 주목받는 라이징 스타입니다. '재벌집 막내아들'에서 모현민 역으로 강렬한 인상을 남겼습니다.",
    works: [
      { year: 2024, title: "재벌X형사", role: "이강현", type: "Drama" },
      { year: 2022, title: "재벌집 막내아들", role: "모현민", type: "Drama" }
    ],
    news: [
      { title: "박지현, '재벌X형사' 시즌 2 합류 확정", date: "2026.07.01", link: "#" }
    ]
  },
  {
    id: "park-boyoung",
    name: "박보영",
    nameEn: "Park Bo-young",
    gender: "female",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60",
    followers: "9.8M",
    bio: "'뽀블리'라는 애칭으로 불리는 사랑스러운 매력의 소유자입니다. 로맨틱 코미디부터 힐링 드라마까지 완벽하게 소화하는 믿고 보는 배우입니다.",
    works: [
      { year: 2023, title: "정신병동에도 아침이 와요", role: "정다은", type: "Drama" },
      { year: 2017, title: "힘쎈여자 도봉순", role: "도봉순", type: "Drama" }
    ],
    news: [
      { title: "박보영, 따뜻한 선행... 꾸준한 기부 행보", date: "2026.05.05", link: "#" }
    ]
  },
  {
    id: "kim-goeun",
    name: "김고은",
    nameEn: "Kim Go-eun",
    gender: "female",
    image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=800&auto=format&fit=crop&q=60",
    followers: "8.1M",
    bio: "독보적인 분위기와 스펙트럼 넓은 연기력으로 스크린과 브라운관을 종횡무진하는 배우입니다. '도깨비', '파묘' 등으로 흥행 보증수표로 자리 잡았습니다.",
    works: [
      { year: 2024, title: "파묘", role: "이화림", type: "Movie" },
      { year: 2016, title: "도깨비", role: "지은탁", type: "Drama" }
    ],
    news: [
      { title: "김고은, '파묘'로 천만 배우 등극", date: "2026.03.24", link: "#" }
    ]
  },
  {
    id: "gong-yoo",
    name: "공유",
    nameEn: "Gong Yoo",
    gender: "male",
    image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&auto=format&fit=crop&q=60",
    followers: "10.5M",
    bio: "아시아 전역에서 사랑받는 톱스타로, 깊은 눈빛과 부드러운 목소리가 매력적인 배우입니다. '도깨비', '커피프린스 1호점' 등 레전드 작품을 남겼습니다.",
    works: [
      { year: 2024, title: "트렁크", role: "한정원", type: "Drama" },
      { year: 2016, title: "도깨비", role: "김신", type: "Drama" }
    ],
    news: [
      { title: "공유, 넷플릭스 신작 캐스팅 확정", date: "2026.04.18", link: "#" }
    ]
  },
  {
    id: "park-eunbin",
    name: "박은빈",
    nameEn: "Park Eun-bin",
    gender: "female",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60",
    followers: "5.5M",
    bio: "아역 시절부터 다져온 탄탄한 기본기와 성실함으로 매 작품마다 한계 없는 캐릭터 소화력을 보여주는 명품 배우입니다. '이상한 변호사 우영우'로 신드롬을 일으켰습니다.",
    works: [
      { year: 2023, title: "무인도의 디바", role: "서목하", type: "Drama" },
      { year: 2022, title: "이상한 변호사 우영우", role: "우영우", type: "Drama" }
    ],
    news: [
      { title: "박은빈, 백상예술대상 대상의 품격", date: "2026.05.01", link: "#" }
    ]
  },
  {
    id: "hwang-inyoup",
    name: "황인엽",
    nameEn: "Hwang In-youp",
    gender: "male",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=60",
    followers: "14.2M",
    bio: "매력적인 무쌍꺼풀과 남다른 비율로 여심을 저격하는 차세대 글로벌 스타입니다. '여신강림'으로 해외 팬들에게 큰 사랑을 받았습니다.",
    works: [
      { year: 2024, title: "조립식 가족", role: "김산하", type: "Drama" },
      { year: 2020, title: "여신강림", role: "한서준", type: "Drama" }
    ],
    news: [
      { title: "황인엽, 아시아 팬미팅 투어 성황리에 마무리", date: "2026.02.14", link: "#" }
    ]
  },
  {
    id: "bae-inhyuk",
    name: "배인혁",
    nameEn: "Bae In-hyuk",
    gender: "male",
    image: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=800&auto=format&fit=crop&q=60",
    followers: "3.4M",
    bio: "안정적인 연기력과 훈훈한 외모로 쉴 틈 없이 열일 행보를 이어가는 라이징 스타입니다. '슈룹', '치얼업' 등에서 활약했습니다.",
    works: [
      { year: 2023, title: "열녀박씨 계약결혼뎐", role: "강태하", type: "Drama" },
      { year: 2022, title: "치얼업", role: "박정우", type: "Drama" }
    ],
    news: [
      { title: "배인혁, 로맨틱 코미디 주연 발탁", date: "2026.07.19", link: "#" }
    ]
  }
];

export default function ActorsDirectory() {
  const [genderFilter, setGenderFilter] = useState<"all" | "male" | "female">("all");
  
  // Filter and sort actors
  const filteredActors = mockActors
    .filter(actor => genderFilter === "all" || actor.gender === genderFilter)
    .sort((a, b) => a.name.localeCompare(b.name, 'ko-KR'));

  const [selectedActor, setSelectedActor] = useState(filteredActors[0]);

  const handleFilterChange = (filter: "all" | "male" | "female") => {
    setGenderFilter(filter);
    const newFiltered = mockActors
      .filter(actor => filter === "all" || actor.gender === filter)
      .sort((a, b) => a.name.localeCompare(b.name, 'ko-KR'));
    
    // Automatically select the first actor in the new filtered list if the current one is not present
    if (!newFiltered.find(a => a.id === selectedActor.id)) {
      setSelectedActor(newFiltered[0]);
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto w-full space-y-8 pb-24">
      {/* Gender Filter Tabs */}
      <div className="flex gap-2 border-b border-white/10 pb-4">
        {(['all', 'male', 'female'] as const).map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterChange(filter)}
            className={cn(
              "px-5 py-2 rounded-xl text-sm font-bold transition-all border",
              genderFilter === filter
                ? "bg-accent/20 border-accent text-white shadow-lg shadow-accent/10"
                : "bg-card/50 border-white/10 text-secondary hover:bg-card hover:text-white"
            )}
          >
            {filter === 'all' ? '전체' : filter === 'male' ? '남자 배우' : '여자 배우'}
          </button>
        ))}
      </div>

      {/* Actor Selection Tabs */}
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {filteredActors.map((actor) => (
          <button
            key={actor.id}
            onClick={() => setSelectedActor(actor)}
            className={cn(
              "flex items-center gap-3 px-5 py-3 rounded-2xl border transition-all whitespace-nowrap",
              selectedActor.id === actor.id 
                ? "bg-accent/20 border-accent text-white shadow-lg shadow-accent/10" 
                : "bg-card/50 border-white/10 text-secondary hover:bg-card hover:text-white"
            )}
          >
            <div className="w-8 h-8 rounded-full overflow-hidden bg-background shrink-0">
              <img src={actor.image} alt={actor.name} className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-sm tracking-wide">{actor.name}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedActor.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="space-y-12"
        >
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row gap-8 mt-8 mb-12">
            {/* Large Portrait Image */}
            <div className="w-48 md:w-64 shrink-0 rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[3/4]">
              <img src={selectedActor.image} alt={selectedActor.name} className="w-full h-full object-cover" />
            </div>
            
            {/* Info & Actions */}
            <div className="flex-1 flex flex-col justify-end md:pb-4">
              <div className="mb-6">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">{selectedActor.name}</h2>
                <p className="text-2xl text-gray-400 font-medium">{selectedActor.nameEn}</p>
              </div>
              
              <div className="flex gap-4">
                <button className="px-8 py-3.5 bg-accent text-background font-bold rounded-2xl hover:bg-accent/90 transition-colors flex items-center gap-2 text-lg shadow-lg shadow-accent/20">
                  <Heart className="w-5 h-5 fill-current" />
                  팔로우
                </button>
                <button className="px-4 py-3.5 bg-card border border-white/10 rounded-2xl hover:bg-white/5 transition-colors text-white shadow-lg">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
            {/* Left Column */}
            <div className="space-y-8">
              <section className="glass-card p-6">
                <h3 className="text-lg font-semibold text-white mb-4">소개</h3>
                <p className="text-secondary leading-relaxed mb-6">{selectedActor.bio}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background/50 p-4 rounded-xl border border-white/5">
                    <p className="text-sm text-secondary mb-1">팔로워</p>
                    <p className="text-xl font-bold text-white">{selectedActor.followers}</p>
                  </div>
                  <div className="bg-background/50 p-4 rounded-xl border border-white/5">
                    <p className="text-sm text-secondary mb-1">참여 작품</p>
                    <p className="text-xl font-bold text-white">{selectedActor.works.length}</p>
                  </div>
                </div>
              </section>

              <section className="glass-card p-6">
                <h3 className="text-lg font-semibold text-white mb-4">최신 소식</h3>
                <div className="space-y-4">
                  {selectedActor.news.map((item, i) => (
                    <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="block group cursor-pointer relative z-10">
                      <p className="text-sm text-gray-300 group-hover:text-accent transition-colors line-clamp-2">
                        {item.title}
                      </p>
                      <p className="text-xs text-secondary mt-1">{item.date}</p>
                    </a>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column: AI Timeline */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">작품 활동 타임라인</h3>
              
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                {selectedActor.works.map((work, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-card/80 backdrop-blur-md text-accent shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow shadow-accent/20">
                      {work.type === "Drama" ? <Tv className="w-4 h-4" /> : <Film className="w-4 h-4" />}
                    </div>
                    
                    <a 
                      href={`https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=${encodeURIComponent(work.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-5 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all cursor-pointer block hover:-translate-y-1 relative z-10"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-accent font-bold">{work.year}</span>
                        <span className="text-xs px-2 py-1 bg-white/5 rounded text-secondary">{work.type}</span>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-1 hover:text-accent transition-colors">{work.title}</h4>
                      <p className="text-sm text-gray-400">배역: {work.role}</p>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
