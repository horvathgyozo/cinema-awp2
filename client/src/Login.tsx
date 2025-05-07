import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useAuthStore } from "./useAuthStore";
import { useNavigate } from "react-router";

export default function Login() {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  // uncontrolled form components
  // 1.
  // const emailRef = useRef<HTMLInputElement>(null);
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log(emailRef.current?.value);
  // };
  // 2.
  // const handleSubmit = (formData: FormData) => {
  //   console.log(formData.get("email"));
  // };
  // Controlled form components
  // 3.
  // const [email, setEmail] = useState("apple");
  // const [password, setPassword] = useState("apple");
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log(email);
  //   console.log(password);
  // };
  // 3.
  const [formData, setFormData] = useState({
    email: "pear",
    password: "plum",
  });
  const handleChange = (e: React.ChangeEvent) => {
    // const newFormData = structuredClone(formData);
    // newFormData[e.target.id as "email" | "password"] = (
    //   e.target as HTMLInputElement
    // ).value;
    // setFormData(newFormData);
    setFormData({
      ...formData,
      [e.target.id as "email" | "password"]: (e.target as HTMLInputElement)
        .value,
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(formData.email);
    // console.log(formData.password);
    login(formData.email);
    navigate("/");
  };

  return (
    <div className="container mx-auto flex items-center justify-center my-10">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          {/* <form noValidate className="space-y-4" onSubmit={handleSubmit}> */}
          {/* <form noValidate className="space-y-4" action={handleSubmit}> */}
          <form noValidate className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              {/* <Input ref={emailRef} id="email" type="email" required /> */}
              {/* <Input name="email" id="email" type="email" required /> */}
              <Input
                value={formData.email}
                onChange={handleChange}
                id="email"
                type="email"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input
                value={formData.password}
                onChange={handleChange}
                id="password"
                type="password"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <p className="text-center text-sm">
              Don't have an account?{" "}
              <span className="text-blue-500 hover:underline cursor-pointer">
                Register
              </span>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
