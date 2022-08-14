import { useEffect, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Badge,
    Stack,
    Input,
    InputGroup,
    InputLeftAddon 
    
  } from '@chakra-ui/react'
import Image from './Image'
        

        const Details = ({empresa, puesto, modalidad, descripcion, email, location}) => {
        
           


        const { isOpen, onOpen, onClose } = useDisclosure()

        return (
                    <>
                    
                            <div className='flex-2 px-4 py-2'>
                                <div className='flex flex-grow'>
                                    <p className='mr-2 flex justify-center items-center text-center'>Empresa: {empresa}</p>
                                </div>
                                <p className='my-2'>Puesto: {puesto}</p>
                                <div className='flex flex-grow'>
                                    <Stack direction="row">
                                    {/* <small className='md:text-gray-900  bg-red-200 rounded-xl mr-2 p-1'>{modalidad}</small>
                                    <small className='md:text-gray-900  bg-red-200 rounded-xl mr-2 p-1'>{location}</small> */}
                                    <Badge fontSize='sm' fontWeight='bold' colorScheme='green' >{modalidad}</Badge>
                                    <Badge fontSize='sm' fontWeight='bold' colorScheme='purple' >{location}</Badge>
                                    </Stack>
                                </div>
                                <div className="mt-4">
                                <Button onClick={onOpen}>Ver Más</Button>

                                    <Modal isOpen={isOpen} onClose={onClose}>
                                    <ModalOverlay />
                                    <ModalContent>
                                        <ModalHeader>Trabajá en {empresa}</ModalHeader>
                                        <ModalCloseButton />
                                        <ModalBody>
                                            <div className="font-bold font-lato">
                                                <Image />
                                                <p className='mr-2 flex justify-start'>Modalidad: {modalidad}</p>
                                                <p className='mr-2 flex justify-start'>Localidad: {location}</p>
                                                <p className='mr-2 flex justify-start'>Descripcion: {descripcion}</p>
                                                <p className='mr-2 flex justify-start'>Enviar cv a: {email}</p>
                                                <br />
                                                <p className='font-bold font-dosis p-1 bg-teal-200 rounded-xl text-center text-xl '>¡No te olvides de adjuntar tu CV cuando lo envíes!</p>
                                            </div>
                                        </ModalBody>

                                        <ModalFooter>

                                                <InputGroup className="mr-2">
                                                    <InputLeftAddon children='Tu CV:' mr="1" />
                                                    
                                                    <Input type='file' placeholder='Seleccionar archivo' />
                                                   
                                                </InputGroup>


                                                <Button colorScheme='blue' mr={3} onClick={onClose}>
                                                    Aplicar
                                                </Button>
                                            
                                        </ModalFooter>
                                    </ModalContent>
                                    </Modal>
                                </div>
                            </div>
                            
                       
                     </>
  )
}

export default Details