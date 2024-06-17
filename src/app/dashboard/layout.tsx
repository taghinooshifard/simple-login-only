'use client'
import { AxiosError } from "axios";
import CallApi from "../helper/callApi";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface UserData {
  user: string | null;
  error: AxiosError | null;
}

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    (async () => {
      const { user, error } = await getUser();

      if (error) {
        router.push("/");
        return
      }
      setIsSuccess(true);
    })();
  }, [router]);
  if(!isSuccess) return <div>loading...</div>
  return <div>{children}</div>;
}
async function getUser(): Promise<UserData> {
  try {
    const res = CallApi().get("/me");
    return { user: (await res).data, error: null };
  } catch (error) {
    const err = error as AxiosError;
    return { user: null, error: err };
  }
}
