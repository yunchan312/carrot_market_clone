import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";

export default function SocialLogin() {
  return (
    <>
      <div className="w-full h-px bg-neutral-500" />
      <div className="flex flex-col gap-3">
        <Link
          className="primary-btn flex h-10 items-center justify-center gap-3"
          href="/sms"
        >
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />
          </span>
          <span>Continue with SMS</span>
        </Link>
        <Link
          className="primary-btn flex h-10 items-center justify-center gap-3"
          href="/github/start"
        >
          <span>
            <FiGithub className="h-6 w-6" />
          </span>
          <span>Continue with Github</span>
        </Link>
      </div>
    </>
  );
}
