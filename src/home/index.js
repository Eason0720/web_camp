import Layout from "../Layout";
import { useState, useEffect } from "react";
import {
    MagnifyingGlassIcon,
    XMarkIcon
} from "@heroicons/react/24/outline"
import { motion,AnimatePresence } from "framer-motion";

export default function HomeIndex() {
    const [pets, setPets] = useState([])
    const [selectPets,SetSelectedPets] = useState([])

    const [searchParam, setSeachParam] = useState("")
    const [selectedID, setSelectedID] = useState(null)

    async function getPets() {
        const res = await fetch("https://milliax.github.io/raw/web_dev/pets.json")
        const response = await res.json();

        console.log(response)
        setPets(response)
        SetSelectedPets(response)
    }

    function  updateSelectedPets(){
        console.log("update Pets!!")
        const param = searchParam

        SetSelectedPets(pets.filter((pet)=>{
            if(pet.name.includes(param) && pet.breed.includes(param)){
                return true
            }else{
                return false
            }
        }))
    }

    useEffect(() => {
        getPets()
    }, [])
    return (
        <Layout className="bg-gray-100">
            <div className="flex flex-row justify-center mt-5">
                    <form onSubmit={(event) => {
                        event.preventDefault();
                    }} className="flex flex-row bg-white w-fit py-1 items-center rounded-full pl-2 pr-1 border">
                        <input type="text" className="outline-none px-1 w-80"
                         value={searchParam} 
                         onChange={(e) => { updateSelectedPets(e.target.value)}}/>
                        <MagnifyingGlassIcon className="h-5 px-2 curson-pointer" 
                        onClick={() => {updateSelectedPets()}}/>
                    </form>
                </div>
            <div className="grid grid-cols-2 gap-4 py-5 bg-blue-100 cursor-default select-none text-center">
                  {selectPets.map((pet,cnt) => (
                        <motion.div key={pet.name} className="w-40 h-15 bg-red-100 flex-col justify-between">
                        <div className="flex justify-center">
                            <img src={pet.imageURL} alt={` ${pet.name}的照片`} className="w-20 h-20 object-cover rounded-lg" />
                        </div>
                        <div className="w-full text-center">
                           {pet.name} {pet.breed} 
                        </div>
                    </motion.div>
                  ))}
                <AnimatePresence initial={false}>
                    {selectedID && <motion.div layout={selectedID} className="fixed w-80 h-80 top-0 mt-[calc(50vh-10rem)] left-0 ml-[calc(50%-10rem)] bg-white rounded-lg border border-gray-600">
                        <div className="flex flex-col px-5 py-3">
                            <XMarkIcon onClick={() => { setSelectedID(null) }} className="h-6 self-end text-red-500 hover:text-red-800 cursor-pointer" />
                            <div>
                                <div className="flex justify-center">
                                    <img src={selectPets[selectedID].imageURL} alt={`${selectPets[selectedID].name}的照片`} className="w-20 h-20 object-cover rounded-lg" />
                                </div>
                                <div className="w-full text-center">
                                    {selectPets[selectedID].name} {selectPets[selectedID].breed}
                                </div>
                                <div className="h-40 overflow-y-auto">
                                    {selectPets[selectedID].description}
                                </div>
                            </div>
                        </div>
                    </motion.div>}
                </AnimatePresence>
            </div>
        </Layout>
    )
}

// function A(){
//     return setTimeout(() => {
//         console.log("A")
//     },2000)
// }
// function B(){
//     return setTimeout(() => {
//         console.log("B")
//     },1000)
// }