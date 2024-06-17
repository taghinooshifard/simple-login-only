"use client";
import { useRouter } from "next/navigation";
import LoginForm from "./login/LoginForm";

export default function Home() {
  const router = useRouter();
  return <LoginForm router={router} />;
}
