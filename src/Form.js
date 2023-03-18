import React from 'react';
import { useForm } from 'react-hook-form';
import logo from './assets/Dungeons-and-Dragons-Logo.jpg';
import map from './assets/dndmap.jpg'

const StatsForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <>
    <div style={{ backgroundImage: `url(${map})`}} className='bgMap'>
    <div className='flex justify-center border-4 border-red-300 py-4'>
    <div className='items-center m-4 '>
        <img src={logo} alt='logo' className='object-scale-down h-40 border-8 border-red-700'/>
    </div>
    <form onSubmit={handleSubmit(onSubmit)}> 
    
            <input className='rounded-t-3xl rounded-b-3xl text-center mt-10 m-4 p-6 border-red-700 border-4 rounded-lg w-full max-w-4xl h-12 appearance-none leading-tight border border-gray-200 bg-whitetext-gray-700 focus:outline-none focus:bg-white focus:border-gray-500' type="text" placeholder="Character Name" {...register("CharacterName", {required: true, maxLength: 20})} />
            <div className='rounded-t-3xl rounded-b-3xl border-4 border-red-700 bg-white container p-6 m-4 w-full max-w-4xl mt-10 grid grid-cols-4 gap-6'>
                <input className='text-center border-red-700 border-4 rounded-lg w-48 h-12 appearance-none leading-tight border border-gray-200 bg-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500' type="text" placeholder="Class & Level" {...register("Class&level", {required: true, maxLength: 20})} />
                <input className='text-center border-red-700 border-4 rounded-lg w-48 h-12 appearance-none leading-tight border border-gray-200 bg-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500' type="text" placeholder="Background" {...register("Background", {required: true, maxLength: 20})} />
                <input className='text-center border-red-700 border-4 rounded-lg w-48 h-12 appearance-none leading-tight border border-gray-200 bg-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500' type="text" placeholder="PlayerName" {...register("PlayerName", {required: true, maxLength: 30})} />             
                <select className='text-center border-red-700 border-4 rounded-lg w-48 appearance-none h-12 leading-tight border border-gray-200 bg-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500' {...register("Faction", { required: false })}>
                    <option>Faction...</option>
                    <option value="Harpers">The Harpers</option>
                    <option value="LordsAlliance">The Lords Alliance</option>
                    <option value="OrderOfTheGauntlet">The Order of the Gauntlet</option>
                    <option value="EmeraldEnclav">The Emerald Enclave</option>
                    <option value="Zhentarim">The Zhentarim</option>
                </select>
                <select className='text-center border-red-700 border-4 rounded-lg w-48 appearance-none h-12 leading-tight border border-gray-200 bg-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500' {...register("Race", { required: true })}>
                    <option>Race...</option>
                    <option value="Dragonborn">Dragonborn</option>
                    <option value="Dwarf">Dwarf</option>
                    <option value="Elf">Elf</option>
                    <option value="Gnome">Gnome</option>
                    <option value="HalfElf">Half-Elf</option>
                    <option value="Halfling">Halfling</option>
                    <option value="HalfOrc">Half-Orc</option>
                    <option value="Human">Human</option>
                    <option className='text-center' value="Tiefling">Tiefling</option>
                </select>
                <select className='text-center border-red-700 border-4 rounded-lg w-48 appearance-none mb-2 h-12 leading-tight border border-gray-200 bg-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500' {...register("Alignment", { required: true })}>
                    <option>Alignment...</option>
                    <option value="LawfulGood">Lawful Good</option>
                    <option value="NeutralGood">Neutral Good</option>
                    <option value="ChaoticGood">Chaotic Good</option>
                    <option value="LawfulNeutral">Lawful Neutral</option>
                    <option value="TrueNeutral">True Neutral</option>
                    <option value="ChaoticNeutral">Chaotic Neutral</option>
                    <option value="LawfulEvil">Lawful Evil</option>
                    <option value="NeutralEvil">Neutral Evil</option>
                    <option value="ChaoticEvil">Chaotic Evil</option>
                </select>
                <input className='text-center border-red-700 border-4 rounded-lg w-48 mb-2 h-12 appearance-none leading-tight border border-gray-200 bg-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500' type="text" placeholder="Experience Points" {...register("XP", {required: true, maxLength: 9})} />
                <input className='text-center border-red-700 border-4 rounded-lg w-48 mb-2 h-12 appearance-none leading-tight border border-gray-200 bg-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500' type="text" placeholder="DCI Number" {...register("DCI", {required: false, maxLength: 9})} />
            </div>
            <div className='rounded-t-3xl rounded-b-3xl border-4 border-red-700 bg-red-700 container p-6 m-4 w-full max-w-4xl mt-10 grid place-items-center grid-cols-6 gap-6 flex flex-wrap'>
            <i className="fa-solid fa-dumbbell fa-2xl"></i>
            <i className="fa-solid fa-hands fa-2xl"></i>
            <i className="fa-solid fa-building-columns fa-2xl"></i>
            <i className="fa-solid fa-brain fa-2xl"></i>
            <i className="fa-solid fa-book-open fa-2xl"></i>
            <i className="fa-solid fa-person-rays fa-2xl"></i>
            <input className='text-center border-red-700 border-4 rounded-lg w-48 mb-2 h-12 appearance-none leading-tight border border-gray-200 bg-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500' type="text" placeholder="Strength" {...register("Strength", {required: true, maxLength: 2})} />
            </div>
            <div className='grid place-items-center '>
            <input type="submit" value="SUBMIT" className=' font-bold text-center text-xl text-white border-red-700 border-4 rounded-lg bg-red-700 p-2 w-40'/>
            </div>
    </form>
    </div>
    </div>
    </>
  );
}

export default StatsForm;