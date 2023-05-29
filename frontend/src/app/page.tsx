"use client"
import {Box, VStack, StackDivider, Heading, Text, Stack, Button} from "@chakra-ui/react";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

        <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
            align='stretch'
        >
            <Box h='40px'>
                <h1 className="text-4xl font-bold text-center">Epitech skills</h1>
            </Box>
            <Box h='40px'>
                <Stack spacing={8} direction='row'>
                    <Box p={5} shadow='md' borderWidth='1px' borderRadius={5}>
                        <Heading fontSize='xl'>⚡ Analyze</Heading>
                        <Text mt={4}>Send your last skills data. We gonna analyze them for you!</Text>
                        <Link href="/new">
                            <Button mt={4} colorScheme='blue'>Add skills</Button>
                        </Link>
                    </Box>
                    <Box p={5} shadow='md' borderWidth='1px' borderRadius={5}>
                        <Heading fontSize='xl'>🗄See skill history</Heading>
                        <Text mt={4}>Visualize all your skills from the past until now!</Text>
                        <Link href="/history">
                            <Button mt={4} colorScheme='blue'>See history</Button>
                        </Link>
                    </Box>
                </Stack>
            </Box>
        </VStack>

    </main>
  )
}
