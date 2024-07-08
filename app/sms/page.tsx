"use client";

import Input from "@/components/input";
import Button from "../../components/button";
import { useFormState } from "react-dom";
import { smsVerification } from "./action";

const initialState = {
  token: false,
  errors: undefined,
};
export default function SMSLogin() {
  const [state, dispatch] = useFormState(smsVerification, initialState);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Login</h1>
        <h2 className="text-xl">Verify your phone number</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        {state.token ? (
          <Input
            name="token"
            type="number"
            required
            min={100000}
            max={999999}
            placeholder="Verification code"
            key={1}
          />
        ) : (
          <Input
            name="phone"
            type="text"
            required
            placeholder="Phone number"
            errors={state.error?.formErrors}
            key={2}
          />
        )}
        <Button
          text={state.token ? "Verify Token" : "Send Verification Code"}
        />
      </form>
    </div>
  );
}
