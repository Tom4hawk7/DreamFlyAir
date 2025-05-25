"use client";

import { useGlobalStore } from "@/stores/globalStore";
import { usePassengerStore } from "@/stores/passengerStore";
import Form from "next/form";
import { useRouter } from "next/navigation";

interface FormProps {
  children: React.ReactNode;
  className: string;
}

export default function HomeForm({ children, className }: FormProps) {
  const router = useRouter();

  const setDetails = useGlobalStore(action => action.setDetails);
  const setPassengers = usePassengerStore(action => action.setPassengers);

  const action = (formData: FormData) => {
    // set global details
    setDetails(
      formData.get("location") as string,
      formData.get("destination") as string,
      Boolean(formData.get("hasReturnFlight")),
      formData.get("startDate") as string,
      formData.get("endDate") as string
    );

    // set empty passenger arrays
    setPassengers(
      new Array(Number(formData.get("adult"))),
      new Array(Number(formData.get("children"))),
      new Array(Number(formData.get("infant")))
    );

    router.push("/booking/flight");
  };

  return (
    <Form className={className} action={action}>
      {children}
    </Form>
  );
}
