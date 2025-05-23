"use client";

import { useGlobalStore } from "@/stores/globalStore";
import Form from "next/form";
import { useRouter } from "next/navigation";

interface FormProps {
  children: React.ReactNode;
  className: string;
}

export default function HomeForm({ children, className }: FormProps) {
  const router = useRouter();
  const setDetails = useGlobalStore(action => action.setDetails);

  const action = (formData: FormData) => {
    setDetails(
      formData.get("location") as string,
      formData.get("destination") as string,
      Boolean(formData.get("hasReturnFlight"))
    );

    router.push("/booking/flight");
  };

  return (
    <Form className={className} action={action}>
      {children}
    </Form>
  );
}
