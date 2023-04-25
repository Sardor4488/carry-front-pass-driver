import React from "react";
import { Button, Input, StarIcon, Tooltip } from "@mantine/core";
import { useId } from "@mantine/hooks";
import { IMaskInput } from "react-imask";
import {  useRouter } from "next/router";
const SignUp = () => {
  const id = useId();
  const router = useRouter()
  return (
    <div className=" w-100 h-100vh bg-white fixed z-20 flex justify-center items-center">
      <div className="p-3 w-80 bg-gray-300 rounded-xl">
        <h1 className="text-center ">LOGO</h1>
        <span>Sign up</span>
        <Input.Wrapper className="mb-2 " id={id} label="Your email" required maw={320} mx="auto">
          <Input placeholder="Your email" />
        </Input.Wrapper>
        <Input.Wrapper className="mb-2 " id={id} label="Your password" required maw={320} mx="auto">
          <Input placeholder="Your password" />
        </Input.Wrapper>
        <Button className="bg-blue-600" onClick={() => router.push('/driverMap/driverMap')}>submit</Button>
      </div>
    </div>
  );
};

export default SignUp;
