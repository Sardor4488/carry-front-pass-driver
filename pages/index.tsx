import Image from "next/image";
import { Inter } from "next/font/google";
import { Card, Text, Badge, Button, Group, Center } from "@mantine/core";
import useSWR from "swr";
import { getUsers } from "@/services";
import type { User } from "@/types/user";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data, error } = useSWR("users", getUsers);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data, error);

  return (
    <div className="flex justify-center flex-col items-center w-full h-screen p-8">
      <Card shadow="sm" padding="lg" radius="md" withBorder w="350px" m="auto">
        <Card.Section>
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            width={350}
            height={169}
            alt="Norway"
            priority
          />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>Norway Fjord Adventures</Text>
          <Badge color="pink" variant="light">
            On Sale
          </Badge>
        </Group>

        <Text size="sm" color="dimmed" className={inter.className}>
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway
        </Text>

        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Book classic tour now
        </Button>
      </Card>
      <Group>
        {data.map((user: User) => (
          <Card key={user.id} shadow="sm" withBorder>
            {user.name}
          </Card>
        ))}
      </Group>
    </div>
  );
}
