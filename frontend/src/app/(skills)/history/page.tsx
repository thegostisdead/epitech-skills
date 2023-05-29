"use client"
import {Input, Text, VStack, Box, Button, InputRightAddon, InputGroup, InputLeftElement, InputRightElement} from "@chakra-ui/react";
import {ArrowBackIcon, EmailIcon, CheckIcon} from "@chakra-ui/icons";
import Link from "next/link";

export default function SkillsAdd() {
    return (
        <>
            <Link href={"/"}>
                <Button m={5} colorScheme='blue' leftIcon={<ArrowBackIcon />}>Back</Button>
            </Link>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <VStack>
                    <Box>
                        <Text mt={4}>Email</Text>
                        <InputGroup size='sm'>
                        <Input placeholder='john.doe' />
                            <InputRightElement>
                                <CheckIcon color='green.500' />
                            </InputRightElement>
                            <InputLeftElement pointerEvents='none'>
                                <EmailIcon color='gray.300' />
                            </InputLeftElement>
                            <InputRightAddon children='@epitech.eu' />
                        </InputGroup>
                    </Box>
                    <Box>
                        <Button>See</Button>
                    </Box>
                </VStack>
            </main>
        </>
    )
}
