import type React from "react";

export interface SendEmailEvent extends React.FormEvent<HTMLFormElement> {
  target: HTMLFormElement & {
    email: { value: string };
    reset: () => void;
  };
}
