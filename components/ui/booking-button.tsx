"use client";

import { PopupButton } from "@typeform/embed-react";
import { cn } from "@/lib/utils"; // Assuming you have a utility for merging classes
import { ReactNode } from "react";

interface BookingButtonProps {
  id?: string;
  className?: string;
  children?: ReactNode;
}

// Temporary placeholder ID - User shoud replace this with their actual Typeform ID
const DEFAULT_FORM_ID = "tMwdhIl1";
// Calendly Link - Replace with your actual Calendly URL
const CALENDLY_URL = "https://calendly.com/dariusosadici/online-consulting";

export const BookingButton = ({
  id = DEFAULT_FORM_ID,
  className,
  children,
}: BookingButtonProps) => {
  const handleBooking = () => {
    // Open Calendly in a new tab
    window.open(CALENDLY_URL, "_blank");
  };

  return (
    <PopupButton
      id={id}
      className={cn(
        "inline-flex items-center justify-center transition-all duration-300",
        className,
      )}
      onSubmit={handleBooking}
      onClose={() => {
        // Optional: logic when they close the modal without submitting
        console.log("Modal closed");
      }}
    >
      {children}
    </PopupButton>
  );
};
