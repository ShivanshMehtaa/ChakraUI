import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = () => {
  return (
    <Container width={'container.xl'} h={"100vh"} p={'16'} w={['full', '96']}>
        <VStack color={"purple.500"} h={'100vh'} p={'16'} >
            <AiOutlineCloudUpload size={'10vmax'}/>
            <form action="">
                <VStack>
                    <Input required={'true'} type={'file'} css={{
                        "&::file-selector-button":{
                            border: 'none',
                  width: 'calc(100% + 36px)',
                  height: '100%',
                  marginLeft: '-18px',
                  color: 'purple',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                        },
                    }}/>
                    <Button variant={'outline'} colorScheme={'purple'} type={'submit'}>Upload</Button>
                </VStack>
            </form>
        </VStack>
    </Container>
  )
}

export default Upload
