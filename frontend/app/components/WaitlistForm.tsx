import { Form, useActionData, useNavigation } from "@remix-run/react";
import { useState } from "react";
import { PLANS, BRAND_COLOR } from "~/constants/plans";

interface ActionData {
  success: boolean;
  message: string;
}

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState("individual");
  const [feedback, setFeedback] = useState("");
  const actionData = useActionData<ActionData>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form method="post" className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          이메일
        </label>
        <div className="mt-1">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md text-gray-900"
            placeholder="your@email.com"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="plan" className="block text-sm font-medium text-gray-700">
          관심 있는 요금제
        </label>
        <select
          id="plan"
          name="plan"
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md text-gray-900"
        >
          {PLANS.map((plan) => (
            <option key={plan.id} value={plan.id}>
              {plan.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
          의견을 들려주세요
        </label>
        <div className="mt-1">
          <textarea
            id="feedback"
            name="feedback"
            rows={3}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md text-gray-900"
            placeholder="Re:Me에 바라는 점이나 궁금한 점을 자유롭게 적어주세요."
          />
        </div>
        <p className="mt-2 text-sm text-gray-500">
          여러분의 의견은 더 나은 서비스를 만드는데 큰 도움이 됩니다.
        </p>
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400"
          style={{ backgroundColor: isSubmitting ? undefined : BRAND_COLOR }}
        >
          {isSubmitting ? "등록 중..." : "대기자 명단 등록하기"}
        </button>
      </div>

      {actionData?.message && (
        <div
          className={`rounded-md p-4 ${
            actionData.success 
              ? "bg-green-50 text-green-700 border border-green-200" 
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          <div className="flex">
            <div className="flex-shrink-0">
              {actionData.success ? (
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">{actionData.message}</p>
            </div>
          </div>
        </div>
      )}
    </Form>
  );
} 