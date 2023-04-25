import Image from "next/image";
// import { Inter } from "next/font/google";
import { Card, Text, Badge, Button, Group, Center } from "@mantine/core";
import useSWR from "swr";
import { getUsers } from "@/services";
import type { User } from "@/types/user";
import DriverMap from "./driverMap/driverMap";
import SignUp from "./signUp/signUp";
import SignIn from "./signIn/signIn";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data, error } = useSWR("users", getUsers);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data, error);

  return (
    <div className="  ">
      {/* <SignUp/> */}
      <SignIn/>
      {/* <DriverMap/> */}
      
    </div>
  );
}
