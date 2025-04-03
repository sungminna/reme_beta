import type { MetaFunction, ActionFunctionArgs } from "@remix-run/node";
import { motion } from "framer-motion";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { useState } from "react";
import { api } from "~/lib/api";
import WaitlistForm from "~/components/WaitlistForm";
import { PLANS, BRAND_COLOR } from "~/constants/plans";
import axios from "axios";

export const meta: MetaFunction = () => {
  return [
    { title: "Re:Me - AI와 함께하는 개인 회고 플랫폼" },
    { name: "description", content: "Re:Me와 함께 AI 기반 회고로 성장하세요. 크루와 커뮤니티와 함께하는 새로운 회고 문화를 경험해보세요." },
  ];
};

const API_URL = "http://localhost:8000";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const plan = formData.get("plan") as string;
  const feedback = formData.get("feedback") as string;

  try {
    await axios.post(`${API_URL}/api/waitlist`, {
      email,
      plan,
      feedback
    });
    
    return { 
      success: true, 
      message: "대기자 명단 등록이 완료되었습니다." 
    };
  } catch (error: any) {
    if (error.response?.status === 409) {
      return { 
        success: false, 
        message: "이미 등록된 이메일입니다." 
      };
    }
    return { 
      success: false, 
      message: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요." 
    };
  }
};

