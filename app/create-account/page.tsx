import FormInput from "@/components/form-input";
import FormButton from "../../components/form-btn";
import SocialLogin from "@/components/social-login";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput type="text" required placeholder="Username" errors={[]} />
        <FormInput type="email" required placeholder="Email" errors={[]} />
        <FormInput
          type="password"
          required
          placeholder="Password"
          errors={[]}
        />
        <FormInput
          type="password"
          required
          placeholder="Confirm Password"
          errors={[]}
        />
        <FormButton text="Create Account" loading={false} />
      </form>
      <SocialLogin />
    </div>
  );
}
