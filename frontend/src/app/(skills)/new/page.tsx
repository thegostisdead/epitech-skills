"use client"
import Link from "next/link";
import {Box, Button, Input, Stack, HStack} from "@chakra-ui/react";
import {ArrowBackIcon} from "@chakra-ui/icons";
import React from "react";

const MAX_FILE_SIZE = 1024 * 1024 * 3

export default function SkillsAdd() {
    const [value, setValue] = React.useState('')

    function uploadFile(event: any) {

        const file = event.target.files[0]

        if (file.type === "text/html" && file.size < MAX_FILE_SIZE) {
            setValue(event.target.value)
            console.log("file", file)
        }
    }

    function send() {
        console.log(value)

        // send to api here
        // if the retponse return 200 and the history id then redirect to /history/[id] page with the id
        // else display an error message

    }

    return (
        <>
            <Link href={"/"}>
                <Button m={5} colorScheme='blue' leftIcon={<ArrowBackIcon/>}>Back</Button>
            </Link>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">

                <Stack>
                    <Box>
                        <h1>Add a new Skill</h1>
                    </Box>
                    <Box>

                           <HStack spacing='24px'>
                               <Box>
                                   <Input
                                       value={value}
                                       onChange={uploadFile}
                                       type={'file'} />
                               </Box>
                               <Box>
                                   <Button colorScheme='blue' onClick={send}>Upload</Button>
                               </Box>
                           </HStack>

                    </Box>
                </Stack>
            </main>
        </>
    )
}