export default function Index() {
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState("individual");
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
          >
            <span className="block">함께 성장하는 회고</span>
            <span className="block" style={{ color: BRAND_COLOR }}>Re:Me</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            하루 5분, AI와 함께하는 효과적인 회고로<br />
            지속 가능한 성장의 습관을 만들어 드립니다
          </motion.p>
        </div>
      </motion.section>

      {/* App Preview Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* App UI Preview */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="text-2xl font-bold mb-6">Re:Me 앱 미리보기</div>
                <div className="relative">
                  {/* iPhone Frame */}
                  <div className="relative mx-auto w-[375px] h-[754px] bg-black rounded-[45px] shadow-xl p-6">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[25px] bg-black rounded-b-[20px] z-20">
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-[40px] h-[4px] bg-[#333]"></div>
                    </div>
                    {/* Screen Content */}
                    <div className="relative w-full h-full bg-gray-50 rounded-[35px] overflow-hidden">
                      <div className="h-full">
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b">
                          <span className="text-xl font-bold">Re:Me</span>
                          <div className="flex space-x-3">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                          </div>
                        </div>

                        {/* Main Content */}
                        <div className="p-4 space-y-4 overflow-auto h-[calc(100%-120px)]">
                          {/* Challenge Card */}
                          <div className="bg-white rounded-xl p-4 shadow-sm space-y-3">
                            <div className="flex justify-between items-center">
                              <h3 className="font-bold">현재 진행중인 챌린지</h3>
                              <span className="text-blue-500 text-sm">더보기</span>
                            </div>
                            <div className="bg-blue-50 rounded-lg p-3">
                              <div className="flex justify-between items-start">
                                <div>
                                  <p className="font-medium">다이어트 챌린지</p>
                                  <p className="text-sm text-gray-600 mt-1">D-14</p>
                                </div>
                                <div className="bg-blue-500 text-white text-sm px-2 py-1 rounded">진행중</div>
                              </div>
                              <div className="mt-3">
                                <div className="text-sm text-gray-600">달성률</div>
                                <div className="flex items-center space-x-2 mt-1">
                                  <div className="flex-1 h-2 bg-gray-200 rounded-full">
                                    <div className="w-3/4 h-full bg-blue-500 rounded-full"></div>
                                  </div>
                                  <span className="text-sm font-medium">75%</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Crew Section */}
                          <div className="bg-white rounded-xl p-4 shadow-sm space-y-3">
                            <div className="flex justify-between items-center">
                              <h3 className="font-bold">나의 크루</h3>
                              <span className="text-blue-500 text-sm">전체보기</span>
                            </div>
                            <div className="space-y-3">
                              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                                  헬스
                                </div>
                                <div className="flex-1">
                                  <p className="font-medium">헬스 크루</p>
                                  <p className="text-sm text-gray-600">회원 6명</p>
                                </div>
                                <div className="text-sm text-blue-500">오늘 3명 회고</div>
                              </div>
                              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-medium">
                                  독서
                                </div>
                                <div className="flex-1">
                                  <p className="font-medium">독서 크루</p>
                                  <p className="text-sm text-gray-600">회원 4명</p>
                                </div>
                                <div className="text-sm text-blue-500">오늘 2명 회고</div>
                              </div>
                            </div>
                          </div>

                          {/* Weekly Analysis */}
                          <div className="bg-white rounded-xl p-4 shadow-sm space-y-3">
                            <div className="flex justify-between items-center">
                              <h3 className="font-bold">주간 회고 분석</h3>
                              <div className="flex items-center space-x-1">
                                <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/>
                                </svg>
                                <span className="text-blue-500 text-sm">AI 분석</span>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <div className="bg-gray-50 rounded-lg p-3">
                                <p className="text-sm text-gray-600">이번 주 성과</p>
                                <p className="mt-1">운동 목표 달성률이 전주 대비 15% 상승했어요!</p>
                              </div>
                              <div className="bg-gray-50 rounded-lg p-3">
                                <p className="text-sm text-gray-600">개선 포인트</p>
                                <p className="mt-1">식단 관리에 더 신경 쓰면 좋을 것 같아요.</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Navigation */}
                        <div className="absolute bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3 px-6">
                          <button className="text-blue-500 flex flex-col items-center">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span className="text-xs mt-1">홈</span>
                          </button>
                          <button className="text-gray-600 flex flex-col items-center">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="text-xs mt-1">크루</span>
                          </button>
                          <button className="text-gray-600 flex flex-col items-center">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span className="text-xs mt-1">회고</span>
                          </button>
                          <button className="text-gray-600 flex flex-col items-center">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-xs mt-1">목표</span>
                          </button>
                          <button className="text-gray-600 flex flex-col items-center">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span className="text-xs mt-1">프로필</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Waitlist Form */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="text-2xl font-bold mb-6">대기 명단 등록</div>
                <p className="text-gray-500 mb-8">
                  Re:Me의 얼리 액세스에 참여하세요. 새로운 소식과 업데이트를 가장 먼저 받아보실 수 있습니다.
                </p>
                <WaitlistForm />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              성장하는 습관을 만드는 핵심 기능
            </h2>
          </div>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
            {[
              {
                title: "5분 회고",
                description: "AI의 도움으로 빠르고 효과적인 일일 회고",
                icon: "⚡️",
              },
              {
                title: "크루와 함께",
                description: "크루와 함께 인사이트를 공유하며 성장",
                icon: "🤝",
              },
              {
                title: "지속 가능한 성장",
                description: "꾸준한 회고로 만드는 성장 습관",
                icon: "📈",
              },
            ].map((feature) => (
              <motion.div
                key={feature.title}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              나에게 맞는 요금제
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              출시 소식을 가장 먼저 받아보세요
            </p>
          </div>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
            {PLANS.map((plan) => (
              <motion.div
                key={plan.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-4 text-gray-500">{plan.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price.toLocaleString()}</span>
                  <span className="text-base font-medium text-gray-500">원/월</span>
                </p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-2 mt-0.5"
                        fill="none"
                        stroke={BRAND_COLOR}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}

const features = [
  {
    name: "AI-Powered Challenges",
    description: "Create challenges with AI-generated plans and KPIs to track team progress effectively.",
    icon: function ChallengeIcon(props: any) {
      return (
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
          {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        />
      </svg>
      );
    },
  },
  {
    name: "Smart Analytics",
    description: "Get AI-powered insights into your team's growth and areas for improvement.",
    icon: function AnalyticsIcon(props: any) {
      return (
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
          {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
      );
    },
  },
  {
    name: "Crew Collaboration",
    description: "Work together seamlessly with real-time updates, comments, and shared templates.",
    icon: function CollaborationIcon(props: any) {
      return (
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
          {...props}
      >
        <path
          strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
      );
    },
  },
];
