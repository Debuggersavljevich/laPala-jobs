import React from 'react'
import { Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel, 
    Text, 
    Heading, 
    Box, 
    Button, 
    Highlight,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    useToast,
    InputGroup,
    Stack,
    InputLeftElement,
    Input,
    Img,
    
    

    
        } from '@chakra-ui/react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'Yup'
import Lupa from './Lupa'

const Header = () => {
    

    
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()
    


    const jobPostSchema = Yup.object().shape({
        empresa: Yup.string().required('El nombre de la empresa es oblitagorio'),
        puesto: Yup.string().required('El puesto que buscas es oblitagorio'),
        modalidad: Yup.string().required('La modalidad es obligatoria'),
        descripcion: Yup.string().required('La descripcion es obligatoria'),
        email: Yup.string().email('El formato de email es incorrecto').required('El Email es obligatorio')
        
    })
   
    const toastJobPosted = () =>
    toast({
      title: '¡Empleo publicado!',
      description: "Estarás recibiendo los CV's por email.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })

   
    const handleSubmit = async (valores) => {
        try {
            const url = 'http://localhost:4000/jobs'

            const respuesta = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(valores),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            console.log(respuesta)
            const resultado = await respuesta.json()
            console.log(resultado);
        } catch (error) {
            console.log(error);
        }
    }


    
  return (

    <>  
        <div className='flex justify-center mt-36 text-center'>
         
            <Heading size='lg' fontSize='40px'>
                <Highlight query='sencillos' styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.300' }}>
                       Trabajos en 3 sencillos pasos🧉
                </Highlight>
            </Heading>
            
        </div>
        
      

    <div className="flex justify-center mt-16 font-dosis text-2xl text-center bg-indigo-200 p-2 rounded-3xl">

            
            <Tabs size='lg' variant='soft-rounded' colorScheme='green'>
        
            <TabList>
                <Tab >¿Cómo envío mi cv?</Tab>
                <Tab>¿Cómo postulo una oferta?</Tab>
                <Tab>Pero...¿es seguro?</Tab>
            </TabList>
        
        <TabPanels >
            <TabPanel>
            <p>Adjuntá el cv y, ¡Listo!</p>
            </TabPanel>
            <TabPanel>
            <p>Solo llená el formulario</p>
            </TabPanel>
            <TabPanel>
            <p>No guardamos tu CV ni ningún dato</p>
            </TabPanel>
        </TabPanels>
        </Tabs>
      

    </div>
        
  
    <div className="flex justify-center m-6">
        <Button colorScheme='teal' size='md' onClick={onOpen}>Postular empleo</Button>
        
        <div className="ml-6">
            <Stack spacing={4}>
                        <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<Lupa/>}
                            />
                    <Input type='tel' placeholder='Buscar un empleo...' />
                </InputGroup>
            </Stack>
        </div>


        <Modal isOpen={isOpen} onClose={onClose}>
              <Stack spacing={4}>
                    <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        
                        />
                <Input type='tel' placeholder='Buscar' />
            </InputGroup>
        </Stack>
       
      
            <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Postular un empleo</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Formik initialValues={{
                            empresa: '',
                            puesto: '',
                            modalidad: '',
                            descripcion: '',
                            email: '',
                            location: ''
                        }}
                            onSubmit={async (values, {resetForm})=>{
                                await handleSubmit(values)

                                resetForm()
                            }}
                            validationSchema={jobPostSchema}
                            >
                            {({errors})=> {
                                
                                return(
                             
                            <Form>
                                <div className="mb-4">
                                    <label htmlFor="empresa" className='font-bold'>Empresa: </label>
                                    <Field 
                                    name="empresa"
                                    id="empresa"
                                    type="text"
                                    className="m-1 bg-gray-100 rounded-lg border-4 w-full"
                                    placeholder="Nombre de la empresa..."
                                    />
                                    <ErrorMessage name='empresa' component="div" className="text-white bg-red-500 rounded-xl font-bold text-center"/>
                                </div>  
                                <div className="mb-4">
                                    <label htmlFor="puesto" className='font-bold'>Puesto: </label>
                                    <Field 
                                    name="puesto"
                                    id="puesto"
                                    type="text"
                                    className="m-1 bg-gray-100 rounded-lg border-4 w-full"
                                    placeholder="Nombre del puesto..."
                                    />
                                    <ErrorMessage name='puesto' component="div" className="text-white bg-red-500 rounded-xl font-bold text-center"/>

                                </div>
                                <div className="mb-4">
                                    <label htmlFor="modalidad" className='font-bold'>Modalidad: </label>
                                    <Field 
                                    name="modalidad"
                                    id="modalidad"
                                    type="text"
                                    className="m-1 bg-gray-100 rounded-lg border-4 w-full"
                                    placeholder="Presencial, Híbrido, Remoto..."
                                    />
                                    <ErrorMessage name='modalidad' component="div" className="text-white bg-red-500 rounded-xl font-bold text-center"/>

                                </div>
                                <div className="mb-4">
                                    <label htmlFor="location" className='font-bold'>Localidad: </label>
                                    <Field 
                                    name="location"
                                    id="location"
                                    type="text"
                                    className="m-1 bg-gray-100 rounded-lg border-4 w-full"
                                    placeholder="location al que llegaran los CV's"
                                    />
                                    <ErrorMessage name='location' component="div" className="text-white bg-red-500 rounded-xl font-bold text-center"/>

                                </div>
                                <div className="mb-4">
                                    <label htmlFor="descripcion" className='font-bold'>Descripción: </label>
                                    <Field 
                                    name="descripcion"
                                    as="textarea"
                                    id="descripcion"
                                    type="text"
                                    className="m-1 bg-gray-100 rounded-lg border-4 w-full"
                                    placeholder="Describí el empleo/rol a desempeñar"
                                    />
                                    <ErrorMessage name='descripcion' component="div" className="text-white bg-red-500 rounded-xl font-bold text-center"/>

                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className='font-bold'>Tu email: </label>
                                    <Field 
                                    name="email"
                                    id="email"
                                    type="text"
                                    className="m-1 bg-gray-100 rounded-lg border-4 w-full"
                                    placeholder="Email al que llegaran los CV's"
                                    />
                                    <ErrorMessage name='email' component="div" className="text-white bg-red-500 rounded-xl font-bold text-center"/>

                                </div>
                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={handleSubmit && onClose}>
                                        <input type="submit" value="Publicar" onClick={toastJobPosted}/>
                                    </Button>
                                </ModalFooter>
                            </Form>
                            )}}
                        </Formik>                             
                    </ModalBody>
                    
                    
                </ModalContent>
        </Modal>
    </div>

    </>
  )
}

export default Header


